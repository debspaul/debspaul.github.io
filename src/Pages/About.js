import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';


class About extends Component {
    render() {
        return (
		    <>
                <Header />
                    <div className="container">
                        <h1>About</h1>
                    </div>
                <Footer />
            </>
        )
    }
}
export default About;
