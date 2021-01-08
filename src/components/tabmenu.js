/* eslint-disable prettier/prettier */
/* 
	Do not remove the comment from above, 
	this tell ESlint to not process this file!
*/
import plus from "../assets/ui/plus.png"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faQrcode, faCloud, faCog } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`

const WrapperBottom = styled.div`
	position: relative;
	height: 75px;
	background: #171c26;
	border-radius: 12px;
	border-top: 2px solid #20242e;
	box-shadow: 0px -2px 22px 4px rgba(0,0,0,0.49);
`

const HalfCircle = styled.div`
	position: absolute;
    height: 64px;
    width: 64px;
    top: -30px;
    right: 10%;
    background: #0e121b;
	border-radius: 50% 50%;
	border-bottom: 2px solid #20242e;
`

/* Probably not the right way to do it... */
const ButtonAdd = styled.div`
	display: flex;
	justify-content: center;
	background: #3369ff;
    color: #ffffff;
    border: 0;
    padding: 8px;
    font-size: 36px;
    outline: none;
    position: absolute;
    right: 49px;
    z-index: 1;
    top: -25px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
	font-family: "Helvetica Light", sans-serif;
    
	& img {
		position: absolute;
		top: 6px;
		filter: invert(100%);
		width: 36px;
		height: 36px;
	}
`

const WrapperTabs = styled.div`
	display: flex;
	font-size: 24px;
	justify-content: space-evenly;
	width: 80%;
    margin-top: 22px;
	margin-left: 2px;
	opacity: .95;
`

const TabMenu = () => {
	return (
		<Container>
			<WrapperBottom>
				<WrapperTabs>
					<FontAwesomeIcon icon={faBook} />
					<FontAwesomeIcon icon={faCloud} />
					<FontAwesomeIcon icon={faQrcode} />
					<FontAwesomeIcon icon={faCog} />
				</WrapperTabs>
				<ButtonAdd>
					<img src={plus} />
				</ButtonAdd>
				<HalfCircle />
			</WrapperBottom>
		</Container>
	)
}

export default TabMenu
