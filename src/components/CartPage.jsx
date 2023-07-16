import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
	const { cart } = useContext(Cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart]);

	return (
		<div style={{ textAlign: "center" }}>
			<span style={{ fontSize: 30 }}>My Cart</span>
			<br />
			<span style={{ fontSize: 30 }}>Total: Rs. {total}</span>
			<div className="productContainer">
            {cart.map((prod) => {
				return (
					<SingleProduct
						key={prod.id}
						prod={prod}
					/>
				);
			})}
			</div>
		</div>
	);
};

export default CartPage;
