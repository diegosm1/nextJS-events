import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types';
import classes from './Button.module.css'


export const Button = (props) => {

    const { link } = props

    if (link) {
        return (
            <Link href={link}>
                <a className={classes.btn}>{props.children}</a>
            </Link>
        )
    }

    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}  
        </button>
    )

}


Button.protoTypes = {
    link: PropTypes.string,
}


