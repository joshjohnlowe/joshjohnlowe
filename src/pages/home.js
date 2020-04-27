import React from 'react';
import '../cool/main.scss'

import Wee from '../components/wee.js';

import { Redirect } from 'react-router';

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
        this.setState({ k: e.nativeEvent.offsetX / this.state.width});
        this.setState({ amplitude: 1 - (e.nativeEvent.offsetY / this.state.height) });

        const navvy_boi = document.querySelector(".nav_floater")
        navvy_boi.style.left = `${e.nativeEvent.offsetX}px`;
        navvy_boi.style.top = `${e.nativeEvent.offsetY}px`;

        const navvy_boi_type = document.querySelector(".nav_floater h1")

        if(e.nativeEvent.offsetX < (this.state.width - (this.state.width / 2))){
            this.setState({currentMode:"*"})
            navvy_boi_type.style.color = `#D24012`
        }
        else{
            if(e.nativeEvent.offsetY > (this.state.height / 2)){
                this.setState({currentMode :"About"})
                navvy_boi_type.style.color = `white`
            }else{
                this.setState({currentMode : "Work"})
                navvy_boi_type.style.color = `white`
            }
        }


    }


    _onMouseClick(e) {
        if(e.nativeEvent.offsetX > (this.state.width / 2)){
            if(this.state.currentMode === "About"){
                console.log("About");

                this.setState({
                    redirectToAbout: true
                });

            }
            else if(this.state.currentMode === "Work"){
                console.log("Work");

                this.setState({
                    redirectToWork: true
                });
            }
        }
    }



    render() {
        var {currentMode, redirectToAbout, redirectToWork} = this.state;

        if (redirectToAbout) {
            return <Redirect to='/about'/>;
        }

        if (redirectToWork) {
            return <Redirect to='/work'/>;
        }

        return (
            <div>
                <div className="nav_floater">
                    <h1>{ currentMode }</h1>
                </div>
                <div 
                className="full_width" 
                onMouseMove={this._onMouseMove.bind(this)}
                onMouseUp={this._onMouseClick.bind(this)}
                >
                <div className="half_width">
        
                </div>
                </div>
                <Wee
                    k={this.state.k}
                    blobSpeed={this.state.blobSpeed}
                    className="blob"
                    amplitude={this.state.amplitude}
                    roughness={this.state.roughness}
                    color={this.state.amplitude}
                />
                <div className="left_pane">
                    <div className="upper_header">
                        <h1> <span className="thin_text">(</span>{this.state.time}<span className="thin_text">)</span> </h1>
                        <h1>
                            Joshua John Lowe
                        </h1>
                        <h1>
                            Software / Data Engineer
                        </h1>
                    </div>
                    <div className="lower_header">
                        {/* <h1>hello<span className="thin_text">@</span>joshjohnlowe.com</h1> */}
                    </div>
                </div>
                <div className="right_pane" >

                </div>
            </div>
        )
    }
}

export default Home