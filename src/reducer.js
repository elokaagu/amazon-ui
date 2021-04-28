export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
