import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'btn-base btn-light',
        secondary:
          'btn-base btn-dark',
        outline:
          'btn-base btn-light',
        ghost:
          'bg-transparent text-foreground-muted border-transparent hover:bg-surface-alt hover:text-foreground active:scale-[0.98]',
        accent:
          'bg-accent text-foreground-inverse border-accent hover:bg-accent-dark hover:border-accent-dark active:scale-[0.98]',
      },
      size: {
        sm: 'text-sm px-4 py-1.5 rounded-md',
        md: 'text-base px-6 py-2.5 rounded-lg',
        lg: 'text-lg px-8 py-3.5 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export function Button({ className, variant, size, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

// Link olarak da kullanılabilsin (Next.js Link ile)
export function ButtonLink({ className, variant, size, children, ...props }) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </a>
  );
}

export { buttonVariants };
