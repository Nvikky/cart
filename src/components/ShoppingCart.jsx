import { useEffect, useState } from 'react';
import OrangeJuice from '../assets/orange-juice.webp';
import PomegranateJuice from '../assets/pomegranate-juice.webp';
import CartItem from './CartItem';

const ShoppingCart = () => {
	const [products, setProducts] = useState([
		{
			name: 'Orange Juice',
			image: OrangeJuice,
			isVeg: true,
			quantity: '250ml',
			cost: 250,
			count: 2,
		},
		{
			name: 'Pomegranate Juice',
			image: PomegranateJuice,
			isVeg: true,
			quantity: '250ml',
			cost: 250,
			count: 1,
		},
	]);
	const [totalCost, setTotalCost] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let curCost = 0;
		let curItems = 0;
		products.forEach((product) => {
			if (product.count > 0) {
				curItems += 1;
				curCost += product.cost * product.count;
			}
		});
		setTotalItems(curItems);
		setTotalCost(curCost);
	}, [products]);

	const handleRemove = (name) => {
		const newProducts = products.filter((product) => product.name !== name);
		setProducts(newProducts);
	};

	const handleProductCount = (productName, newCount) => {
		const updatedProducts = products.map((product) => {
			if (product.name === productName) {
				return { ...product, count: newCount };
			}
			return product;
		});
		setProducts(updatedProducts);
	};

	return (
		<div className='container'>
			<div className='top'>
				<h3 className='shopping-cart'>Shopping Cart</h3>
				<button className='remove-all' onClick={() => setProducts([])}>
					Remove all
				</button>
			</div>
			<div>
				{products.map((product, index) => (
					<CartItem
						key={index}
						name={product.name}
						image={product.image}
						isVeg={product.isVeg}
						quantity={product.quantity}
						cost={product.cost}
						count={product.count}
						handleRemove={() => handleRemove(product.name)}
						handleProductCount={handleProductCount}
					/>
				))}
			</div>
			{products.length > 0 ? (
				<div className='total'>
					<div>
						<div>
							<div>
								<span className='sub-total'>Sub-total</span>
								<span className='total-items'>{totalItems} item{products.length > 1 && 's'}</span>
							</div>
							<div>
								<span className='final-price'>Rs. {totalCost}</span>
							</div>
						</div>
						<div>
							<button className='checkout'>Checkout</button>
						</div>
					</div>
				</div>
			) : (
				<div className='empty'>Your cart is empty</div>
			)}
		</div>
	);
};

export default ShoppingCart;
