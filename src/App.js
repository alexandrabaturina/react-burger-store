import { GlobalStyle } from "./Components/Style/GlobalStyle"
import { NavBar } from "./Components/NavBar/NavBar"
import { Menu } from "./Components/Menu/Menu"
import { ModalItem } from "./Components/Modal/ModalItem"
import { useOpenItem } from "./Components/Hooks/useOpenItem"
import { Order } from "./Components/Order/Order"
import { useOrders } from "./Components/Hooks/useOrders"

const App = () => {
	const openItem = useOpenItem()
	const orders = useOrders()

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order {...orders} {...openItem} />
			<Menu {...openItem} />
			{openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
	)
}

export default App
