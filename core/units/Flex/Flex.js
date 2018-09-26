import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from '@core/units/Box/Box';

const Flex = styled(Box)`
  display: ${props => !props.inline ? 'flex' : 'inline-flex'};
  flex-direction: ${props => props.column
    ? props.reverse ? 'column-reverse' : 'column'
    : props.reverse ? 'row-reverse' : 'row'};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

Flex.propTypes = {
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.string,
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ]),
  align: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline'
  ]),
  wrap: PropTypes.bool,
  inline: PropTypes.bool
};

Flex.defaultProps = {
  column: false,
  reverse: false,
  justify: 'flex-start',
  align: 'stretch',
  height: 'auto',
  wrap: null,
  inline: false
};

export default Flex;
