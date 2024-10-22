import React from 'react'
import {Link} from "react-router-dom";

import Product from '../Product/Product'
import styles from './ShopTheLatest.css'
import powerBank1 from './images/powerBank1.png'

const ShopTheLatest = () => {
  // Приклад як буде вигляждати масив товарів, який буде отримуватися з бази даних
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: powerBank1,
      url: "/"
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: powerBank1
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: powerBank1
    },
    {
      id: 4,
      name: 'Product 4',
      price: 200,
      image: powerBank1
    },
    {
      id: 5,
      name: 'Product 5',
      price: 300,
      image: powerBank1
    },
    {
      id: 6,
      name: 'Product 5',
      price: 300,
      image: powerBank1
    },

  ]

  return (
    <div>
      <ul>
        <li className={styles.shopTheLatest}>
          Shop The Latest
        </li>
        <li>
          <Link to={"/shop"} className={styles.viewAll}> View All </Link>
        </li>
      </ul>

      <div className={styles.products} >
        {products.map(product => (
          <Product key={product.id} product={product} className={"shopTheLatest"}/>
        ))}
      </div>

    </div>
  )
}
export default ShopTheLatest
