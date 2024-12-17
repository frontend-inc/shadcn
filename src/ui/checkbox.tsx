"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "../lib/utils"

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checked?: boolean // Controlled `checked` state
  onCheckedChange?: (checked: boolean) => void // Controlled handler
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, checked, onCheckedChange, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    checked={checked} // Pass down the `checked` prop
    onCheckedChange={onCheckedChange} // Handle state changes
    className={cn(
      "peer relative h-5 w-5 shrink-0 rounded-sm border-2 border-default-200 transition-all",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "after:content-[''] after:block after:absolute after:inset-0 after:rounded-sm after:bg-primary/20 after:scale-0 after:transition-transform after:duration-300",
      "active:after:scale-100",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-primary-foreground")}
    >
      <Check className="h-3 w-3 transition-transform duration-200 ease-in-out" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = "Checkbox"

export { Checkbox }
