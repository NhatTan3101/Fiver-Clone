import React from 'react'
import { Link as ReactLink } from 'react-router-dom/dist';
import classes from './Link.module.scss';

const Link = (props) => {
    const { to, children } = props;

    return (
        <ReactLink to={to} className={classes.link}>
            {children}
        </ReactLink>
    );
};

export default Link;