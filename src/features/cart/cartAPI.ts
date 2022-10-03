import { cartItemsState } from "../../types/cartTypes";

// A mock function to mimic making an async request for data
export function fetchCart(cart = [{id: 1, name: 'NY Cheese De Luxe + Bronx Pepperoni', quantity: 1}, {id: 2, name: 'Fluffy Pancake Chocolate Ala Mode', quantity: 1}, {id: 3, name: 'U.S. Spicy Chicken Sandwich Ala Carte', quantity: 1}]) {
  return new Promise<{ data: cartItemsState[] }>((resolve) =>
    setTimeout(() => resolve({ data: cart }), 500)
  );
}
