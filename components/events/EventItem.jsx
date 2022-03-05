
import React from 'react'
import AddressIcon from '../../public/icons/address-icon';
import ArrowRightIcon from '../../public/icons/arrow-right-icon';
import DateIcon from '../../public/icons/date-icon';
import {Button}  from '../ui/Button';
import classes from './EventItem.module.css'


export const EventItem = (props) => {

    //desestructuramos las propiedades contenidas en el array que tenemos fuera del componente
    const { title, image, date, location, id } = props;

    //dando formato reconocible de la fecha a JS
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'

    });
    //dandole formato a la direccion
    const formattedAddress = location.replace(', ', '\n')

    //creando una ruta dinamica basada en el id del evento
    const exploreLink = `/events/${id}`;


    return (
        <li className={classes.item} >
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary} >
                    <h2 >{title}</h2>
                    <div className={classes.date} >
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explora</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}


