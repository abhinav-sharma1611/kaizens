import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#ead485] from-28% to-[#3257e8] via-70% via-[#3795dd] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-linear-115 from-[#fff1be] from-28% via-[#e6be60] via-70% to-[#3053de]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
