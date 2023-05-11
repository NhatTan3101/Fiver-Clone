import Slider from 'infinite-react-carousel';
import React from 'react';
import classes from './Slide.module.scss';

const Slide = ({ slidesToShow, arrowsScroll, children, title }) => {
  return (
    <div className={classes.slide}>
      <div className={classes.container}>
        <h2>{title}</h2>
      <Slider slidesToShow={slidesToShow} centerMode={true} autoplay={true} arrowsScroll={arrowsScroll} >
        {children}
      </Slider>
      </div>
    </div>
  )
}

export default Slide