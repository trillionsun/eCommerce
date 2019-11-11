import React from 'react';

import AddBtn from './add-btn.js'
import RemoveBtn from './remove-btn.js'

export default function ProductListItem(props)
{
    return <div class="col-lg-4 col-md-3">
            <div class="card h-60">
                <a href="#"><img class="card-img-top"  src = {props.product.image} alt=""/></a>
                <div class="card-body">
                    <a href="#">{props.product.name}</a>
                <h5>{props.product.price}</h5>
                <p class="card-text">{props.product.category}</p>
                <div>
                    <div class="form-group">
                        <label>Quality: </label>
                        <select name="product_quality" class="form-control input-sm" >
                            <option>Normal</option>
                            <option>Good</option>
                            <option>Superior</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Size: </label><br />
                        <label class="radio-inline">
                            <input type="radio" name="product_size" value="small"/> Small
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="product_size" value="medium"/> Medium
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="product_size" value="large"/> Large
                        </label>
                    </div>
                  <input type="number" value={ (props.cartItem && props.cartItem.quantity) || 0}    />

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <AddBtn
                            cartItem = {props.cartItem}
                            product = {props.product}
                            addToCart = {props.addToCart}
                        />

                    {
                        props.cartItem
                            ? <RemoveBtn
                                cartItem={props.cartItem}
                                product={props.product}
                                removeFromCart={props.removeFromCart}
                            />
                            : null
                    }
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
    </div>
</div>
}
