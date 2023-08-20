import "../sass/Sidebar.scss";
import CategoryItem from "./CategoryItem";

function Sidebar(props) {
  const categoryList = [
    "abrigo",
    "calzado",
    "pantalones",
    "remeras",
    "accesorios",
  ];

  return (
    <div className="sidebar-container">
      {categoryList.map((item) => {
        return <CategoryItem name={item} />;
      })}
    </div>
  );
}

export default Sidebar;
