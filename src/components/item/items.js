import React from 'react';

const Items = (props) => {
    const {items, del , increase , decrease} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <div className='quantity'>
                        <button onClick={()=> decrease(item)}>-</button>
                        <p>{item.qty}</p>
                        <button onClick={()=> increase(item)}>+</button>
                    </div>
                    <button className="delete" onClick={() => del(item.id)}>&times;</button>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items