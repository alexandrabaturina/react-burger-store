import styled from "styled-components"

const ChoiceWrapper = styled.div`
	max-width: 500px;
	margin: 0 auto;
	column-count: 2;
	column-gap: 15px;
`

const ChoiceRadio = styled.input`
	cursor: pointer;
	margin-right: 5px; ;
`

const ChoiceLabel = styled.label`
	cursor: pointer;
	display: block;
`

export const Choices = ({ openItem, choice, changeChoice }) => {
	return (
		<>
			<h3>Choose:</h3>
			<ChoiceWrapper>
				{openItem.choices.map((item, i) => (
					<ChoiceLabel key={`c${i}`}>
						<ChoiceRadio
							type="radio"
							checked={choice === item}
							value={item}
							onChange={changeChoice}
						/>
						{item}
					</ChoiceLabel>
				))}
			</ChoiceWrapper>
		</>
	)
}
