import React from 'react'
import classes from './Walk.module.css';

function Walk() {
  return (
    <div>
        <div className={classes['container-day']}></div>
        <div className={classes['highway']}></div>
        {/* <div className={classes['city']}></div> */}
        <div className={classes['walk']}></div>
    </div>
  )
}

export default Walk;