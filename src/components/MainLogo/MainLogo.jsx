import React from "react";
import { Container } from "../../globalStyles";
import {
    InfoSec,
	InfoRow,
	InfoColumn,
	ImgWrapper,
	Img,
} from "./MainLogo.elements"

const MainLogo = ({
	lightBg,
	img,
	alt,
	imgStart,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<ImgWrapper>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default MainLogo;
