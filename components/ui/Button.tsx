import { cn } from '@/components/utils/cn'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function Button({ className, children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={cn('px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed', className)}
    >
      {children}
    </button>
  )
}

