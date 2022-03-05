import React from "react"
import {EventItem} from "./EventItem";
import classes from './EventList.module.css'

export const EventList = ({ items }) => { //recibimos la lista de items
    //la asignamos a una constante desestructurada

    return (
        <ul className={classes.list}>
            {
                items.map(item => <EventItem key={item.id} title={item.title} image={item.image} date={item.date} location={item.location} id={item.id} />)
            }
        </ul>
    )
}

