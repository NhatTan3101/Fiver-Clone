import React from 'react'
import classes from './PopularCard.module.scss'

const PopularCard = ({item}) => {
  return (
    <div className={classes.container}>
        <img src={item.img} alt='' />
        <span className={classes.desc}>{item.decs}</span>
        <span className={classes.title}>{item.title}</span>
    </div>
  )
}

export default PopularCard