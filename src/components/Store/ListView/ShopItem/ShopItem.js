import React from 'react';
import PropTypes from 'prop-types';
import Add from '../../../Buttons/Add/Add';

import './ShopItem.css';

function ShopItem(props) {
    const { item } = props;

    return (
        <div className='shop-item'>
            <div className='shop-item_img' style={{backgroundImage:`url(${item.img})`}}></div>
            <h2 className='shop-item_h2'>{item.name}</h2>
            <p className='shop-item_color'>{item.color}</p>
            <p className='shop-item_price'>{item.price}</p>
            <Add/>
        </div>
    )
}

ShopItem.propTypes = {
    item:  PropTypes.object.isRequired,
};

export default ShopItem;

