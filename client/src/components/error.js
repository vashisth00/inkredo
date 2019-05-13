import React from 'react';
import { Link } from 'react-router-dom'

// functional component for the errors page
const Error = () => {
    return(
        <div className="error">
            <section className="hero is-large is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                <h1 className="title">
                    404 Return to Vashisth Bhushan
                </h1>
                <h2 className="subtitle">
                  Oh snap I guess this is end of the line
                </h2>
                <Link to="/"><button className="button is-light">Home</button></Link>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Error;
