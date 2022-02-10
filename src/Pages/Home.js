import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Home extends Component {
    render() {
        return (
		    <>
                <Header />
                    <h1>Content</h1>
                <Footer />
            </>
        )
    }
}
export default Home;
