const CartItem = ({ image, name, isVeg, quantity, cost, count, handleRemove, handleProductCount }) => {
	return (
		<div className='cartItem'>
			<div className='product-image'>
				<img width={90} height={90} src={image} alt={name} />
			</div>
			<div className='details'>
				<div className='info'>
					<div>
						<p className='itemName'>{name}</p>
						<p className='quantity'>{quantity}</p>
						{isVeg ? (
							<img
								width='20'
								height='20'
								src='https://img.icons8.com/fluency/48/vegetarian-food-symbol.png'
								alt='vegetarian'
							/>
						) : (
							<img
								width='20'
								height='20'
								src='https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png'
								alt='non-vegetarian'
							/>
						)}
					</div>
				</div>
				<div className='count'>
					<span>
						<button onClick={() => handleProductCount(name, count + 1)}> + </button>
						{count}
						<button
							style={{ cursor: count === 0 && 'not-allowed'}}
							disabled={count === 0}
							onClick={() => handleProductCount(name, count - 1)}
						> - </button>
					</span>
				</div>
				<div className='cost'>
					<span>Rs. {cost}</span>
					<button className='save-for-later' onClick={() => alert(name + ' Saved..')}>
						Save for later
					</button>
					<button className='remove' onClick={handleRemove}>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
