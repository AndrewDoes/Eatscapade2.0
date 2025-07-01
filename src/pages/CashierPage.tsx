import { useState } from "react";
import Products from "../components/CashierPage/Products";
import TopBar from "../components/TopBar/TopBar";
import SearchBar from "../components/TopBar/Searchbar";

const addToCart = (product) => {
    setCart(currentCart => {
        const existingItem = currentCart.find(item => item.id === product.id);
        if (existingItem) {
            return currentCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        }
        else {
            return [...currentCart, { ...product, quantity: 1 }];
        }
    })
}

const CashierPage = () => {
    return (
        <div className="flex-1 flex mx-5 overflow-hidden">
            <div className="w-200 flex flex-col gap-3">
                <SearchBar/>
                <Products onAddToCart={() => { }} />
            </div>
        </div>
    )
}

export default CashierPage;