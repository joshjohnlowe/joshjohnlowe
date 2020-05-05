import React from 'react';
import '../cool/main.scss'

import Wee from '../components/wee.js';

import * as moment from 'moment';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            k: 0,
            blobSpeed: 0.001,
            amplitude: 0.0,
            width: window.innerWidth,
            height: window.innerHeight,
            currentMode: "",
            redirectToAbout: false,
            redirectToWork: false,
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

    tick() {
        this.setState({
            date: moment().format('DD / MM / YY'),
            time: moment().format('hh:mm:ss')
        });
    }

    _onMouseMove(e) {
        this.setState({ k: e.nativeEvent.offsetX / this.state.width });
        this.setState({ amplitude: 1 - (e.nativeEvent.offsetY / this.state.height) });

        // const navvy_boi = document.querySelector(".nav_floater")
        // navvy_boi.style.left = `${e.nativeEvent.offsetX}px`;
        // navvy_boi.style.top = `${e.nativeEvent.offsetY}px`;

        // const navvy_boi_type = document.querySelector(".nav_floater h1")

        // if(e.nativeEvent.offsetX < (this.state.width - (this.state.width / 2))){
        //     this.setState({currentMode:"*"})
        //     navvy_boi_type.style.color = `#D24012`
        // }
        // else{
        //     if(e.nativeEvent.offsetY > (this.state.height / 2)){
        //         this.setState({currentMode :"About"})
        //         navvy_boi_type.style.color = `white`
        //     }else{
        //         this.setState({currentMode : "Work"})
        //         navvy_boi_type.style.color = `white`
        //     }
        // }


    }


    _onMouseClick(e) {
        if (e.nativeEvent.offsetX > (this.state.width / 2)) {
            if (this.state.currentMode === "About") {
                console.log("About");

                this.setState({
                    redirectToAbout: true
                });

            }
            else if (this.state.currentMode === "Work") {
                console.log("Work");

                this.setState({
                    redirectToWork: true
                });
            }
        }
    }



    render() {
        return (
            <div>
                <div className="left_pane">
                    <div className="upper_header">
                        <h1> <span className="thin_text">(</span>{this.state.time}<span className="thin_text">)</span> </h1>
                        <h2>
                        Kia Ora, my name is <span className="fat_text">Joshua Lowe.</span>
                        <br />
                        I'm from Wellington, New Zealand.
                        <br />
                        I used to develop websites,
                        <br />
                        but now I work for <a className="trade_me_yellow" href="https://trademe.co.nz">Trade Me</a> 
                        <br />
                        as a Data Engineer.
                        </h2>
                    </div>
                    <div className="lower_header">
                        <h1>hello<span className="thin_text">@</span>joshjohnlowe.com</h1>
                        <h1><span className="thin_text">+(</span>64<span className="thin_text">)</span> 21 073 7996</h1>
                    </div>
                </div>
                <div className="right_pane" >

                </div>
                <div
                    className="full_width"
                    onMouseMove={this._onMouseMove.bind(this)}
                    onMouseUp={this._onMouseClick.bind(this)}
                >
                </div>
                <Wee
                    k={this.state.k}
                    blobSpeed={this.state.blobSpeed}
                    className="blob"
                    amplitude={this.state.amplitude}
                    roughness={this.state.roughness}
                    color={this.state.amplitude}
                />
            </div>
        )
    }
}

export default Home