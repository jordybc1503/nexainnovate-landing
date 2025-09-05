import { cn } from '@/components/utils/cn'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export default function Section({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section {...props} className={cn('mx-auto max-w-7xl px-4 py-16', className)}>
      {children}
    </section>
  )
}

