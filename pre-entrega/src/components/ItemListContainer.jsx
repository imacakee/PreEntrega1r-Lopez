function ItemListContainer(props) {
  const alertFn = (message) => {
    // haces sweet alert
    alert(message);
  };

  return (
    <div>
      <button className="say-hi"
        onClick={() => {
          alertFn(props.greeting);
        }}
      >
        Saludar
      </button>
    </div>
  );
}

export default ItemListContainer;
