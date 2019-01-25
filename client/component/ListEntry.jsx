import React from "react";

const ListEntry = props => (
  <div>
    {props.todo.todo}
    <button onClick={() => props.delete(props.todo.id)}>Delete</button>
  </div>
);

export default ListEntry;
