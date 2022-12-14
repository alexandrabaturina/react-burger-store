import styled from "styled-components"
import { CheckoutButton } from "../Style/CheckoutButton"
import { OrderListItem } from "./OrderListItem"
import { totalPriceItems, formatPrice } from "../../Utils/helperFunctions"

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 80px;
	left: 0;
	background: #fff;
	width: 380px;
	height: calc(100% - 80px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
	padding: 20px;
`

const OrderHeader = styled.h2`
	text-align: center;
	margin-bottom: 30px;
`

const OrderContent = styled.div`
	flex-grow: 1;
`

const OrderList = styled.ul``

const OrderTotal = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: thick double #000000;
	margin: 0 35px 30px;
	padding-top: 10px;
	& span:first-child {
		flex-grow: 1;
	}
	& span:last-child {
		min-width: 75px;
		margin-left: 20px;
		text-align: right;
	}
`

const EmptyList = styled.p`
	text-align: center;
`

export const Order = ({ orders, setOrders, setOpenItem }) => {
	const deleteItem = (index) => {
		const newOrder = orders.filter((item, i) => index !== i)
		setOrders(newOrder)
	}
	const total = orders.reduce(
		(result, order) => totalPriceItems(order) + result,
		0
	)
	const totalCounter = orders.reduce((result, order) => order.count + result, 0)
	return (
		<OrderStyled>
			<OrderHeader>My Order</OrderHeader>
			<OrderContent>
				{orders.length ? (
					<OrderList>
						{orders.map((order, index) => (
							<OrderListItem
								order={order}
								key={index}
								deleteItem={deleteItem}
								index={index}
								setOpenItem={setOpenItem}
							/>
						))}
					</OrderList>
				) : (
					<EmptyList>You don't have orders yet.</EmptyList>
				)}
			</OrderContent>
			<OrderTotal>
				<span>Total</span>
				<span>{totalCounter}</span>
				<span>{formatPrice(total)}</span>
			</OrderTotal>
			<CheckoutButton>Checkout</CheckoutButton>
		</OrderStyled>
	)
}
