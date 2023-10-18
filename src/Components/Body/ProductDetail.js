import React from 'react';
import { useParams } from 'react-router-dom';

const productsArr = [
  {
      id: '1',
      title: 'Colors',
      price: 100,
      // imageUrl:img1,
      imageUrl:  "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      // quantity: 2,
  },
  {
      id: '2',
      title: 'Black and white Colors',
      price: 50,
      // imageUrl: img2,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      // quantity: 3,


  },

  {
      id: '3',
      title: 'Yellow and Black Colors',
      price: 70,
      // imageUrl:img3,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      // quantity: 1,

  },
  {
      id: '4',
      title: 'Blue Color',
      price: 100,
      // imageUrl:img4,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      // quantity: 1,

  }
];
// console.log(productsArr)

const ProductDetailPage = () => {
  
  const { productId } = useParams();
//   // console.log(productId);
//   //When you pass 10 as the second parameter, you are specifying that the input string (productId in this case) is in base-10, which is the decimal numeral system. 
  // const productIdNumber = parseInt(productId, 10);

//   // Find the selected product based on productId
// console.log(productsArr);
  const selectedProduct = productsArr.find((product) => product.id === productId);
console.log(selectedProduct)

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }


  return (
    <div>
      <p>I am product detail page</p>
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetailPage;