import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
    return (
        <li className="flex gap-10 items-center">
            <label className="flex items-center leading-none" htmlFor={props.id}>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.handleToggleCheck(props.id)}
                />
                {props.name}
            </label>
            <button onClick={() => props.handleDelete(props.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
        </li>
    )
}

export default Todo;