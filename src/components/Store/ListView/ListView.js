import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ShopItem from './ShopItem/ShopItem';


function ListView(props) {
    const { items } = props;

    return (
        <div className='list-view'>
        {
            items.map( item => <ShopItem key={v4()} item={item}/>)
        }
    </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ListView;

