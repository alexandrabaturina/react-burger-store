const topping_coef = 0.1

export const totalPriceItems = (order) => {
	const countTopping =
		order.topping && order.topping.filter((topping) => topping.checked).length

	const priceTopping = order.price * topping_coef * countTopping

	return (order.price + priceTopping) * order.count
}

export const formatPrice = (price) =>
	price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})
