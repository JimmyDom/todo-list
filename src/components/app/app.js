import React, { Component } from "react";
import SearchPanel from "../search-panel";
import TitleHeader from "../title-header";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css"

export default class App extends Component {

    idElement = 1;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Learn React"),
            this.createTodoItem("Create React App")
        ],
        term: "",
        filter: "all"
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
           const idx = todoData.findIndex((el) => el.id === id);
           const newArray = [
               ...todoData.slice(0, idx),
               ...todoData.slice(idx + 1)
            ];

           return {
               todoData: newArray
           }
        });
    };

    createTodoItem(label) {
        return (
            {
                label: label,
                important: false,
                done: false,
                id: this.idElement++
            }
        );
    }

    addItem = (text) => {
        const item = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArray = [ ...todoData, item ];

            return {
                todoData: newArray
            }
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    };

    onToggleImportant = (id) => {
        this.setState( ({ todoData })  => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            };
        });
    };

    onToggleDone = (id) => {
        this.setState( ({ todoData })  => {

            return {
                todoData: this.toggleProperty(todoData, id, "done")
            }
        });
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search = (items, term) => {
        if(term.length === 0) {
            return items;
        }

      return items.filter((item) => {
            return ~item.label.toLowerCase().indexOf(term.toLowerCase());
      });
    };

    filterItems = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items;
        }    
    };

    render() {

        const { todoData, term, filter } = this.state;
        const visibleItem = this.filterItems(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <TitleHeader toDo = { todoCount } done = { doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = { this.onSearchChange } />
                    <ItemStatusFilter
                        filter = { filter }
                        onFilterChange = { this.onFilterChange }/>
                </div>
                <TodoList
                    todos = { visibleItem }
                    onDeleted = { this.deleteItem }
                    onToggleImportant = { this.onToggleImportant }
                    onToggleDone = { this.onToggleDone }/>
                <ItemAddForm
                    addItem = { this.addItem }/>
            </div>
        );
    };
}