import React, { Component } from 'react'
import Ingredients from './Ingredients'


class IngredientList extends Component {
    render() {

        let ingredientComponents = this.props.ingredients.map((item, index) => (
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredients addToBurger={this.props.addToBurger} ingredient={item.name} color={item.color} key={`key${index}`} />
            </li>
        ))

        return(
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}

export default IngredientList;