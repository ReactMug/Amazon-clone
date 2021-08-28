export const initialState={
    basket:[],
    user:null
}
export const getBasketTotol=(basket)=>{
    basket?.reduce((amount,items)=> items.price + amount,0
    );
}
function reducer(state,action){
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
             };
        case 'ADD_TO_BASKET':
            //HERE WE ADD LOGIC ITEMS TO  BASKET 
           return {
               ...state,
               basket:[...state.basket,action.items]
            };
          
           case 'REMOVE_FROM_BASKET':
            //HERE WE ADD REMOVE LOGIC ITEMS FROM  BASKET 
            let newBasket =[...state.basket];
            const index= state.basket.findIndex((basketItem)=>basketItem.id === action.id )
            if(index>=0){
               newBasket.splice(index,1);
               /// item exists in basket,remoce it....
            } else {
                console.warn(`cant remove product (id:${action.id}) as its `)
            }
            return {...state,
               basket: newBasket};
           default:
               return state;
        }

}
export default reducer;