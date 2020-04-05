import React, { Component } from "react";
import SearchPanel from "../search-panel";
import TitleHeader from "../title-header";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css"

export default class App extends Component {
    state = {
        todoData: [
            { label: "Drink Coffee", important: false, id: 1},
            { label: "Learn React", important: true, id: 2},
            { label: "Create React App", important: false, id: 3}
        ]
    };

    render() {

        return (
            <div className="todo-app">
                <TitleHeader toDo = "1" done = "3"/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos = { this.state.todoData }
                    onDeleted={(id) => console.log(`del ${id}`)} />
            </div>
        );
    };
}