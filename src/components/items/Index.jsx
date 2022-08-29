import React from "react";
import style from "../items/Style.module.css"

const Items = () => {
    return (
        <div className={style.items}>
            <h4 className={style.items_h4}>Название заметки</h4>
            <p className={style.items_p}>Lorem ipsum dolor sit</p>
            <hr />
        </div>
    );
}

export default Items;