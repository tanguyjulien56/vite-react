import { ComponentPropsWithoutRef } from "react";

export default function ArrowDown(
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
    </svg>
  );
}
