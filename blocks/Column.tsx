import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { STYLES_PADDING_DOUBLE } from "../constants/styles";
import responsive from "../styles/responsive.module.scss";
import { StyleSheet } from "../types/other";
import components from "./all";

export type ColumnProps = {
  columns: TinaMarkdownContent[];
};

export default ({ columns }: ColumnProps): JSX.Element => (
  <div
    className={responsive.responsiveFlexDudeRenameBoyNice}
    style={styles.column}
  >
    {columns.map((a, i) => (
      <div key={i} style={styles.div}>
        <TinaMarkdown content={a} components={components} />
      </div>
    ))}
  </div>
);

const styles: StyleSheet = {
  column: {
    display: "flex",
    justifyContent: "space-around",
    width: "90vw",
  },
  div: {
    flex: 1,
    padding: STYLES_PADDING_DOUBLE,
  },
};
