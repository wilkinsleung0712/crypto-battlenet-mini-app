import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer as HeadlessDrawer } from "vaul";

export const BottomDrawerRoot = HeadlessDrawer.Root;
export const BottomDrawerTrigger = HeadlessDrawer.Trigger;
export const BottomDrawerPortal = HeadlessDrawer.Portal;
export const BottomDrawerClose = HeadlessDrawer.Close;
export const BottomDrawerTitle = HeadlessDrawer.Title;
export const BottomDrawerDescription = HeadlessDrawer.Description;

export const BottomDrawerContent = forwardRef(({
  className = "",
  children,
  innerRef,
  ...restProps
}, ref) => {
  return (
    <HeadlessDrawer.Content
      ref={ref}
      className={twMerge(
        "fixed inset-x-0 bottom-0 z-[400] flex flex-col rounded-t-[10px] text-black h-auto",
        className,
      )}
      {...restProps}
    >
      <div
        className={twMerge(
          "mx-auto my-2 h-1.5 w-10 shrink-0 rounded-full bg-grey-tertiary",
        )}
      />
      {children}
    </HeadlessDrawer.Content>
  );
});

export const BottomDrawerOverlay = forwardRef(({ className = "", ...restProps }, ref) => (
  <HeadlessDrawer.Overlay
    ref={ref}
    className={twMerge("fixed inset-0 z-[300] bg-black/60", className)}
    {...restProps}
  />
))

BottomDrawerContent.displayName = "BottomDrawerContent";
BottomDrawerOverlay.displayName = "BottomDrawerOverlay";
