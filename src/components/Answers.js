import React from 'react'
import CheckBox from './CheckBox'
import classes from '../styles/Answers.module.css'


export default function Answers() {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="Test answer" />
        </div>
    )
}
