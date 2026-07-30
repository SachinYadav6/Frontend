import { Link, Outlet } from "react-router-dom";

function Product() {
    return (
        <div>
            <h1>Producting paging Loading</h1>
            <div className="product">
                <Link to='men'>Men</Link>
                <Link to='women'>Women</Link>
            </div>


            <Outlet/>
            

        </div>
    )
}
export default Product;
