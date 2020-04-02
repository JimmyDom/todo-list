import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import TitleHeader from "./components/title-header";
import TodoList from "./components/todo-list";

const App = () => {

    const todoData = [
        { label: "Drink Coffee", important: false},
        { label: "Learn React", important: true},
        { label: "Create React App", important: false}
    ];

    return (
        <div>
            <TitleHeader />
            <SearchPanel />
            <TodoList todos = { todoData }/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
