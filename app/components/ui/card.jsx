import { cn } from '@/lib/utils';

export function Card({ className, children, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-border p-6 shadow-sm transition-all duration-300',
        hover && 'hover:shadow-lg hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, as: Tag = 'h3', ...props }) {
  return (
    <Tag
      className={cn(
        'font-heading text-xl font-semibold text-secondary',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p
      className={cn('text-foreground-muted leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('mt-6 flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
