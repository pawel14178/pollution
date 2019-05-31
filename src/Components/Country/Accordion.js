import React, {Component} from 'react'
import "./animations.css"
import "./Accordion.css"

class Accordion extends Component{
    constructor(props) {
        super(props)

        this.state = {
            on: false,
        }
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
       
    }

    render() {
        return (
            <div className="Accordion fadeIn"> 
                            
                    <div className="Accordion__header" onClick={this.toggle}>{this.props.header} </div>
                    {this.state.on && this.props.children}
                 
            </div>
        )
    }

}

export default Accordion;