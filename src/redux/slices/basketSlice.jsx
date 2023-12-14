import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "baskets",
    initialState: {
        items: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : []
    },
    reducers: {
        addBasket: (state, action) => {
            const target = state.items.find(product => product.id === action.payload.id)
      
            if (target) {
                target.count = target.count + 1
                target.totalPrice = (target.count *target.product.unitPrice).toFixed(2)
                state.items = [...state.items]
                localStorage.setItem('basketItems', JSON.stringify([...state.items]))
            }
            else {
                const basketItem = {
                    id: action.payload.id,
                    product: action.payload,
                    count: 1,
                    totalPrice: action.payload.unitPrice
                }
                state.items = [...state.items, basketItem]
                localStorage.setItem('basketItems', JSON.stringify([...state.items]))
            }
        },
        increaseBtn:(state,action)=>{
            const target = state.items.find(item => item.id === action.payload.id)
            console.log(target.count)
            console.log(target.product.unitPrice)
               target.count=target.count+1
                target.totalPrice= (target.count *target.product.unitPrice).toFixed(2)
                state.items=[...state.items]
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
        },
        deleteItems: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            const indexOf = state.items.indexOf(target)
            state.items.splice(indexOf, 1)
            localStorage.setItem("basketItems", JSON.stringify([...state.items]))
        },
        decreaseBasketItem: (state, action) => {
            const target = state.items.find(item => item.id === action.payload.id)
            if(target.count>1){
                target.count=target.count-1
                target.totalPrice= (target.count *target.product.unitPrice).toFixed(2)
                state.items=[...state.items]
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
            }
            else{
                const indexOff=state.items.indexOf(target)
                state.items.splice(indexOff,1)
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
            }
        }

    }
})
export const { addBasket, deleteItems,decreaseBasketItem,increaseBtn } = basketSlice.actions
export default basketSlice.reducer