import React from 'react';
import ProductCard from "../ProductCard";
import {Product} from '../../types/types'
import {checkIsSelected} from "../../utils/helpers";

type Props = {
    products: Product[];
    selectedProducts: Product[],
    onSelectProduct: (product: Product) => void
}

const ProductsList = ({products, onSelectProduct, selectedProducts}: Props) => {

    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map((product) => {
                    return <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                })}
            </div>
        </div>
    )
};

export default ProductsList;
