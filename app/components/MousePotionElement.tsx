"use client";

import useMousePosition from "@/hooks/useMousePosition";
interface props {
  style?: React.CSSProperties;
}

export const MousePositionComponent = (props: props) => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="absolute w-2 h-2 bg-zinc-600 rounded-full "
      style={{
        left: x - 2,
        top: y - 2,
        ...props.style,
      }}
    ></div>
  );
};
