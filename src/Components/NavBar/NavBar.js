import styled from "styled-components"
import logoImg from "../../img/logo.svg"

const NavBarStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #998f07;
	color: white;
`

const Logo = styled.div`
	display: flex;
	align-items: center;
`

const H1 = styled.h1`
	font-size: 30px;
	margin-left: 15px;
`

const ImgLogo = styled.img`
	width: 50px;
`

const LogInBtn = styled.button`
	width: 75px;
	height: 30px;
	color: #282a31;
	font-size: 15px;
	font-weight: 600;
	border-radius: 5px;
	border: 1px solid;
	&:hover {
		border: 2px solid;
		background-color: #e7e9eb;
	}
`

export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt="logo"></ImgLogo>
			<H1>Mr. Donald's</H1>
		</Logo>
		<LogInBtn>Log In</LogInBtn>
	</NavBarStyled>
)
