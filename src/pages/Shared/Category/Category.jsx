import React, { useEffect, useState } from 'react';
import ChefCard from '../../Home/ChefCard/ChefCard';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-akasdatta.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2 style={{ color: '#52A015' }} className='text-center m-5'>The Available Chef</h2>
            <ChefCard categories={categories} />
        </div>
    );
};

export default Category;
