import { css } from 'styled-components';

const getMargin = (props) => {
  if (props.margin) return props.margin;
  if (props.m) return props.m;

  if (props.my) return `${props.my} 0 ${props.my} 0`;
  if (props.mx) return `0 ${props.mx} 0 ${props.mx}`;

  const marginT = props.mt ? props.mt : '0';
  const marginB = props.mb ? props.mb : '0';
  const marginR = props.mr ? props.mr : '0';
  const marginL = props.ml ? props.ml : '0';

  return `${marginT} ${marginR} ${marginB} ${marginL}`;
};

const getPadding = (props) => {
  if (props.padding) return props.padding;
  if (props.p) return props.p;

  if (props.py) return `${props.py} 0 ${props.py} 0`;
  if (props.px) return `0 ${props.px} 0 ${props.px}`;

  const paddingT = props.pt ? props.pt : '0';
  const paddingB = props.pb ? props.pb : '0';
  const paddingR = props.pr ? props.pr : '0';
  const paddingL = props.pl ? props.pl : '0';

  return `${paddingT} ${paddingR} ${paddingB} ${paddingL}`;
};

const size = css`
  width: ${props => props.width || props.w || 'auto'};
  min-width: ${props => props.minWidth || props.minw || 'initial'};
  max-width: ${props => props.maxWidth || props.maxw || 'none'};
  height: ${props => props.height || props.h || 'auto'};
  min-height: ${props => props.minHeight || props.minh || 'auto'};
  max-height: ${props => props.maxHeight || props.maxh || 'none'};
`;

const space = css`
  padding: ${props => getPadding(props)};
  margin: ${props => getMargin(props)};
`;

const position = css`
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
`;

const border = css`
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
`;

// @TODO delete after remake withLabel
const text = css`
  font-size: ${props => props.fontSize || '13px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-style: ${props => props.fontStyle || 'normal'};
  line-height: ${props => props.lineHeight || '1'};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
`;

export { space, size, position, border, text };
