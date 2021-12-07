import {routerMap } from "../router"
import { Link } from "react-router-dom";
const Menu = () => {
    return(
        <div>
            {
                <>
                <Link to={routerMap.table}>Табилца</Link>
                <Link to={routerMap.todo} >Список дел</Link>
                <Link to={routerMap.pharmacy} >Аптечная система</Link>
                </>
            }
        </div>
    )
}
export default Menu