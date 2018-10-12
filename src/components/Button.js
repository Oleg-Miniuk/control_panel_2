import styled from 'styled-components';

const getColor = (type) => {
  if (type === 'info') {
    return 'rgb(172, 249, 251)';
  }
  if (type === 'secondary') {
    return 'rgb(223, 149, 39)';
  }
  if (type === 'alert') {
    return 'rgb(255, 0, 0)';
  }
  return 'rgb(172, 249, 251)';
};

const getActiveBackground = (type) => {
  if (type === 'info') {
    return '#2f6a90c9';
  }
  if (type === 'secondary') {
    return 'rgb(111, 77, 7)';
  }
  if (type === 'alert') {
    return '#ab1e1e91';
  }
  return '#2f6a90c9';
};

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: flex-start;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-color: ${props => getColor(props.type)};
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${props => getColor(props.type)};
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: ${props => getColor(props.type)};
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: ${props => getColor(props.type)};
  border-top-style: none;
  border-top-width: 0px;
  box-sizing: border-box;
  color: ${props => getColor(props.type)};
  cursor: pointer;
  font-family: Arial;
  font-size: 27.75px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 35px;
  letter-spacing: normal;
  line-height: 15.75px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline-color: ${props => getColor(props.type)};
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  position: relative;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  z-index: 2;
  -webkit-appearance: none;
  -webkit-border-image: none;
  border: 1px solid;
  background: rgba(6, 43, 45, 0.65);
  transition-duration: 0.25s;
  transition-delay: 0s;
  transition-property: all;
  transition-timing-function: ease-out;

  &:active {
    top: 1px;
    left: 1px;
    background: ${props => getActiveBackground(props.type)};
    transition-duration: 0s;
  }
`;

export default Button;
