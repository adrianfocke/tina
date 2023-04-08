import React from "react";
import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";

type Props = {
  image: string;
  withBoxShadow?: boolean;
  priority?: boolean;
};

export default ({ image, withBoxShadow, priority }: Props) => (
  <div className={`${styles.image} ${withBoxShadow && styles.withBoxShadow}`}>
    <Image src={image} layout="fill" objectFit="cover" priority={priority} />
  </div>
);
