import React, {useState, useEffect} from "react"
import "./Context.scss"

const ContextMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const editItem = () => {
        console.log("Edit");
        setIsOpen(false);
    }
    const deleteItem = () => {
        console.log("Delete");
        setIsOpen(false);
    }

    useEffect(() => {
        props.isRightClicked && setIsOpen(true);
    }, [props.isRightClicked])

    useEffect(() => {
        const hideMenu = (e) => {
            const parent = props.parent.current;
            if (parent.contains(e.target)){
                e.preventDefault();
            }
            if (!parent.contains(e.target)){
                setIsOpen(false);
            }
        }
        window.addEventListener("click", hideMenu);
        return () => {
            window.removeEventListener("click", hideMenu)
        }
    })
    return isOpen ? (
        <div className="menu">
            {props.children}
            <div className="btn-container">
                <button type="button" className="btn" onClick={editItem}>Edit</button>
                <button type="button" className="btn" onClick={deleteItem}>Delete</button>
            </div>
        </div>
    ) : null
}

export default ContextMenu;