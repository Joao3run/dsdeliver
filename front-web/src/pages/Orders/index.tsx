import React, {useEffect, useState} from 'react';
import './styles.css'
import StepsHeader from "../../componentes/StepsHeader";
import ProductsList from "../../componentes/ProductsList";
import {OrderLocationData, Product} from '../../types/types'
import {fetchProduct, saveOrder} from "../../api";
import OrderLocation from "../../componentes/OrderLocation";
import OrderSummary from "../../componentes/OrderSummary";
import Footer from "../../componentes/Footer";
import {checkIsSelected} from "../../utils/helpers";
import {toast} from "react-toastify";

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    const totalPrice = selectedProducts.reduce((sum, item) => sum + item.price, 0)

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }


    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({id}) => ({id}));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload).then((resp) => {
            toast.error(`Pedido enviado com sucesso! N° ${resp.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    useEffect(() => {
        fetchProduct()
            .then((resp) => setProducts(resp.data))
            .catch((err) => toast.warning('Erro ao enviar pedido')
    )
    }, [])
    return (
        <>
            <div className="orders-container">
                <StepsHeader/>
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation
                    onChangeLocation={
                        (location) => setOrderLocation(location)
                    }
                />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer/>
        </>
    )
};

export default Orders;
