const CartReducer = (cart, dispatch) => {
  switch (dispatch.action) {
    case "ADD_ITEM":
    
      const productInCartIndex = cart.find(
        (item) => item.id === dispatch.product._id
      );

      if (productInCartIndex) {
        return cart.map((item) => {
          if (item.id === dispatch.product._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return [
        ...cart,
        {
          id: dispatch.product._id,
          imgCoffee: dispatch.product.img_url,
          name: dispatch.product.brand,
          price: dispatch.product.price,
          quantity: 1,
        },
      ];

    case "REMOVE_ITEM":
      return cart.filter((item) => item.id !== dispatch.product);

    case "INCREMENT_QUANTITY":
      return cart.map((item) => {
        if (item.id === dispatch.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      case "DECREMENT_QUANTITY":
        return cart.map((item) => {
          if (item.id === dispatch.product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }).filter((item)=> item.quantity>0)

    default:
      return cart;
  }
};

export default CartReducer;
