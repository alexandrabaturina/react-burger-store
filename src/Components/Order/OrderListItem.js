import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { totalPriceItems, formatPrice } from "../../Utils/helperFunctions"
import { useRef } from "react"

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

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
	const toppings = order.topping
		.filter((topping) => topping.checked === true)
		.map((topping) => topping.name)
		.join(", ")

	const refDeleteButton = useRef(null)

	return (
		<OrderItemStyled
			onClick={(e) =>
				e.target !== refDeleteButton.current && setOpenItem({ ...order, index })
			}
		>
			<ItemName>
				{order.name}
				{order.choice}
			</ItemName>
			<span>{order.count}</span>
			<ItemPrice>{formatPrice(totalPriceItems(order))}</ItemPrice>
			<FontAwesomeIcon
				icon={faTrashCan}
				ref={refDeleteButton}
				onClick={() => deleteItem(index)}
			/>
			<Toppings>{toppings}</Toppings>
		</OrderItemStyled>
	)
}
