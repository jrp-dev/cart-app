import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { decrement, increment, remove, selectCart, cartTotal } from '../../../../features/cart/cartSlice';
import { cartItemsState } from '../../../../types/cartTypes';

export default function CartListViewModel() {

    const cartItems = useAppSelector(selectCart);
    const total = useAppSelector(cartTotal);
    const dispatch = useAppDispatch();

    const incrementCart = (item: cartItemsState) => {
        dispatch(increment(item))
    }

    const decrementCart = (item: cartItemsState) => {
        dispatch(decrement(item))
    }

    const removeCart = (item: cartItemsState) => {
        dispatch(remove(item))
    }

    return {
        cartItems,
        dispatch,
        decrementCart,
        incrementCart,
        removeCart,
        total
    }
}