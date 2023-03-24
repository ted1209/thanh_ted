import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { IColors } from '../../interfaces';

interface IColor {
  colors: IColors;
}

export const CONTAINER = styled.div`
  display: flex;
  /* background: #EBEBEB; */
  height: auto;
  width: 100%;
  padding-top: 85px;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid black; */
  border-radius: 10px;
  /* -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4); */

  @media (min-width: 786px) {
    width: 65%;
  }

  h4 {
    color: #36c8d8;
    padding-bottom: 0.5em;
  }
  h3 {
    color: #36c8d8;
    padding-top: 1em;
    padding-bottom: 2em;
  }
`;

export const PREVIEW = styled.div<IColor>`
  background: ${(props: any) => props.colors.cardColor};
  color: ${(props: any) => props.colors.fontColor};
  flex: 40%;
  margin-right: 5px;
  border-radius: 10px;
  padding: 50px;

  img {
    width: 200px;
    border-radius: 50%;
    padding-top: 2em;
    padding-bottom: 2em;
  }
`;

export const SETTING = styled.div<IColor>`
  background: ${(props: any) => props.colors.cardColor};
  color: ${(props: any) => props.colors.fontColor};
  flex: 60%;
  border-radius: 10px;
  padding-top: 50px;
  .error {
    border: 2px solid #ff6565;
  }

  .error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: absolute;
    font-size: 0.8em;
  }

  .form-group {
    margin-bottom: 3em;
  }

  input,
  textarea {
    background: #ebebeb;
  }

  .btn-group {
    display: block;
    text-align: right;
    padding-bottom: 2.5em;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px 12px;
  outline: none;
`;

export const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 1em;
  padding-bottom: 1em;

  @media (min-width: 786px) {
    width: 80%;
  }
`;

export const BUTTON = styled(Button)`
  background: #36c8d8;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  justify-content: left;
  &:hover {
    background: #d94c20;
  }
`;
export const ButtonCancel = styled(Button)`
  background: #ebebeb;
  border: none;
  margin-right: 10px;
  font-size: 1.2em;
  font-weight: 400;
  justify-content: right;
  &:hover {
    background: #d94c20;
  }
`;
