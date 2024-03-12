import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { TravelListSelector, TravelListState, isDarkAtom } from "../atoms";
import CreateTravelList from "../components/CreateTravelList";
import Country from "../components/Country";

const HeaderBar = styled.header`
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.theme.bgColor};
	display: grid;
	grid-template-rows: 100px 100px auto;
	color: ${(props) => props.theme.textColor};
	justify-items: center;
	align-items: start;
`;

const HeaderDiv = styled.div`
	width: 50%;
	height: 100px;
	align-items: center;

	h1 {
		font-size: 50px;
		text-align: center;
	}
`;
const Btn = styled.button`
	width: 50px;
	height: 50px;
	position: fixed;
	top: 10px;
	right: 10px;
	border-radius: 100%;
	border: 1px solid ${(props) => props.theme.travelBorder};
`;

const Category = styled.div`
	font-size: 26px;
	font-style: bold;
	text-align: center;
	margin-bottom: 20px;
	margin-top: 20px;
`;

const CategoryUl = styled.ul`
	border: 5px solid ${(props) => props.theme.travelBorder};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TravelListDiv = styled.div``;

function TravelList() {
	const [isDark, setDarkAtom] = useRecoilState(isDarkAtom);
	const toggleDarkAtom = () => setDarkAtom((prev: any) => !prev);

	const [wish, traveled, liked] = useRecoilValue(TravelListSelector);
	return (
		<>
			<HeaderBar>
				<HeaderDiv>
					<h1> Travel List </h1>
					<Btn onClick={toggleDarkAtom}>Dark Mode</Btn>
				</HeaderDiv>
				<CreateTravelList />
				<TravelListDiv>
					<CategoryUl>
						{wish.map((travel) => (
							<Country key={travel.id} {...travel} />
						))}
					</CategoryUl>
					<Category>내가 가본 나라들</Category>
					<CategoryUl>
						{traveled.map((travel) => (
							<Country key={travel.id} {...travel} />
						))}
					</CategoryUl>
					<Category>내가 좋아하는 나라들</Category>
					<CategoryUl>
						{liked.map((travel) => (
							<Country key={travel.id} {...travel} />
						))}
					</CategoryUl>
				</TravelListDiv>
			</HeaderBar>
		</>
	);
}

export default TravelList;
