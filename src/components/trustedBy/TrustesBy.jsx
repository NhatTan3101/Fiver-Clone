import React from 'react'
import classes from './TrustedBy.module.scss'

const TrustesBy = () => {
    return (
        <div className={classes.container}>
                <span>Trusted by:</span>
                <img src="./img/meta.png" alt="meta" />
                <img src="./img/google.png" alt="google" />
                <img src="./img/netflix.png" alt="netflix" />
                <img src="./img/p&g.png" alt="p&g" />
                <img src="./img/paypal.png" alt="paypal" />
        </div>
    )
}

export default TrustesBy