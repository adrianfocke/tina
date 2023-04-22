import { STYLES_PADDING, STYLES_PADDING_HALF, TEST } from "../constants/styles";
import { StyleSheet } from "../types/other";
import Image from "next/image";

export type ButtonProps = {
  label: string;
  icon?: {
    name: string;
    position: "left" | "right";
  };
};


// TODO move and think about type exports
const Icon = ({ icon }: Pick<ButtonProps, "icon">) => (
  <div
    style={{
      ...styles.icon,
      backgroundImage: "" /* TODO */,
      marginLeft: icon.position === "right" && STYLES_PADDING_HALF,
      marginRight: icon.position === "left" && STYLES_PADDING_HALF,
    }}
  ></div>
);

export default ({ label, icon }: ButtonProps): JSX.Element => {
  return (
    <div style={styles.button}>
      {icon?.position === "left" && <Icon icon={icon} />}
      <span>{label}</span>
      {icon?.position === "right" && <Icon icon={icon} />}
    </div>
  );
};

const styles: StyleSheet = {
  button: {
    border: TEST,
    display: "flex",
    alignItems: "center",
    padding: STYLES_PADDING_HALF,
  },
  label: {
    color: "red",
  },
  icon: {
    height: 23,
    width: 23,
    backgroundColor: "red",
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
};
