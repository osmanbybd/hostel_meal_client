import React from 'react';
import Banner from '../banner/Banner';
import MealCard from '../MealCard/MealCard';
import MealCategory from '../MealCard/MealCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <MealCategory></MealCategory>
        </div>
    );
};

export default Home;