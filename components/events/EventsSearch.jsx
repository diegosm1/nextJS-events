import React, { useRef } from 'react'
import { Button } from '../ui/Button'

import classes from './EventsSearch.module.css'

export const EventsSearch = (props) => {

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const optionsYear = ['2021', '2022']

    const optionsMonth = [
        {
            id: 1, value: 'January'
        }, {
            id: 2, value: 'February'
        }, {
            id: 3, value: 'March'
        }, {
            id: 4, value: 'April'
        }, {
            id: 5, value: 'May'
        }, {
            id: 6, value: 'June'
        }, {
            id: 7, value: 'July'
        }, {
            id: 8, value: 'Agust'
        }, {
            id: 9, value: 'September'
        }, {
            id: 10, value: 'October'
        }, {
            id: 11, value: 'November'
        }, {
            id: 12, value: 'December'
        }]

    const handleSubmit = (e) => {

        e.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        //Pasamos los parametros fuera del componente mediante una funcion.
        props.onSearch(selectedYear, selectedMonth);

    }

    return (
        <form className={classes.form} onSubmit={handleSubmit} >
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id='year' ref={yearInputRef}>
                        {optionsYear.map(options => <option key={options} value={options}>{options}</option>)}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select name="month" id="month" ref={monthInputRef}>
                        {optionsMonth.map(options => <option key={options.id} value={options.id}>{options.value}</option>)}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}
