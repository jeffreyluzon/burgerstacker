import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import Ingredients from './Ingredients'

class BurgerStack extends Component {
    render() {
        let burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => {
            <li>
                <Ingredients ingredient={item} key={`keyB${index}`}/>
            </li>
        })
        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
    }
}

export default BurgerStack