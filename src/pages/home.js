import React from 'react';
import '../cool/main.scss'

import Wee from '../components/wee.js';

import * as moment from 'moment';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            k: 0,
            blobSpeed: 0.0005,
            amplitude: 0.0,
            width: window.innerWidth,
            height: window.innerHeight,
            date: moment().format('DD / MM / YY'),
            time: moment().format('hh:mm:ss'),
            mouseDown: false
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
        if(this.state.mouseDown === false){
            this.setState({ k: e.nativeEvent.offsetX / this.state.width });
            this.setState({ amplitude: 1 - (e.nativeEvent.offsetY / this.state.height) });
        }
    }

    _onMouseDown(e) {
        this.setState({ mouseDown: true })
        this.setState({ k: 1000 });
        this.setState({ amplitude: 0.1 });
        this.setState({blobSpeed: 0.002 });
    }

    _onMouseRelease(e){
        this.setState({ mouseDown: false })
        this.setState({blobSpeed: 0.0005 });
        this.setState({ k: 0 });
    }


    render() {
        return (
            <div 
            onMouseMove={this._onMouseMove.bind(this)} 
            onMouseDown={this._onMouseDown.bind(this)}
            onMouseUp={this._onMouseRelease.bind(this)}
            >
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
                        but now I work for <a target="_blank" onMouseEnter={this._onMouseDown.bind(this)}
            onMouseLeave={this._onMouseRelease.bind(this)} className="trade_me_yellow" href="https://www.trademe.co.nz">Trade Me</a> 
                        <br />
                        as a Data Engineer.
                        </h2>
                    </div>
                    <div className="lower_header"             onMouseEnter={this._onMouseDown.bind(this)}
            onMouseLeave={this._onMouseRelease.bind(this)}>
                        <h1>hello<span className="thin_text">@</span>joshjohnlowe.com</h1>
                        <h1><span className="thin_text">+(</span>64<span className="thin_text">)</span> 21 073 7996</h1>
                    </div>
                </div>
                <div className="right_pane" >

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