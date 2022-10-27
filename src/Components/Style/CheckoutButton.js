import styled from "styled-components"

export const CheckoutButton = styled.button`
	display: block;
	margin: 0 auto;
	width: 250px;
	height: 65px;
	font-size: inherit;
	font-family: inherit;
	background-color: #998f07;
	color: #fff;
	border-color: transparent;
	cursor: pointer;
	transition-property: color, background-color, boder-color;
	transition-duration: 0.3s;
	&:hover {
		background-color: #fff;
		color: #998f07;
		border-color: #998f07;
	}
	&:disabled {
		color: #bbb;
		background-color: #ccc;
		border-color: #aaa;
	}
`
