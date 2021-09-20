import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

import './Store.css';

function Store(props) {
    const { products } = props;

    let [ icon, setIcon ] = useState('view_list');

    const onSwitch = () => {
        setIcon( item => (item === 'view_list') ? 'view_module' : 'view_list');
    }

    return (
        <div className='store'>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {
                (icon === 'view_list') ? 
                <CardsView cards={products}/> :
                <ListView items={products}/>
            }
        </div>
    )
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
};

export default Store;

