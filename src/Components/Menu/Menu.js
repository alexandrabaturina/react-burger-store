import styled from "styled-components"
import dbMenu from "../DBMenu"
import { ListItem } from "./ListItem"
import { Banner } from "./Banner"

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-left: 380px;
`

const SectionMenu = styled.section`
	padding: 30px;
`

export const Menu = ({ setOpenItem }) => (
	<>
		<Banner />
		<MenuStyled>
			<SectionMenu>
				<h2>Burgers</h2>
				<ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
			</SectionMenu>

			<SectionMenu>
				<h2>Appetizers / Drinks</h2>
				<ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
			</SectionMenu>
		</MenuStyled>
	</>
)
