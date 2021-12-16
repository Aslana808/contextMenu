import React from "react";
import './Context.scss';
import ContextItem from "./ContextItem";

const Context = () => {
    return (
        <ul className="list">
            <ContextItem>Profile</ContextItem>
            <ContextItem>Dashboard</ContextItem>
            <ContextItem>Notifications</ContextItem>
            <ContextItem>about us</ContextItem>
        </ul>
    )
}
export default Context;