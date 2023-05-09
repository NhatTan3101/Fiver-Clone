import React from 'react';
import classes from './Featured.module.scss';

const Featured = () => {
  return (
    <div className={classes.banner}>
      <div>
        <h2>Find the perfect <i>freelance</i> services for your bussiness</h2>
        <div className={classes.searchBar}>
          <img src='./img/search.png' />
          <input placeholder='Try "building mobile app"' name='search' />
          <button>Search</button>
        </div>
        <div className={classes.popular}>
          <p>Popular:</p>
          <span>Web Design</span>
          <span>WordPress</span>
          <span>Logo Design</span>
          <span>AI Services</span>
        </div>
      </div>
      <div className={classes.headerImage}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WPDEQPLQb0DSPP7T66jlmsnD_OroCC7xVg&usqp=CAU' />
      </div>
    </div>
  );
}

export default Featured