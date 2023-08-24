import "../sass/Sidebar.scss";
import CategoryItem from "./CategoryItem";

function Sidebar(props) {
  const categoryList = [
    "Abrigo",
    "Calzado",
    "Pantalones",
    "Remeras",
    "Accesorios",
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
