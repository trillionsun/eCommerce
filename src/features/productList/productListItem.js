import React from 'react';
import AddBtn from './add-btn.js'
import RemoveBtn from './remove-btn.js'


class ProductListItem extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state= {
            quality: "normal",
            size: "small",
            quantity: 0
        }
        this.handleQualityChange = this.handleQualityChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }
    handleQualityChange(event)
    {
        this.setState({
            quality: event.target.value
        })
    }
    handleSizeChange(event)
    {
        this.setState({
            size: event.target.value
        })
    }
    handleQuantityChange(event)
    {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        const {product, addToCart, removeFromCart} = this.props
        return <div class="col-lg-4 col-md-3">
            <div class="card h-60">
                <a href="#"><img class="card-img-top"  src = {product.image} alt=""/></a>
                <div class="card-body">
                    <a href="#">{product.name}</a>
                    <h5>{product.price}</h5>
                    <p class="card-text">{product.category}</p>
                    <form>
                        <div class="form-group">
                            <label>Quality Selection </label>
                            <select name="quality" class="form-control input-sm" value={this.state.quality}
                            onChange={this.handleQualityChange}>
                                <option>Normal</option>
                                <option>Good</option>
                                <option>Superior</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Size Selection</label><br />
                            <label class="radio-inline">
                                <input type="radio" name="size" value="small" onClick={this.handleSizeChange}/> Small
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="size" value="medium" onClick={this.handleSizeChange}/> Medium
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="size" value="large" onClick={this.handleSizeChange}/>Large
                            </label>
                        </div>
                        <div>
                            <label>Quantity Selection </label> Number: <br />
                            <input type="number" name="Quantity" value={this.state.quantity} onChange={this.handleQuantityChange} />
                        </div>

                        <div className="btn-group" role="group" aria-label="Basic example">
                            <AddBtn
                                cartItem = {this.props.cartItem}
                                product = {product}
                                addToCart = {addToCart}
                                quantity = {parseInt(this.state.quantity,10)}
                            />
                            {
                                this.props.cartItem && this.props.cartItem.quantity >0
                                    ?  <RemoveBtn
                                        cartItem={this.props.cartItem}
                                        product={product}
                                        removeFromCart={removeFromCart}
                                    />
                                    : null
                            }
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>
    }
}
export default ProductListItem


