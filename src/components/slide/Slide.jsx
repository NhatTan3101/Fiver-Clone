import Slider from 'infinite-react-carousel';
import React from 'react';
import classes from './Slide.module.scss';

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
      <Slider slidesToShow={slidesToShow} centerMode={true} autoplay={true} arrowsScroll={arrowsScroll}>
        {children}
      </Slider>
      </div>
    </div>
  )
}

export default Slide