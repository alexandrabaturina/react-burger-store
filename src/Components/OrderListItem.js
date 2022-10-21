import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const OrderItemStyled = styled.li`
	display: flex;
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

export const OrderListItem = ({ order }) => {
	return (
		<OrderItemStyled>
			<ItemName>{order.name}</ItemName>
			<span>2</span>
			<ItemPrice>
				{order.price.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</ItemPrice>
			<FontAwesomeIcon icon={faTrashCan} />
		</OrderItemStyled>
	)
}
