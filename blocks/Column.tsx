import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import styles from "./Column.module.scss";

export type ColumnProps = {
  columns: TinaMarkdownContent[];
};

export default ({ columns }: ColumnProps): JSX.Element => (
  <div
    className={styles.column}
  >
    {columns.map((a) => (
      <div>
        <TinaMarkdown content={a} />
      </div>
    ))}
  </div>
);
