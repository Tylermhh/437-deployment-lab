import App from "../App.jsx";
import {useState} from "react";

function AddTaskForm(props){
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleButtonClicked(event){
        props.onNewTask(name)
        setName("");
    }
    return (
        <div className="flex gap-3"> {/* Unfortunately comments in JSX have to be done like this */}
            <input
                id="addTask-input"
                className="border rounded-sm p-1.5"
                placeholder="New task name"
                value={name}
                onChange={handleChange}
            />
            <button
                id="addTask-button"
                onClick={handleButtonClicked}
                className="bg-blue-600 text-white rounded-sm px-1.5 py-1"
            >
                Add task
            </button>
        </div>
    )
}

export default AddTaskForm;