import { css } from '@emotion/react'

const diff = [0, 1, 2, 3, 4, 5]

export default css`
  .fill {
    &.width { width: 100%; }
    &.height { height: 100%; }
  }

  .d-flex {
    display: flex;
  }
  
  ${diff.map((item: number) => `
    .mt-${item} { margin-top: ${item * 5}px; }
    .mb-${item} { margin-bottom: ${item * 5}px; }
    .ml-${item} { margin-left: ${item * 5}px; }
    .mr-${item} { margin-right: ${item * 5}px; }
    .ma-${item} { margin: ${item * 5}px; }
    
    .pt-${item} { padding-top: ${item * 5}px; }
    .pb-${item} { padding-bottom: ${item * 5}px; }
    .pl-${item} { padding-left: ${item * 5}px; }
    .pr-${item} { padding-right: ${item * 5}px; }
    .pa-${item} { padding: ${item * 5}px; }
  `)}
`
