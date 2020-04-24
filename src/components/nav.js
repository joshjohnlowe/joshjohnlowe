import React from 'react';
import '../cool/main.scss';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    _onMouseMove(e){
        
    }

    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

export default Nav;