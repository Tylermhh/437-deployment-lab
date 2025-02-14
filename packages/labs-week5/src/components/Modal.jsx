import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef} from "react";

function Modal(props) {
    const inputRef = useRef(null);

    function overlayClickHandler(e) {
        if (!inputRef.current.contains(e.target)) {
            props.onCloseRequested()
        }
    }

    return (props.isopen ?
    (
        <div
            className="flex absolute top-0 left-0 w-screen h-screen bg-black/50 rounded-lg justify-center items-center"
            onClick={overlayClickHandler}
        >
            <div ref={inputRef} className="flex flex-col gap-4 bg-white rounded-lg p-3">
                <header className="flex items-center justify-between">
                    {props.headerLabel}
                    <button aria-label="Close" onClick={props.onCloseRequested}>
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </header>
                {props.children}
            </div>
        </div>
    )
    : null)
}

export default Modal;