import React from "react";
import SearchPanel from "../search-panel";
import TitleHeader from "../title-header";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css"

const App = () => {

    const todoData = [
        { label: "Drink Coffee", important: false, id: 1},
        { label: "Learn React", important: true, id: 2},
        { label: "Create React App", important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <TitleHeader toDo = "1" done = "3"/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos = { todoData }/>
        </div>
    );
};

export default App;