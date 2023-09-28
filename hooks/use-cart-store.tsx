import { CartItem } from '@/types/cart'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'


interface CartStore {
    cartItems:CartItem[];
    addToCart:(item:CartItem)=>void;
}


const useCartStore=create(persist<CartStore>(set=>({
    cartItems:[],
    addToCart:(item:CartItem)=>set(state=>({cartItems:[...state.cartItems,item]}))
}),{name:'cart'}))

export default useCartStore;