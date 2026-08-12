import { Redis } from '@upstash/redis';

// Upstash Redis istemcisi — Vercel env değişkenlerinden otomatik yapılandırılır
// Gerekli env değişkenleri: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
let redis = null;

function getRedis() {
  if (!redis) {
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
      console.warn('KV/Redis veritabanı yapılandırılmamış. Yeni yorumlar kaydedilemez.');
      return null;
    }

    redis = new Redis({ url, token });
  }
  return redis;
}

const YORUMLAR_KEY = 'yorumlar';

/**
 * Redis'teki yorumları getirir.
 * Redis yoksa boş dizi döner.
 */
export async function getKVYorumlar() {
  const client = getRedis();
  if (!client) return [];

  try {
    const data = await client.get(YORUMLAR_KEY);
    if (!data) return [];
    // Upstash otomatik JSON parse eder
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Redis okuma hatası:', err);
    return [];
  }
}

/**
 * Yeni bir yorumu Redis'e kaydeder.
 * Mevcut seed verisi (JSON dosyası) e-postalarını da kontrol eder.
 */
export async function saveYorumToKV(yeniYorum) {
  const client = getRedis();
  if (!client) {
    throw new Error('Redis yapılandırılmamış.');
  }

  const mevcutYorumlar = await getKVYorumlar();
  mevcutYorumlar.push(yeniYorum);
  await client.set(YORUMLAR_KEY, mevcutYorumlar);
}

/**
 * Redis'ten id'si eşleşen yorumu siler.
 * Silinen bir yorum yoksa false döner.
 */
export async function deleteYorumFromKV(id) {
  const client = getRedis();
  if (!client) {
    throw new Error('Redis yapılandırılmamış.');
  }

  const mevcutYorumlar = await getKVYorumlar();
  const kalanYorumlar = mevcutYorumlar.filter((y) => y.id !== id);
  if (kalanYorumlar.length === mevcutYorumlar.length) {
    return false;
  }

  await client.set(YORUMLAR_KEY, kalanYorumlar);
  return true;
}
