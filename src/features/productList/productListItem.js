import React from 'react';
import AddBtn from './add-btn.js'



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
            quantity: Math.min(event.target.value, this.props.product.quantity)
        })
    }

    render() {
        const {product, addToCart} = this.props
        return <div class="col-lg-4 col-md-5">
            <div class="card h-60">
                <a><img class="card-img-top img-thumbnail "  src = {product.image} alt=""/></a>
                <div class="card-body">
                    <a href="#">{product.name}</a>
                    <h5>{product.price}$</h5>
                    <form>
                        <div class="form-group">
                            <label>Size</label><br />
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
                        <div class="input-group">
                            <label>now {product.quantity} (in stock)</label><br />
                            <label class="input-group" >
                            <input type="number" min="0" max={product.quantity} name="Quantity"  classname="col-xl-6 col-lg-5 col-md-5 col-sm-2 col-2" value={this.state.quantity} onChange={this.handleQuantityChange} />
                            </label>
                            </div>

                        <div>
                            <p>
                            <AddBtn
                                cartItem = {this.props.cartItem}
                                product = {product}
                                addToCart = {addToCart}
                                quantity = {parseInt(this.state.quantity,10)}
                            />
                            </p>
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


