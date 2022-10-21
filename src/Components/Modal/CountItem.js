import styled from "styled-components"

const CountWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const CountInput = styled.input`
	width: 45px;
	font-size: 20px;
	text-align: center;
`

const CountBtn = styled.button`
	background-color: transparent;
	width: 25px;
	text-align: center;
	padding: 0;
`

export function CountItem({ count, setCount, onChange }) {
	return (
		<CountWrapper>
			<span>Amount</span>
			<div>
				<CountBtn disabled={count <= 1} onClick={() => setCount(count - 1)}>
					-
				</CountBtn>
				<CountInput
					type="number"
					min="1"
					max="100"
					value={count < 1 ? 1 : count}
					onChange={onChange}
				/>
				<CountBtn onClick={() => setCount(count + 1)}>+</CountBtn>
			</div>
		</CountWrapper>
	)
}
