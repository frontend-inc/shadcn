"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from 'lucide-react'
import { cn } from "../lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false)

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer relative h-5 w-5 shrink-0 rounded-sm border-2 border-default-200 transition-all",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-primary-foreground")}
      >
        <Check className="h-3 w-3 transition-transform duration-200 ease-in-out" />
      </CheckboxPrimitive.Indicator>
      <span 
        className={cn(
          "absolute inset-0 rounded-sm bg-primary/20 scale-0 transition-transform duration-300",
          isPressed && "scale-100"
        )}
      />
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

