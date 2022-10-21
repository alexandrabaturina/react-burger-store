export const totalPriceItems = ({ price, count }) => price * count

export const formatPrice = (price) =>
	price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})
