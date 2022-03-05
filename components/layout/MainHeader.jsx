import Link from 'next/link'
import React from 'react'

import classes from './MainHeader.module.css'

export const MainHeader = () => {
    return (
        <header className={classes.header}>
            {/* TODO: para navegar al inicio de los eventos */}
            <div className={classes.logo}>
                <Link href='/'>Next Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Show All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
