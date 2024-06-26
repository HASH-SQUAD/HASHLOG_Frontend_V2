/*eslint-disable */
import styled from 'styled-components';

export const Main_Container = styled.div`
	img {
		width: 100vw;
		max-height: 516px;
	}
`;

export const Main_Content_Body = styled.div`
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const Main_Content = styled.div`
	display: grid;
	width: 74vw;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 20px;

	@media only screen and (max-width: 1299px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media only screen and (max-width: 940px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
