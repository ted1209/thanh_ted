import styled from 'styled-components/macro';

interface IImage {
  image: string;
}

export const Title = styled.h5`
  text-align: center;
`;

export const Input = styled.input`
  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
  outline: none;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: auto;
  height: 650px;
  gap: 5px;
`;

export const Image = styled.div<IImage>`
  background-image: ${(props: any) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 120px;
  cursor: pointer;
`;

export const MoreImages = styled.p`
  cursor: pointer;
  &:hover {
    color: #36c8d8;
  }
`;
