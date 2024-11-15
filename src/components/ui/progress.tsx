
import * as React from "react"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, className = "", ...props }, ref) => {
    const percentage = Math.min(Math.max(value, 0), max) / max * 100

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }