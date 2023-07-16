import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

import "./styles.css";

faker.seed(100);

const Home = () => {
	// const { cart, setCart } = useContext(Cart);

	const productsArray = [...Array(20)].map(() => ({
		id: faker.string.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.urlPicsumPhotos(),
	}));

	const [products] = useState(productsArray);

	// console.log(cart);

	return (
		<div className="productContainer">
			{products.map((prod) => {
				return (
					<SingleProduct
						key={prod.id}
						prod={prod}
					/>
				);
			})}
		</div>
	);
};

export default Home;
