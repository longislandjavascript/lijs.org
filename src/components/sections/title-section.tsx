import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import {
  useMeetupGroupInfo,
  useCoverImage,
  useSocialButtons,
} from "../../hooks";
import { IconButton } from "../common";

const Title = styled.h1`
  color: white;
  font-size: 6rem;
  margin: 0px;
  text-align: center;
  text-shadow: 8px 8px 6px rgba(0, 0, 0, 0.6);
  span {
    color: yellow;
    display: block;
    text-align: center;
    font-size: 10rem;
    margin: 0px;
    @media (${props => props.theme.sm}) {
      font-size: 7rem;
    }
  }
`;

const MemberCount = styled.p`
  color: white;
  font-size: 2rem;
  max-width: 90%;
  text-align: center;
`;

const BGImage = styled(BackgroundImage)`
  align-items: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  width: 100%;
  z-index: 0;
`;

const SocialButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 90%;
  width: 600px;
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  padding: 5px 10px;
`;

const TitleSection: React.FC = () => {
  const data = useMeetupGroupInfo();
  const img = useCoverImage();
  const socialButtons = useSocialButtons();

  const renderSocialButtons = socialButtons.map(button => {
    return <IconButton key={button.link} link={button.link} src={button.src} />;
  });

  return (
    <BGImage Tag="section" fluid={img} alt="LIJS Cover Photo">
      <Title>
        Long Island <span>JavaScript</span>
      </Title>
      <MemberCount>
        {data.members} {data.who} and counting!
      </MemberCount>
      <SocialButtonGroup>{renderSocialButtons}</SocialButtonGroup>
    </BGImage>
  );
};

export default TitleSection;
