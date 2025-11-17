const cart = () => {
	// console.log(document)
	const cartBtn = document.getElementById('cart');
	const cartModal = document.querySelector('.cart');
	const cartCloseBtn = cartModal.querySelector('.cart-close');

	const openCart = () => {
		cartModal.style.display = 'flex';
	}
	const closeCart = () => {
		cartModal.style.display = 'none';
	}

	// cartBtn.onclick = openCart;
	cartBtn.addEventListener('click', openCart)
	// cartCloseBtn.onclick = closeCart;
	cartCloseBtn.addEventListener('click', closeCart)
}
cart()