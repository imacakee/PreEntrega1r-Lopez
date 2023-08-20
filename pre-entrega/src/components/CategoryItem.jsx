import "../sass/CategoryItem.scss";

function CategoryItem(props) {
  return <a className="category-list-item">{props.name}</a>;
}

export default CategoryItem;
