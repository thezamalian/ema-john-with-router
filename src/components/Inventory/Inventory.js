import React, { useEffect } from 'react';

const Inventory = () => {
    useEffect(() => {
        fetch('/https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    });

    return (
        <div>
            <h2>This is inventory</h2>
        </div>
    );
};

export default Inventory;