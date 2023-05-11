import React from 'react'
import classes from './InspireCard.module.scss'
import { Avatar } from '@mui/material'

const InspireCard = ({ item }) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={item.img} alt='' />
      </div>
      <div className={classes.under}>
        <Avatar src={item.avt} className={classes.avatar}/>
        <div className={classes.detail}>
          <span className={classes.title}>{item.title}</span>
          <span className={classes.desc}>{item.desc}</span>
        </div>
      </div>
    </div>
  )
}

export default InspireCard