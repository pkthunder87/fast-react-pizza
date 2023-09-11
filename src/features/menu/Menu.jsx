import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant.js";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
