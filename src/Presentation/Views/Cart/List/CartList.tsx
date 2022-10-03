import { useEffect } from 'react';
import useViewModel from './ViewModel'
import {
    increment,
    decrement,
    remove,
    getCartAsync
} from '../../../../features/cart/cartSlice';
import Button from '../../../components/Button';
import List from '../../../components/List';

export default function CartList() {
    const { cartItems, dispatch, incrementCart, decrementCart, removeCart } = useViewModel();

    useEffect(() => {
        dispatch(getCartAsync())
    }, [])

    return (
        <div>
            <h4>Cart Items</h4>
            <List
                data={cartItems}
                rightContent={
                    [
                        {type: 'button', title: '-', onclickFunc: decrementCart},
                        {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                        {type: 'button', title: '+', onclickFunc: incrementCart},
                        {type: 'button', title: 'x', onclickFunc: removeCart},
                    ]
                }
                titleProp='name'
                keyProp='id'
            />
            <Button title="Reload Cart" onClickFunc={() => dispatch(getCartAsync())} param={null}/>
        </div>
    )
}