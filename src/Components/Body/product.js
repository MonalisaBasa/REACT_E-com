import React from 'react';
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
        imageUrl: img1,
    },
    {
        id: '2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: img2,

    },

    {
        id: '3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: img3,

    },
    {
        id: '4',
        title: 'Blue Color',
        price: 100,
        imageUrl:img4,

    }
];



const Product = () => {
    const productList = productsArr.map((item,index) => {
        {console.log(item)}
        return(<ProductsItem
          key={item.index} // Make sure to add a unique key prop when mapping elements
          id={item.index}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
        />)
        });
        
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
