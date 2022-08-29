import React from "react";
import style from "../header/Style.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.header_h1}>Заметки</h1>
        </div>
    );
}

export default Header;