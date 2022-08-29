import React from "react";
import Items from "../items/Index";
import style from "../notes/Style.module.css"

const Notes = () => {
    return (
        <div className={style.notes}>
            <Items />
        </div>
    );
}

export default Notes;