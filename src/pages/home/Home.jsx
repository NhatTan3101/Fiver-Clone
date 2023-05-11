import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';
import PopularCard from '../../components/popularCard/PopularCard';
import InspireCard from '../../components/inspireCard/InspireCard';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustesBy from '../../components/trustedBy/TrustesBy';
import { populars, itemone, itemtwo, inspires } from '../../data';
import classes from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustesBy />
      <Slide slidesToShow={4} arrowsScroll={4} title='Popular services'>
        {populars.map(card => (
          <PopularCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className={classes.features}>
        <div className={classes.featuresLeft}>
          <h2>A whole world of freelance talent at your fingertips</h2>
          {itemone.map(item => (
            <div className={classes.item} key={item.id}>
              <div className={classes.itemFirst}>
                <CheckCircleOutlineIcon className={classes.iconCircle} />
                <span>{item.title}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={classes.featuresRight}>
          <video autoPlay={true} id="video" src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type="video/mp4" />
        </div>
      </div>
      <div className={classes.abc}>

      </div>
      <div className={clsx(classes.features, classes.dark)}>
        <div className={classes.featuresLeft}>
          <h2>fiverr <i>business</i>.</h2>
          <h2>A solution built for <i>business</i>.</h2>
          <h3>Upgrade to a curated experience to access vetted talent and exclusive tools</h3>
          {itemtwo.map(item => (
            <div className={classes.item} key={item.id}>
              <div className={classes.itemFirst}>
                <CheckCircleOutlineIcon style={{ color: 'lightgrey' }} />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
          <button>Explore Fiverr Business</button>
        </div>
        <div className={classes.featuresRight}>
          <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png' />
        </div>
      </div>
      <div className={classes.inspire} >

        <Slide slidesToShow={4} arrowsScroll={4} title='Inspiring work made on Fiverr'>
          {inspires.map(card => (
            <InspireCard item={card} key={card.id} />
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default Home