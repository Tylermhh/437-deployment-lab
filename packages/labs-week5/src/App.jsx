import React, { useState } from 'react'
import './App.css'
import Todo from "./components/Todo.jsx"
import AddTaskForm from './components/AddTaskForm.jsx'
import { nanoid } from "nanoid";
import Modal from "./components/Modal.jsx";
import {GroceryPanel} from "./GroceryPanel.jsx";

function App(props) {
    const [taskList, setTaskList] = useState(props.tasks);
    const [isOpen, setIsOpen] = React.useState(false);
    const todoItems = taskList.map((task) =>
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            handleToggleCheck={toggleTaskCompleted}
            handleDelete={handleDelete}
        />)

    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name: name, completed: false }
        const newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
    }

    function toggleTaskCompleted(id) {
        console.log("toggleTaskCompleted", id);
        const updatedTasks = taskList.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTaskList(updatedTasks);
    }

    function handleDelete(id) {
        console.log("handleDelete", id);
        setTaskList(taskList.filter((task) => task.id !== id));
    }


    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <Modal headerLabel="Add New Task" isopen={isOpen} onCloseRequested={() => setIsOpen(false)}>
                <AddTaskForm onNewTask={addTask} />
            </Modal>
            <button
                id="addTask-button"
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white rounded-sm px-1.5 py-1"
            >
                Add task
            </button>
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul>
                    {todoItems}
                </ul>
            </section>
            <GroceryPanel addTask={addTask} />

        </main>
    );
}

export default App;
