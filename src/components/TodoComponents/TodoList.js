import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  // console.log("props on TodoList: ", props);
  return (
    <div className="todo-list">
      {props.toDoList.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Items
      </button>
    </div>
  );
};

export default TodoList;
