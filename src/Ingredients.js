import React, {Component} from 'react'

class Ingredients extends Component {
    render() {
        return(
            <p  style={{backgroundColor: this.props.color}} key={this.props.key}>
                {this.props.ingredient}
            </p>
        )
    }
}

export default Ingredients