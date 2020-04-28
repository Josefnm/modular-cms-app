export default {
  baseline: '8px',
}

const size = {
  mobile: '500px',
  tablet: '768px',
  desktop: '2560px',
}

export const deviceSizes = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
}
/*
  @media ${deviceSizes.mobile} {
    display: flex;
  }
 */
