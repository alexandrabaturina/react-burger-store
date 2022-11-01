import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { totalPriceItems, formatPrice } from "../../Utils/helperFunctions"

const OrderItemStyled = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 15px 0;
`

const ItemName = styled.span`
	flex-grow: 1;
`

const ItemPrice = styled.span`
	margin-left: 20px;
	margin-right: 10px;
	min-width: 65px;
	text-align: right;
`

const Toppings = styled.div`
	color: 9a9a9a;
	font-size: 14px;
	width: 100%;
`

export const OrderListItem = ({ order, index, deleteItem }) => {
	const toppings = order.topping
		.filter((topping) => topping.checked === true)
		.map((topping) => topping.name)
		.join(", ")

	return (
		<OrderItemStyled>
			<ItemName>
				{order.name}
				{order.choice}
			</ItemName>
			<span>{order.count}</span>
			<ItemPrice>{formatPrice(totalPriceItems(order))}</ItemPrice>
			<FontAwesomeIcon icon={faTrashCan} onClick={() => deleteItem(index)} />
			<Toppings>{toppings}</Toppings>
		</OrderItemStyled>
	)
}
