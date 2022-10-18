import { GlobalStyle } from "./Components/GlobalStyle"
import { NavBar } from "./Components/NavBar"
import { Menu } from "./Components/Menu"
import { ModalItem } from "./Components/ModalItem"
import { useState } from "react"

const App = () => {
	const [openItem, setOpenItem] = useState(null)

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Menu setOpenItem={setOpenItem} />
			<ModalItem openItem={openItem} setOpenItem={setOpenItem} />
		</>
	)
}

export default App
