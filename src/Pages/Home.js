import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Home extends Component {
    render() {
        return (
		    <>
                <Header />
                    <div className="container">
                        <h1>This is Home</h1>
                    </div>
                <Footer />
            </>
        )
    }
}
export default Home;
