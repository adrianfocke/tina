export type CalloutProps = {
  text: string;
};

export default ({ text }: CalloutProps) => {
  console.log("Callout: ", text);
  return <p>{text}</p>;
};
