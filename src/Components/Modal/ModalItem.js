import styled from "styled-components"
import { CheckoutButton } from "../Style/CheckoutButton"
import { CountItem } from "./CountItem"
import { useCount } from "../Hooks/useCount"

const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba (0, 0, 0, 0.5);
	z-index: 20;
`

const Modal = styled.div`
	background-color: #ffffff;
	width: 500px;
	height: 500px;
`

const ModalBanner = styled.div`
	height: 200px;
	width: 100%;
	background-image: url(${({ img }) => img});
	background-size: cover;
	background-position: center;
`

const Content = styled.section`
	padding: 30px;
	height: calc(100% - 200px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const ContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 24px;
	font-weight: 700;
	font-family: "Pacifico", cursive;
`

const TotalPriceItem = styled.div`
	display: flex;
	justify-content: space-between;
`
export const totalPriceItems = ({ price, count }) => price * count

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
	const counter = useCount()

	function closeModal(e) {
		if (e.target.id === "overlay") {
			setOpenItem(null)
		}
	}

	const order = {
		...openItem,
		count: counter.count,
	}

	const addToOrder = () => {
		setOrders([...orders, order])
		setOpenItem(null)
	}

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<ModalBanner img={openItem.img} />
				<Content>
					<ContentHeader>
						<div>{openItem.name}</div>
						<div>
							{openItem.price.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})}
						</div>
					</ContentHeader>
					<CountItem {...counter} />
					<TotalPriceItem>
						<span>Price</span>
						<span>
							{totalPriceItems(order).toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})}
						</span>
					</TotalPriceItem>
					<CheckoutButton onClick={addToOrder}>Add</CheckoutButton>
				</Content>
			</Modal>
		</Overlay>
	)
}