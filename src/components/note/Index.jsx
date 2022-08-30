import React from "react";
import style from "../note/Style.module.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Note = () => {
    return (
        <div className={style.note}>
            <Form className={style.note_form}>
                <Form.Control   as="textarea" placeholder="Введите текст.." className={style.note_text}/>
                <div className={style.area_btn}>
                  <Button className={style.note_button_save} variant="warning" type="submit">Сохранить</Button>
                </div> 
            </Form>

        </div>
    );
}

export default Note;