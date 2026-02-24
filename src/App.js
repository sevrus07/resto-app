import './App.css';
import { useReducer,useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import RestoItem from './components/RestoItem';
import HomePage from './components/HomePage';
import AddItemForm from './components/AddItemForm';
import UpdatedItemForm from './components/UpdatedItemForm';
import CartPage from './components/CartPage';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';



const initialState = {
  items: [
    {
      id: 1,
      name: "Burger",
      price: 50,
      category: "Food",
      description: "This is a delicious burger",
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      id: 2,
      name: "Pizza",
      price: 100,
      category: "Food",
      description: "A cut of pizza is great",
      image: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
    },
    {
      id: 3,
      name: "Fries",
      price: 25,
      category: "Food",
      description: "Large thick cut fries",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
    },
    {
      id: 4,
      name: "Coffee",
      price: 35,
      category: "Drinks",
      description: "Arabica blend coffee",
      image: "https://cdn-icons-png.flaticon.com/512/2935/2935413.png",
    },
    {
      id: 5,
      name: "Iced Tea",
      price: 45,
      category: "Drinks",
      description: "Freshly picked tea leaves in cold water",
      image: "https://cdn-icons-png.flaticon.com/512/1187/1187466.png",
    },
    {
      id: 6,
      name: "Hot Tea",
      price: 45,
      category: "Drinks",
      description: "Tea drip in hot water",
      image: "https://cdn-icons-png.flaticon.com/512/3504/3504747.png",
    },
    {
      id: 7,
      name: "Ice Cream",
      price: 99,
      category: "Desserts",
      description: "Cold Ice Cream",
      image: "https://cdn-icons-png.flaticon.com/512/4363/4363705.png",
    }
  ],
  toUpdateItem: null,
  cart: []
}
const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case 'FOR_UPDATE':
      return {
        ...state,
        toUpdateItem: state.items.find(item => item.id === action.payload.id)
      };

    case 'UPDATE_ITEM': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item
      );

      const updatedCart = state.cart.map(cartItem =>
        cartItem.id === action.payload.id
          ? { ...action.payload, quantity: cartItem.quantity }
          : cartItem
      );

      return {
        ...state,
        items: updatedItems,
        cart: updatedCart,
        toUpdateItem: null
      };
    }

    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      };

    case 'ADD_CART': {
      const existing = state.cart.find(
        cartItem => cartItem.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        };
      }

      const item = state.items.find(item => item.id === action.payload.id);

      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1 }]
      };
    }

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      };

    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(cartItem =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };

    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart
          .map(cartItem =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter(cartItem => cartItem.quantity > 0)
      };

    default:
      return state;
  }
};  

// const reducer = (state, action) => {
//   switch(action.type){
//     case 'ADD_ITEM':
//       return {...state, items: [...state.items, action.payload]}
//     case 'FOR_UPDATE':
//       return {...state, toUpdateItem: state.items.find(item=>item.id===action.payload.id)};
//     case 'UPDATE_ITEM':
//       const itemindex = state.items.findIndex(item=>item.id===action.payload.id);
//       const newItems = state.items.filter(item=>item.id!==action.payload.id);

//       newItems.splice(itemindex, 0, action.payload);

//       return {...state, items: newItems, toUpdateItem: null, cart: state.cart.map(cartItem=>{
//           if(cartItem.id===action.payload.id){
//               action.payload.quantity = cartItem.quantity;
//               cartItem = action.payload;
//           }
//           return cartItem;
//       })};      
//     case 'DELETE_ITEM':
//       return {...state, items: state.items.filter( item => item.id !== action.payload.id)};
//     case 'ADD_CART':
//       const newCartItem = state.items.find(item=>item.id===action.payload.id);

//       if(state.cart.some(cartItem=>cartItem.id===action.payload.id)) {
//           const newCart = state.cart.map(cartItem=>{
//               if(cartItem.id===action.payload.id){
//                   cartItem.quantity++;
//               }
//               return cartItem;
//           })
//           state.cart = newCart;
//           return {...state, cart: state.cart}
//       }

//       else{
//           newCartItem.quantity=1;
//           return {...state, cart: [...state.cart, newCartItem]}
//       }
//     case 'REMOVE_CART':
//       return {...state, cart: state.cart.filter(cartItem=>cartItem.id!==action.payload.id)}
//     case 'INCREMENT':
//       return {...state, cart: state.cart.map(cartItem=>{
//         if(cartItem.id===action.payload.id){
//             cartItem.quantity++;
//         }
//         return cartItem;
//         })}
//     case 'DECREMENT':
//       return {...state, cart: state.cart.map(cartItem=>{
//           if(cartItem.id===action.payload.id){
//               cartItem.quantity--;
//           }
//           return cartItem;
//           })}
//     default:
//       return state;
//   }
// }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
      const total = state.cart.reduce((accumulator, currentValue)=>{return accumulator+(currentValue.price*currentValue.quantity)}, 0);

      setTotalPrice(total);
  },[state.cart]);



  // const compare = ( a, b ) => {
  //   if( a.price > b.price ) return 1;
  //   if( b.price > a.price ) return -1;

  //   return 0;
  // }

  

  return(
    <>
    {/* <Header/> */}

    <Navbar/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/resto' element={<RestoItem dispatch={dispatch}/>}></Route>
      <Route path='/:category' element={<CategoryPage state={state} dispatch={dispatch} />}></Route>
      <Route path='/add-item' element={<AddItemForm dispatch={dispatch}/>}></Route>
      <Route path='/update-item' element={state.toUpdateItem&&<UpdatedItemForm item={state.toUpdateItem} dispatch={dispatch}/>}></Route>
      <Route path='/cart' element={<CartPage items={state.cart} total={totalPrice} dispatch={dispatch} />}></Route>
    </Routes>
    {/* <Footer/> */}
    

    </>
  )
}

export default App;
