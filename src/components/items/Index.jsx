import React from "react";

import CloseButton from 'react-bootstrap/CloseButton';
import style from "../items/Style.module.css"

const Items = () => {
    return (
        <div className={style.items}>
            <div className={style.item_area_btn}>
                <h4 className={style.items_h4}>Название заметки</h4>
                <CloseButton className={style.items_close} />
            </div>
            
            <p className={style.items_p}>Lorem ipsum dolor sit</p>
            <hr className={style.items_hr} />
        </div>
    );
}

export default Items;