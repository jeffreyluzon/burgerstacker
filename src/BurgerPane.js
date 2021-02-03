import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        return(
            <div>
                <h1>this is the burgerpane</h1>
                <BurgerStack />
                <ClearBurger />
            </div>
        )
    }
}

export default BurgerPane;