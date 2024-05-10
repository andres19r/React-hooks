// import { memo } from "react";

import React from "react";

// export const Small = memo(({ value }: { value: number }) => {
export const Small = React.memo(({ value }: { value: number }) => {
  console.log("I redrew myself");

  return <small>{value}</small>;
});
