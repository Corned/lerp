import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "norelative noflex now-full notouch-none noselect-none noitems-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="norelative noh-2 now-full nogrow nooverflow-hidden norounded-full nobg-secondary">
      <SliderPrimitive.Range className="noabsolute noh-full nobg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="noblock noh-5 now-5 norounded-full noborder-2 noborder-primary nobg-background noring-offset-background notransition-colors focus-visible:nooutline-none focus-visible:noring-2 focus-visible:noring-ring focus-visible:noring-offset-2 disabled:nopointer-events-none disabled:noopacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
