import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ProductsItem from './productsItem';
import img1 from '../../Images/Album 1.png';
import img2 from '../../Images/Album 2.png';
import img3 from '../../Images/Album 3.png';
import img4 from '../../Images/Album 4.png';

const productsArr = [
    {
        id: '1',
        title: 'Colors',
        price: 100,
        imageUrl:img1,
        // imageUrl:  "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        // quantity: 2,
    },
    {
        id: '2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: img2,
        // imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        // quantity: 3,


    },

    {
        id: '3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl:img3,
        // imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        // quantity: 1,

    },
    {
        id: '4',
        title: 'Blue Color',
        price: 100,
        imageUrl:img4,
        // imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        // quantity: 1,

    }
];




const Product = () => {
    
  const productList = productsArr.map((item,index) => (
   
    <Link key={index} to={`/products/${item.id}`}>
        {/* // {console.log(item)} */}
        <ProductsItem
          key={index} // Make sure to add a unique key prop when mapping elements
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
        />
        </Link>
       
        ));
        
      return (
        <>
          <h2 className='text-center my-4'>Music</h2>
          <div className="container my-4">
            <div className="row justify-content-center align-items-center">
              {productList}
            </div>
          </div>
        </>
      );

}

export default Product;
