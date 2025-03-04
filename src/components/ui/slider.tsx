"use client"

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
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full dark:bg-dark_empty_slider_bar  bg-empty_slider_bar">
      <SliderPrimitive.Range className="absolute h-full bg-fullSlider_soft_cyan dark:bg-dark_fullSlider_soft_cyan" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full dark:bg-dark_fullSlider_soft_cyan  bg-fullSlider_soft_cyan bg-icon_slider bg-no-repeat  bg-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:bg-slider_background  dark:focus-visible:bg-dark_slider_background     disabled:pointer-events-none disabled:opacity-50 shadow-xl dark:shadow-dark_fullSlider_soft_cyan shadow-fullSlider_soft_cyan focus-visible:shadow-xl focus-visible:shadow-slider_background dark:focus-visible:shadow-dark_slider_background" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
