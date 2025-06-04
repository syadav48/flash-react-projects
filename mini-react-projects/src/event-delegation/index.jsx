import React from 'react';

const ItemList = () => {
    const handleClick = (event) => {
        const item = event.target;
        if (item.tagName === 'LI') {
            console.log('You clicked on ' + item.textContent);
        }
    };

    return (
        <ul onClick={handleClick} style={{marginTop: '50px'}}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
};

export default ItemList;
