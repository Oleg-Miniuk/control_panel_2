/* eslint-disable */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, space, position, border } from '@core/utils/mixin';

const defaultPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

const Box = styled.div`
  position: ${props => props.position || 'static'};
  display: ${props => props.display || 'block'};
  box-sizing: border-box;
  ${position};
  ${space};
  ${size};
  ${border};
  word-wrap: break-word;
  text-align: ${props => props.textAlign};
  cursor: ${props => props.cursor};
  background-color: ${props => props.backgroundColor};
  opacity: ${props => props.opacity};
  overflow: ${props => props.overflow};
  box-shadow: ${props => props.boxShadow};
`;

Box.propTypes = {
  margin: defaultPropTypes,
  m: defaultPropTypes,
  my: defaultPropTypes,
  mx: defaultPropTypes,
  mt: defaultPropTypes,
  mb: defaultPropTypes,
  mr: defaultPropTypes,
  ml: defaultPropTypes,
  padding: defaultPropTypes,
  p: defaultPropTypes,
  py: defaultPropTypes,
  px: defaultPropTypes,
  pt: defaultPropTypes,
  pb: defaultPropTypes,
  pr: defaultPropTypes,
  pl: defaultPropTypes,

  width: defaultPropTypes,
  w: defaultPropTypes,
  height: defaultPropTypes,
  h: defaultPropTypes,
  overflow: defaultPropTypes,
  opacity: defaultPropTypes,

  textAlign: defaultPropTypes,
  top: defaultPropTypes,
  left: defaultPropTypes,
  bottom: defaultPropTypes,
  right: defaultPropTypes,
  cursor: defaultPropTypes,
  boxShadow: PropTypes.string
};

Box.defaultProps = {
  margin: null,
  m: null,
  my: null,
  mx: null,
  mt: null,
  mb: null,
  mr: null,
  ml: null,
  padding: null,
  p: null,
  py: null,
  px: null,
  pt: null,
  pb: null,
  pr: null,
  pl: null,

  width: null,
  w: null,
  height: null,
  h: null,
  overflow: 'visible',
  opacity: '1',

  textAlign: 'left',
  top: null,
  bottom: null,
  right: null,
  left: null,

  cursor: null,

  border: 'none',
  backgroundColor: 'none',
  borderRadius: 0,
  boxShadow: null
};

export default Box;
