import { ComponentPropsWithoutRef } from "react";

export default function ArrowRight(
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e4e7eb"
    >
      <path d="M400-280v-400l200 200-200 200Z" />
    </svg>
  );
}
