import React from 'react'

import classes from './LogisticsItem.module.css'

export const LogisticsItem = (props) => {

    //renombramos la propiedad icon para que funga como un componente 
    const { icon: Icono } = props;

    return (
        <li className={classes.item}>
            <span className={classes.icon}>
                <Icono />
            </span>
            <span className={classes.item}>{props.children}</span>
        </li>
    )
}
