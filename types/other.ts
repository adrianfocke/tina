import { HTMLAttributes } from "react";

/** Temporary look-alike implementation of React Native Style-Sheet. This includes all stylings except responsive styling (mixins) which is applied by className property. */
export type StyleSheet = Record<
  string,
  HTMLAttributes<HTMLParagraphElement>["style"]
>;
