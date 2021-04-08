import React, { Component } from 'react'
import '../components/StyleMainScreen.css'
class AddScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             price: 20,
             description: '',
             category: '',
             image: null
        }
        this.onImageChange = this.onImageChange.bind(this);
    }
    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleDescriptionChange = (event) =>{
        this.setState({
            description: event.target.value
        })
    }
    handlePriceChange = (event) =>{
        this.setState({
            price: event.target.value
        })
    }
    handleCategoryChange = event=>{
        this.setState({
            category: event.target.value
        })
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
    };
    mySubmitHandler = event=>{
        alert(`${this.state.name} ${this.state.description} ${this.state.price} 
        ${this.state.category} ${this.state.image}`)
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
                    <div className="item">
                        <label>Name</label>
                        <input type="text" value={this.state.name} className="dropdown"
                        onChange={this.handleNameChange}/>
                    </div>
                    <div className="item">
                    <label>Description</label>
                        <textarea value={this.state.description} className="dropdown"
                        onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <div className="item">
                        <label>Price</label>
                        <input name="price" className="dropdown"
                        type="number"
                        value={this.state.price}
                        onChange={this.handlePriceChange}/>
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
                    <button type="submit" className="save-button">Save</button>

                    <div className="image-wrapper">
                        <img src={this.state.image} />
                        <h1>Select Image</h1>
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddScreen
