import * as ToastPrimitive from "@radix-ui/react-toast";
import cx from "classnames";
import React from "react";
import Button from "./shared/Button";

type Props = {};

const Toast = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ToastPrimitive.Provider>
      <Button
        onClick={() => {
          if (open) {
            setOpen(false);
            setTimeout(() => {
              setOpen(true);
            }, 400);
          } else {
            setOpen(true);
          }
        }}
      >
        Click
      </Button>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        className={cx(
          "z-50 fixed top-4 right-4 max-w-sm w-full shadow-lg rounded-lg",
          "bg-white dark:bg-gray-800",
          "radix-state-open:animate-toast-slide-in",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-end:animate-toast-swipe-out",
          "radix-swipe-move:translate-x-[var(--radix-toast-swipe-move-x)]",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full">
              <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Pull Request Review
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                Someone requested your review on{" "}
                <span className="font-bold">repository/branch</span>
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col px-3 py-2">
              <div className="h-0 flex-1 flex">
                <ToastPrimitive.Action
                  altText="view now"
                  className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  Review
                </ToastPrimitive.Action>
              </div>
              <div className="h-0 flex-1 flex">
                <ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  Dismiss
                </ToastPrimitive.Close>
              </div>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
};

export default Toast;
