import React from 'react';
import '../cool/main.scss'

import { Redirect } from 'react-router';

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirectToHome: false
        }
    }

    _onMouseMove(e) {
        const navvy_boi = document.querySelector(".nav_floater")
        navvy_boi.style.left = `${e.nativeEvent.offsetX}px`;
        navvy_boi.style.top = `${e.nativeEvent.offsetY}px`;
    }

    _onMouseClick(e) {
        this.setState({
            redirectToHome: true
        });
    }


    render() {
        var {redirectToHome} = this.state;

        if (redirectToHome) {
            return <Redirect to='/'/>;
        }
        return (
            <div>
                <div className="nav_floater red">
                    <h1>Home</h1>
                </div>
                <div 
                className="full_width" 
                onMouseMove={this._onMouseMove.bind(this)}
                onMouseUp={this._onMouseClick.bind(this)}
                >
                <div className="half_width">
        
                </div>
                </div>
                <div className="left_pane beneath">
                    <div className="upper_header">
                        <h1>Hello,</h1>
                        <h2>Joshua Lowe is a Software / Data Engineer from Wellington, New Zealand.
                        He has a degree in Computer Science from Victoria University of Wellington.
                </h2>
                        <h2>
                            hello@joshjohnlowe.com <br />
                    +(64) 21 073 7996 <br />
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default About