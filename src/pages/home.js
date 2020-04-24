import React from 'react';
import '../cool/main.scss'

class Home extends React.Component{
    render(){
        return(
            <div>
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
                <div className="right_pane">
                    
                </div>
            </div>
        )
    }
}

export default Home