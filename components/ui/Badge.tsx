import { cn } from '@/components/utils/cn'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export default function Badge({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span {...props} className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-brand-500/15 text-brand-300 border border-brand-500/30', className)}>
      {children}
    </span>
  )
}

