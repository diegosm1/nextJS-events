import React from 'react'
import AddressIcon from '../../public/icons/address-icon';
import DateIcon from '../../public/icons/date-icon';
import { LogisticsItem } from './LogisticsItem';
import classes from './EventLogistics.module.css'

export const EventLogistics = (props) => {

    //desestructurando las propiedades 

    const { date, address, image, imageAlt } = props

    //formato a la fecha
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    //formato a la direccion
    const addressText = address.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={imageAlt} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem  icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon} > 
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    )
}
