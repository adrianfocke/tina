import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { StyleSheet } from "../types/other";
import { STYLES_PADDING_DOUBLE } from "../constants/styles";
import components from "./all";

export type ColumnProps = {
  columns: TinaMarkdownContent[];
};

export default ({ columns }: ColumnProps): JSX.Element => (
  <div
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
  }
  // TODO mixins
  //   @include medium {
  //     flex-direction: column;
  // }
}