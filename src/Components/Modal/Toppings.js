import styled from "styled-components"

const ToppingWrapper = styled.div`
	max-width: 450px;
	margin: 0 auto;
	column-count: 2;
	column-gap: 20px;
`

const ToppingLabel = styled.label`
	cursor: pointer;
	display: block;
`

const ToppingCheckbox = styled.input`
	cursor: pointer;
	margin-right: 5px;
`

export const Toppings = ({ toppings, checkToppings }) => {
	console.log("Toppings", toppings)
	return (
		<>
			<h3>Toppings</h3>
			<ToppingWrapper>
				{toppings.map((item, i) => (
					<ToppingLabel key={i}>
						<ToppingCheckbox
							type="checkbox"
							checked={item.checked}
							onChange={() => checkToppings(i)}
						/>
						{item.name}
					</ToppingLabel>
				))}
			</ToppingWrapper>
		</>
	)
}
