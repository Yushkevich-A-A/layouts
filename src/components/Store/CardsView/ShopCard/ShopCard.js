import React from 'react';
import PropTypes from 'prop-types';
import Add from '../../../Buttons/Add/Add';

import './ShopCard.css';

function ShopCard(props) {
    const { card } = props;

    return (
        <div className='shop-card' style={{backgroundImage: `url(${card.img})`}}>
            <div className='shop-card__name'>
                <h2 className='shop-card_h2'>{card.name}</h2>
                <p className='shop-card_color'>{card.color}</p>
            </div>
            <div className='shop-card__interact'>
                <p className='shop-card_price'>{card.price}</p>
                <Add/>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    card:  PropTypes.object.isRequired,
};

export default ShopCard;
