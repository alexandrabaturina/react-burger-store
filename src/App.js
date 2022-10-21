import { GlobalStyle } from "./Components/GlobalStyle"
import { NavBar } from "./Components/NavBar"
import { Menu } from "./Components/Menu"
import { ModalItem } from "./Components/ModalItem"
import { useOpenItem } from "./Components/Hooks/useOpenItem"
import { Order } from "./Components/Order"

const App = () => {
	const openItem = useOpenItem()

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order />
			<Menu {...openItem} />
			{openItem.openItem && <ModalItem {...openItem} />}
		</>
	)
}

export default App
