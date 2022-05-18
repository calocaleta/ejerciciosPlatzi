import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from "@icons/flechita.svg";

const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	const sumTotal2 = () => {
		let sum = 0;
		state.cart.map(product => (
			sum+=product.price
		))
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product = {product} key={`orderItem-${product.id}`} />
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal2()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;