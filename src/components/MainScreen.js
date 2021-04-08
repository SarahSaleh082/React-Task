import React, { Component } from 'react'
import '../components/StyleMainScreen.css'
class MainScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category: '',
             meal: '',
             
             isCombo: true,
             isSpicy: true,
             numMeal: 1,
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleNumMealChange = this.handleNumMealChange.bind(this)
        this.handleMealChange = this.handleMealChange.bind(this)
    }

    handleCategoryChange = event=>{
        this.setState({
            category: event.target.value
        })
    }
    handleMealChange= event =>{
        this.setState({
            meal: event.target.value
        })
    }
    handleNumMealChange = (event) =>{
        this.setState({
            numMeal: event.target.value
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
    mySubmitHandler = event=>{
        alert(`${this.state.category} ${this.state.meal} ${this.state.numMeal} 
        ${this.state.isCombo} ${this.state.isSpicy}`)
        event.preventDefault()
    }
    render() {
        return (
            <div className="container">
                <h1>Restaurant Order</h1>
                <nav>
                    <div>
                        <ul>
                            <li><a href="#">Add Meal</a></li>
                            <li><a href="#">Add Order</a></li>
                            <li><a href="#">Reports</a></li>
                        </ul>
                    </div>
                </nav>
                <form onSubmit={this.mySubmitHandler}>
                    <div className="item-box">
                        <label>Combo-add2LE</label>
                        <input 
                        name="isCombo"
                        type="checkbox"
                        checked={this.state.isCombo}
                        onChange={this.handleInputChange}/>
                        <label>Spicy-add1LE</label>
                        <input
                        name="isSpicy"
                        type="checkbox"
                        checked={this.state.isSpicy}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="item">
                        <label>Category</label>
                        <select className="dropdown" value={this.state.category}
                        onChange={this.handleCategoryChange}>
                            <option disabled selected value> -- select an option -- </option>
                            <option value="pasta">Pasta</option>
                            <option value="pizza">Pizza</option>
                            <option value="sweet">Sweets</option>
                            <option value="drink">Drinks</option>
                        </select>
                    </div>
                    <br/>
                    <div className="item">
                        <label>Meal</label>
                        <select className="dropdown" value={this.state.meal}
                        onChange={this.handleMealChange}>
                            <option disabled selected value> -- select an option -- </option>
                            <option>Orange Juice</option>
                            <option>Cheese Cake</option>
                            
                        </select>
                    </div>
                    <div className="item">
                        <label>Q</label>
                        <input name="numMeal" className="dropdown"
                        type="number"
                        value={this.state.numMeal}
                        onChange={this.handleInputChange} />
                    </div>
                    

                    
                
                    <button type="submit">Add</button>
                    <h1>Price LE</h1>
                    <table border="1">
                        <tr>
                            <th>Item</th>
                            <th>Q</th>
                            <th>Price</th>
                            <th>Addons</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default MainScreen
