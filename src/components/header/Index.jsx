import React from "react";
import style from "../header/Style.module.css"
import Button from "react-bootstrap/Button"

const Header = () => {
    function handlerNewNote() {
        let text = document.getElementById('text');

        $.ajax ({
            url: "",
            type: "POST",
            dataType: "json",
            data: {message: text},
        });
    }

    return (
        <div className={style.header}>
            <h1 className={style.header_h1}>Заметки</h1>
            <Button className={style.header_button} onClick={handlerNewNote} variant="warning">+</Button>
        </div>
    );
}

export default Header;