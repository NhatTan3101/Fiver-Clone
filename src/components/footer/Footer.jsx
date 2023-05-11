import React from 'react'
import classes from './Footer.module.scss';
import { abouts, categories, communities, more, supports } from '../../data';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import clsx from 'clsx';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.column}>
          <span className={classes.title}>Categories</span>
          {categories.map((item, index) => (
            <span className={classes.detail} key={index}>{item}</span>
          ))}
        </div>
        <div className={classes.column}>
          <span className={classes.title}>About</span>
          {abouts.map((item, index) => (
            <span className={classes.detail} key={index}>{item}</span>
          ))}
        </div>
        <div className={classes.column}>
          <span className={classes.title}>Support</span>
          {supports.map((item, index) => (
            <span className={classes.detail} key={index}>{item}</span>
          ))}
        </div>
        <div className={classes.column}>
          <span className={classes.title}>Community</span>
          {communities.map((item, index) => (
            <span className={classes.detail} key={index}>{item}</span>
          ))}
        </div>
        <div className={classes.column}>
          <span className={classes.title}>More From Fiverr</span>
          {more.map((item, index) => (
            <span className={classes.detail} key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <h1 className={classes.logo}>fiverr</h1>
          <span className={classes.logoDetail}>© Fiverr International Ltd.2023</span>
        </div>
        <div className={classes.right}>
            <YouTubeIcon className={classes.icon} />
            <FacebookOutlinedIcon className={classes.icon} />
            <LinkedInIcon className={classes.icon} />
            <InstagramIcon className={classes.icon} />
            <button><LanguageIcon />English</button>
            <button>US$ USD</button>
            <AccessibilityIcon className={clsx(classes.icon,classes.border)} />
        </div>
      </div>
    </div>
  )
}

export default Footer