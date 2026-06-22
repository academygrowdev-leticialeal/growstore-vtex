import React from "react";

type Props = {
  name: string;
};

function ShelfItem({ name }: Props) {
  return (
    <div
      style={{
        padding: "50px",
        background: "#295faba3",
        color: "white",
        textAlign: "center",
        fontSize: "24px"
      }}
    >
      Hey, {name}
    </div>
  );
}

export default ShelfItem;
