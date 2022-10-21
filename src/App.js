import { GlobalStyle } from "./Components/GlobalStyle"
import { NavBar } from "./Components/NavBar"
import { Menu } from "./Components/Menu"
import { ModalItem } from "./Components/ModalItem"
import { useOpenItem } from "./Components/Hooks/useOpenItem"
import { Order } from "./Components/Order"
import { useOrders } from "./Components/Hooks/useOrders"

const App = () => {
	const openItem = useOpenItem()
	const orders = useOrders()

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order {...orders} />
			<Menu {...openItem} />
			{openItem.openItem && <ModalItem {...openItem} {...orders} />}
		</>
	)
}

export default App
