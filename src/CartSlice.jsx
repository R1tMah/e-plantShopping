import { createSlice, useDispatch } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const incomingPlant = action.payload;
        // Check if this plant is already in the cart
        const existing = state.items.find(item => item.name === incomingPlant.name);
        if (existing) {
            // If it exists, just increment its quantity by 1
            existing.quantity += 1;
        } else {
            // Otherwise, add a new entry with quantity = 1
            state.items.push({ ...incomingPlant, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      // Filter out any item whose name matches nameToRemove
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find(item => item.name == name);
        if (item) {
        // Update the quantity. If quantity <= 0, you could also choose to remove it entirely.
            item.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
