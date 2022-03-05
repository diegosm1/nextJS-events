import React from 'react'

import classes from './EventSummary.module.css'

export const EventSummary = ({title}) => {
  return (
    <section className={classes.summary}>
        <h1>{title}</h1>
    </section>
  )
}
