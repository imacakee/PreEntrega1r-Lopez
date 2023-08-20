import "../sass/CartWidget.scss";

function CartWidget(props) {
  return (
    <div className="cart-container">
      <img src="/img/cart-shopping-solid.svg" className="cart-widget-img" />
      <div className="counter">0</div>
    </div>
  );
}

export default CartWidget;
