import React from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.oNchecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;

