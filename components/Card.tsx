import * as React from "react";

interface Props {
  key: string;
  children?: React.ReactNode;
}

const Card = ({ key, children }: Props) => (
  <div
    key={key}
    style={{
      textAlign: "center"
    }}
  >
    {children}
  </div>
);

export default Card;
