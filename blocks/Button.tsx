import Link from "next/link";
import { STYLES_PADDING_HALF } from "../constants/styles";
import { StyleSheet } from "../types/other";
import ResponsiveImage from "./ResponsiveImage";

export type ButtonProps = {
  label: string;
  url?: string;
  icon?: {
    name: string;
    position: "left" | "right";
  };
};

const src = require("../public/uploads/openInNewTab.svg");

// TODO move and think about type exports
const Icon = ({ icon }: Pick<ButtonProps, "icon">) => (
  <div
    style={{
      ...styles.icon,
      marginLeft: icon.position === "right" && STYLES_PADDING_HALF,
      marginRight: icon.position === "left" && STYLES_PADDING_HALF,
    }}
  >
    <ResponsiveImage height={20} image={src} objectFit={"contain"} width={20} />
  </div>
);

export default ({ label, url, icon }: ButtonProps): JSX.Element => {
  return (
    <Link href={url ?? "/"}>
      <div style={styles.button}>
        {icon?.position === "left" && <Icon icon={icon} />}
        <span>{label}</span>
        {icon?.position === "right" && <Icon icon={icon} />}
      </div>
    </Link>
  );
};

const styles: StyleSheet = {
  button: {
    display: "flex",
    alignItems: "center",
    padding: STYLES_PADDING_HALF,
  },
  label: {
    color: "red",
  },
  icon: {
    height: 20,
    width: 20,
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
};
