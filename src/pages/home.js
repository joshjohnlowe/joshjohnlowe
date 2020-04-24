import React from 'react';
import '../cool/main.scss'

import Wee from '../components/wee.js';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            k: 0,
            blobSpeed: 0.001,
            amplitude: 0.0,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    _onMouseMove(e) {
        this.setState({ k: e.nativeEvent.offsetX / this.state.width});
        this.setState({ amplitude: 1 - (e.nativeEvent.offsetY / this.state.height) });
    }

    render() {
        return (
            
            <div>
                <div className="full_width" onMouseMove={this._onMouseMove.bind(this)}></div>
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
                        <h1>
                            Joshua John Lowe
                        </h1>
                        <h1>
                            Software + Data Engineer
                        </h1>
                    </div>
                    <div className="lower_header">
                        <h1>hello<span className="thin_text">@</span>joshjohnlowe.com</h1>
                    </div>
                </div>
                <div className="right_pane" >

                </div>
            </div>
        )
    }
}

export default Home