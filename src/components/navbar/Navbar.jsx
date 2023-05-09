import { Avatar } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.scss';
import Link from '../link/Link';
import { useLocation } from 'react-router-dom/dist';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const handleScroll = () => {
        console.log('window.scrollY', window.scrollY);
        if (window.scrollY > 100) setActive(true);
        else setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const currentUser = {
        id: 1,
        name: "Anna",
        isSeller: true
    }

    const openSelect = () => {
        setOpen(!open);
    }

    return (
        <div className={classes.container}>
            <div className={clsx(classes.header, { [classes.active]: (active || pathname !== '/')})}>
                <div className={classes.logo}>
                    <Link to='/'>
                        <span className={classes.logoName}>fiverr</span>
                    </Link>
                    <span className={classes.logoDot}>.</span>
                </div>
                <div className={classes.link}>
                    <span>Fiver Bussiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <span>Sign in</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div>
                            <div className={classes.user} onClick={openSelect}>
                                <Avatar />
                                <span>{currentUser?.name}</span>
                            </div>
                            {open && <div className={classes.option}>
                                {currentUser?.isSeller && <Link to='/gigs'>Gigs</Link>}
                                {currentUser?.isSeller && <Link to='/add'>Add new gig</Link>}
                                <Link to='/orders'>Orders</Link>
                                <Link to='/messages'>Messages</Link>
                                <Link to='/logout'>Log out</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>

            {(active || pathname !== '/') && (
                <>
                    <hr />
                    <div className={classes.menu}>
                        <Link to = '/'>Graphics & Design</Link>
                        <Link to = '/'>Video & Animation</Link>
                        <Link to = '/'>Writing & Translation</Link>
                        <Link to = '/'>AI Services</Link>
                        <Link to = '/'>Digital Marketing</Link>
                        <Link to = '/'>Music & Audio</Link>
                        <Link to = '/'>Programing &Tech</Link>
                        <Link to = '/'>Business</Link>
                        <Link to = '/'>Lifestyle</Link>
                    </div>
                </>
            )
            }

        </div>
    )
}

export default Navbar