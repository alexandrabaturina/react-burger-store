import { GlobalStyle } from "./Components/GlobalStyle"
import { NavBar } from "./Components/NavBar"
import { Menu } from "./Components/Menu"
import { ModalItem } from "./Components/ModalItem"
import { useState } from "react"
import { Order } from "./Components/Order"

const App = () => {
	const [openItem, setOpenItem] = useState(null)

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order />
			<Menu setOpenItem={setOpenItem} />
			<ModalItem openItem={openItem} setOpenItem={setOpenItem} />
		</>
	)
}

export default App
