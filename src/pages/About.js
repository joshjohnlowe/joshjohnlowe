import React from 'react';
import '../cool/main.scss'

import { Redirect } from 'react-router';

import * as moment from 'moment';

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirectToHome: false,
            currentMode: "Home",
            date: moment().format('DD / MM / YY'),
            time: moment().format('hh:mm:ss')
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1
        );
      }


    _onMouseMove(e) {
        const navvy_boi = document.querySelector(".nav_image")
        navvy_boi.style.left = `${e.nativeEvent.offsetX}px`;
        navvy_boi.style.top = `${e.nativeEvent.offsetY}px`;
    }

    tick() {
        this.setState({
            date: moment().format('DD / MM / YY'),
            time: moment().format('hh:mm:ss')
        });
    }



    _onMouseClick(e) {
        this.setState({
            redirectToHome: true
        });
    }

    _emailMouseOver(e) {
        this.setState({
            currentMode: "Copy Email"
        })
    }

    _digitsMouseOver(e) {
        this.setState({
            currentMode: "Copy No."
        })
    }

    _onMousegGap(e) {
        this.setState({
            currentMode: "Home"
        })
    }


    render() {
        var { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to='/' />;
        }
        return (
            <div onMouseMove={this._onMouseMove.bind(this)}
                onMouseUp={this._onMouseClick.bind(this)}>
                <div className="nav_image">
                    <img src={require("../media/back_arrow.svg")} alt="back_arrow"/>
                </div>
                <div
                    className="full_width"

                >
                    <div className="half_width" >

                    </div>
                </div>
                <div className="left_pane">
                    <div className="upper_header" >
                        <h1> <span className="thin_text">(</span>{this.state.time}<span className="thin_text">)</span> </h1>
                        <h2>
                        Kia Ora, my name is Josh. 
                        <br/>
                        I'm from Wellington, New Zealand. 
                        <br/>
                        I used to make websites, but now I work for <a className="trade_me_yellow" href="https://trademe.co.nz">Trade Me</a> as a Data Engineer.
                        </h2>
                        <h2>
                            <span className="email_addy"
                                onMouseOver={this._emailMouseOver.bind(this)}
                                onMouseLeave={this._onMousegGap.bind(this)}
                            >
                                hello@joshjohnlowe.com
                            </span> <br />
                            <span className="digits"
                                onMouseOver={this._digitsMouseOver.bind(this)}
                                onMouseLeave={this._onMousegGap.bind(this)}
                            >
                                +(64) 21 073 7996
                            </span> <br />
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default About