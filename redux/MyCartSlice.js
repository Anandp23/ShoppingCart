import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            state.push(action.payload);
        },
        removeProductFromMyCart(state, action) {
            
            return state.filter(item => item.id !== action.payload);
          },
        
    },

})

export const { addProductToMyCart,removeProductFromMyCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;