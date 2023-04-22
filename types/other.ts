import { HTMLAttributes } from "react";

/** Temporary look-alike implementation of React Native Style-Sheet */
export type StyleSheet = Record<string, HTMLAttributes<HTMLParagraphElement>["style"]>;