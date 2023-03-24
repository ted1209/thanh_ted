import styled from 'styled-components/macro';
import { IColors } from '../../interfaces';

interface IProps {
  colors: IColors;
}

interface IButton {
  colors: IColors;
  target: any;
}

interface IImage {
  image: string;
}

interface IImages {
  images: number;
}

export const UserPopover = styled.div<IProps>`
  background-color: ${(props) => props.colors.fontColor};
  border-radius: 10px;
  color: ${(props) => props.colors.background};
  width: 300px;
`;

export const Content = styled.div`
  padding-top: 85px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const Nav = styled.div<IProps>`
  grid-column: 3 / span 2;
  border-radius: 5px;
  height: 91vh;
  margin-right: 5px;
  background-color: ${(props) => props.colors.cardColor};
  position: sticky;
  top: 85px;
  padding-top: 50px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.div<IProps>`
  color: ${(props) => props.colors.mainColor};
  margin: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  cursor: pointer;
  h4 {
    margin-top: 5px;
  }
`;

export const Tag = styled.h5`
  margin-top: 20px;
  margin-left: 60px;
`;

export const Feed = styled.div`
  grid-column: 5 / span 6;

  @media (max-width: 992px) {
    grid-column: 2 / span 10;
  }
`;

export const Article = styled.div<IProps>`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.colors.cardColor};
  &:not(.firstArticle) {
    margin-bottom: 5px;
    padding-bottom: 20px;
  }
  &.firstArticle {
    &:hover {
      background-color: ${(props) => props.colors.mainColor};
      cursor: pointer;
    }
  }
`;

export const HeaderFeed = styled.div<IProps>`
  display: flex;
  margin-bottom: 5px;
  position: fixed;
  width: 50%;
  padding: 5px 0;
  margin-top: -5px;
  z-index: 1;
  background-color: ${(props) => props.colors.background};

  @media (max-width: 992px) {
    width: 83.5%;
  }
`;

export const FakeInput = styled.button<IProps>`
  border: none;
  background-color: ${(props) => props.colors.background};
  border-radius: 100px;
  height: 30px;
  margin: 5px 10px;
  padding-left: 20px;
  text-align: left;
  color: ${(props) => props.colors.fontColor};
  width: 95%;
  &:focus {
    outline: none;
  }
`;

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  padding-top: 20px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100px;
  margin-right: 10px;
`;

export const ArticleFavorite = styled.div`
  margin-right: 20px;
  margin-top: -10px;
  color: #d1000c;
  cursor: pointer;
`;

export const ArticleBody = styled.div`
  margin-left: 80px;
  margin-top: 10px;
  cursor: pointer;
`;

export const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

export const ArticleTag = styled.div<IProps>`
  background-color: ${(props) => props.colors.background};
  border-radius: 100px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-top: 2px;
  text-align: center;
  width: fit-content;
`;

export const ArticleImages = styled.div<IImages>`
  display: grid;
  width: 90%;
  grid-template-columns: ${(props) =>
    `repeat(${props.images > 3 ? 3 : props.images}, 1fr)`};
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  margin-top: 5px;
`;
export const ArticleImage = styled.div<IImage>`
  border-radius: 5px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: black;
  &.image1 {
    width: 100%;
    height: 405px;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    background-image: url(${(props) => props.image});
  }
  &.image2 {
    width: 100%;
    height: 200px;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    background-image: url(${(props) => props.image});
  }
  &.image3 {
    width: 100%;
    height: 200px;
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
    background-image: url(${(props) => props.image});
  }
`;

export const Button = styled.button<IButton>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.target ? props.colors.mainColor : props.colors.cardColor};
  color: ${(props) => (props.target ? '#fff' : props.colors.fontColor)};
  padding: 0px 25px;
  outline: none !important;
  margin-right: 3px;
  &:hover {
    background-color: ${(props) => props.colors.disableColor};
    color: #fff;
  }
`;

export const ModalInputCon = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const ImagesContainer = styled.div`
  grid-column: 1 / span 8;
  border-right: 1px solid gray;
  padding-right: 10px;

  @media (max-width: 992px) {
    grid-column: 1 / span 12;
  }
`;

export const ArticleContent = styled.div<IImages>`
  grid-column: ${(props: any) =>
    props.images.length ? '9 / span 4' : '1 / span 12'};

  @media (max-width: 992px) {
    grid-column: 1 / span 12;
  }
`;

export const FavoriteBtn = styled.div`
  color: #d1000c;
  display: flex;
  align-items: center;
  margin: 0 18px;
`;

export const ShowImage = styled.div<IImage>`
  border-radius: 5px;
  background-color: black;
  background-image: url(${(props) => props.image});
  margin: 0 auto;
  height: 800px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (max-width: 992px) {
    height: 300px;
  }
`;

export const Input = styled.input<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  width: 79%;
  padding: 5px 10px;
  &:focus {
    outline: none;
  }
`;

export const PostBtn = styled.button<IProps>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.colors.mainColor};
  color: #fff;
  padding: 0 10px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

export const Comment = styled.div<IProps>`
  margin: 10px 20px 0 40px;
  display: flex;
`;

export const HideModal = styled.div`
  margin-top: -50px;
  color: #36c8d8;
  cursor: pointer;
  @media (max-width: 992px) {
    margin-top: -20px;
  }
`;

export const Time = styled.p`
  margin-top: -5px;
  opacity: 0.8;
  font-size: 12px;
`;

export const CommentBody = styled.div<IProps>`
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.fontColor};
  border-radius: 5px;
  width: fit-content;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

export const AvartarComment = styled.img`
  border: none;
  border-radius: 50px;
  width: 35px;
  height: 35px;
`;
