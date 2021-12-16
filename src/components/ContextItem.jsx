import React, {useRef,useState} from 'react'
import ContextMenu from './ContextMenu'


const ContextItem = ({ children }) => {
    const listItem = useRef();
    const [isRightClicked, setIsRightClicked] = useState(false);

    return (
        <li
            ref={listItem}
            onContextMenu={ (e) => {
                e.preventDefault();
                setIsRightClicked(!isRightClicked);
            }}
        >
        <p>{children}</p>
        <ContextMenu 
            parent={listItem}
            children={children}
            isRightClicked={isRightClicked}
        />
        </li>
    )
}

export default ContextItem;