import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';
import { v4 } from 'uuid';

import './CardsView.css'

function CardsView(props) {
    const { cards } = props;

    return (
        <div className='cards-view'>
            {
                cards.map( card => <ShopCard key={v4()} card={card}/>)
            }
        </div>
    )
}

CardsView.propTypes = {
    cards:  PropTypes.array.isRequired,
};

export default CardsView;

