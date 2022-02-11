import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Projects extends Component {
    render() {
        return (
		    <>
                <Header />
                    <div className="container">
                        <h1>Projects</h1>
                    </div>
                <Footer />
            </>
        )
    }
}
export default Projects;
