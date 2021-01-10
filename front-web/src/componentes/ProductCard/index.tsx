import React from 'react';
import {Product} from "../../types/types";

type Props = {
    product: Product
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatter.format(price)
}

const ProductCard = ({product}: Props) => {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} alt="imagem do produto" className="order-card-image"/>
            <h3 className="order-card-title">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
};

export default ProductCard;
