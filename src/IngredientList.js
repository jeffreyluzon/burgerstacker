import React, { Component } from 'react'
import Ingredients from './Ingredients'


class IngredientList extends Component {
    render() {
        return(
            <div>
                <h1>ingredient list</h1>
                <Ingredients />
            </div>
        )
    }
}

export default IngredientList;