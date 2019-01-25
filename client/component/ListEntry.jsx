import React from "react";

const ListEntry = props => (
  <div>
    {props.todo.name}
    <button onClick={() => props.delete(props.todo.name)}>Delete</button>
  </div>
);

export default ListEntry;
