import styled from "styled-components"
import dbMenu from "./DBMenu"
import { ListItem } from "./ListItem"
import { Banner } from "./Banner"

const MenuStyled = styled.main`
	background-color: #ccc;
`

const SectionMenu = styled.section`
	padding: 30px;
`

export const Menu = () => (
	<>
		<Banner />
		<MenuStyled>
			<SectionMenu>
				<h2>Burgers</h2>
				<ListItem itemList={dbMenu.burger} />
			</SectionMenu>

			<SectionMenu>
				<h2>Appetizers / Drinks</h2>
				<ListItem itemList={dbMenu.other} />
			</SectionMenu>
		</MenuStyled>
	</>
)
