import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="ui-list">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="ui-button"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
