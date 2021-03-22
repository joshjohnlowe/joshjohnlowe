import React from 'react';
import '../cool/main.scss'

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
            <div className="global_wrapper">
                <div className="left_pane">
                    <div className="upper_header">
                        <h1> <span className="thin_text">(</span>{this.state.time}<span className="thin_text">)</span> </h1>
                        <h2>
                        Kia Ora, my name is <span className="fat_text">Josh.</span>
                        <br />
                        I'm from Wellington, New Zealand.
                        <br />
                        I used to develop websites,
                        <br />
                        but now I work for <a onMouseEnter={this._onMouseDown.bind(this)}
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
                    <div className="upper_header">
                        <h1 className="big_boi_text">Work experience</h1>
                        <h2 className="trade_me_yellow">Trade Me / Data Engineer</h2>
                        <h2>
                        Responsible for the development, and maintenance of cloud-based technical solutions that empower analysts and data scientists around the company.
                        Notable projects include an in-house workflow orchestration service, a real-time streaming platform on AWS, and several data warehouses.
                        <br/>
                        <br/>
                        Technologies
                        <br/>
                        AWS (S3, EC2, Lambda, EMR, Glue, Athena, Kinesis and more) 
                        <br/>
                        Python
                        <br/>
                        Prefect / Prefect Cloud
                        <br/>
                        DBT 
                        </h2>
                        <h2 className="trade_me_yellow">Sunny side up / Web developer </h2>
                        <h2>
                        Worked on the development of websites for local businesses, and government departments. Worked with Vue, PHP, and Silverstripe CMS.
                        <br/>
                        <br/>
                        Technologies
                        <br/>
                        Vue and React
                        <br/>
                        HTML/CSS/Javascript
                        <br/>
                        PHP
                        <br/>
                        Silverstripe CMS 
                        </h2>
                        <h1 className="big_boi_text">Education</h1>
                        <h2>Victoria University of Wellington
                        <br/>
                        Bachelor of Science 
                        <br/>
                        2016 - 2019 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        </h2>                                                
                    </div>
                </div>
                <div className="hireme"> 
                    <img className="badge" alt="Fancy spinning badge" src={require("../media/hireme.png")}></img>
                    <h3 className="text">
                        OPEN TO WORK <br/>
                        IN LONDON FROM <br/>
                        30 NOVEMBER 2021
                    </h3>
                </div>
            </div>
        )
    }
}

export default Home