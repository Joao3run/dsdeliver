import React, {useEffect, useState} from 'react';
import './styles.css'
import StepsHeader from "../../componentes/StepsHeader";
import ProductsList from "../../componentes/ProductsList";
import {OrderLocationData, Product} from '../../types/types'
import {fetchProduct} from "../../api";
import OrderLocation from "../../componentes/OrderLocation";

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProduct()
            .then((resp) => setProducts(resp.data))
            .catch((err) => console.error(err))
    }, [])
    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={(location) => setOrderLocation(location)}/>
        </div>
    )
};

export default Orders;
