import React from "react";
import "./title-header.css"

const TitleHeader = ({ toDo, done }) => {
    return (
        <div className="title-header d-flex">
            <h1>Todo List</h1>
            <h2>{ toDo } more to do, { done } done</h2>
        </div>
    );
};

export default TitleHeader;