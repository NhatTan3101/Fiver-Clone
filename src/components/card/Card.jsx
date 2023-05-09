import React from 'react'
import classes from './Card.module.scss'

const Card = ({item}) => {
  return (
    // <Link
    <div className={classes.container}>
        <img src={item.img} alt='' />
        <span className={classes.desc}>{item.decs}</span>
        <span className={classes.title}>{item.title}</span>
    </div>
  )
}

export default Card