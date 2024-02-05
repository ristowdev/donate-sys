import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { FaPlay } from "react-icons/fa";
import SpecialBoxFrame from '@/components/special-box-frame'
import { IoMdArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Footer from '@/components/footer'
import HeaderNew from '@/components/header-new'
import SEOpro from '@/components/SEO-pro'
import { useState, useEffect } from 'react';
import { getAllProducts } from '@/lib/getAllProducts';
import { addToCartAndCheckout } from '@/lib/addToCartAndCheckout';


const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
    const [amount, setAmount] = useState<string>('');
   
    const fetchData = async () => {
        try {
          const productsData = await getAllProducts();
          console.log('Products Data:', productsData);
      
          // Filter products based on the specified amount
          const filteredProducts = productsData.body.data.products.edges.filter(
            (product: any) => {
              const variant = product.node.variants.edges[0]?.node;
              if (variant) {
                const productPrice = parseFloat(variant.priceV2.amount);
                return productPrice === parseFloat(amount);
              }
              return false;
            }
          );
      
          // Log the filtered products
          console.log('Filtered Products:', filteredProducts);
      
          if (filteredProducts.length > 0) {
            const selectedProduct = filteredProducts[0].node;
            const productID = selectedProduct.id;
      
            // You can set the quantity based on your logic, for example, taking it from user input
            const quantity = 1;
      
            // Add the selected product to cart and proceed to checkout
            // await addToCartAndCheckout(productID, quantity);
          } else {
            console.log('No product found with the specified amount');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
    

  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEOpro title='RiseUpGram: Privacy Policy'/>

       
      <HeaderNew noFixed={true}/>

      <div className='container'>
        <div className='wrapper'>
            <br/>
            <br/>
           <h1>Just test</h1>
            <br/>
            <br/>
<input 
    type="text"
    placeholder="Enter amount"
    onChange={(e) => {
        setAmount(e.target.value);
    }}
    value={amount}
/>

<button 
onClick={fetchData}
>Click me</button>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      </div>

      <Footer className='ablcdp2dw'/>
 
      
    </>
  )
} 
