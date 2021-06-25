import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import logo from './images/bridal-jewelry.jpg'; 
import logo1 from './images/bags.jpg'; 
import logo2 from './images/kids.jpg'; 
import logo3 from './images/heel.jpg'; 
import logo4 from './images/smartwatch.jpg'; 
import logo5 from './images/beauty.jpg'; 
import logo6 from './images/kitchen.jpg'; 
import logo7 from './images/shoes.jpg'; 
function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

         
            <CardItem
              src= {logo}
              text="Women's jewelery"
              label='Jewelry'
              path='/services'
            />
             <CardItem
              src={logo1}
             text="Women's Bag"
              label='Bag'
              path='/services'
            />
            
            <CardItem
              src={logo2}
              text='Toys,Kids & Babies'
              label='Toys'
              path='/services'
            />

            <CardItem
              src={logo3}
              text="Women's Heels"
              label="Women's Hells"
              path='/services'
            />

            <CardItem
              src={logo4}
              text='Tech'
              label='Smart watch'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={logo5}
              text='Beauty,Health & Hair'
              label='Beauty'
              path='/services'
            />
            <CardItem
              src={logo6}
              text='kitchen items'
              label='Kitchen items'
              path='/products'
            />
            <CardItem
              src={logo7}
              text="Men's shoes"
              label='Shoes'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;