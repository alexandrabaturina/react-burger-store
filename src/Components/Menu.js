import styled from "styled-components"
import dbMenu from "./DBMenu"
import { ListItem } from "./ListItem"

const MenuBanner = styled.div`
	background-image: url("/menu/banner.png");
	background-size: cover;
	width: 100%;
	height: 250px;
`

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;
`

const SectionMenu = styled.section`
	padding: 30px;
`

export const Menu = () => (
	<>
		<MenuBanner />
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
