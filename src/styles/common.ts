import { css } from '@emotion/react'

const diff = [1, 2, 3, 4, 5]

export default css`
  .d-flex {
    display: flex;
  }
  
  ${diff.map((item: number) => `
    .mt-${item} { margin-top: ${item * 4}px; }
    .mb-${item} { margin-bottom: ${item * 4}px; }
    .ml-${item} { margin-left: ${item * 4}px; }
    .mr-${item} { margin-right: ${item * 4}px; }
    .ma-${item} { margin: ${item * 4}px; }
    
    .pt-${item} { padding-top: ${item * 4}px; }
    .pb-${item} { padding-bottom: ${item * 4}px; }
    .pl-${item} { padding-left: ${item * 4}px; }
    .pr-${item} { padding-right: ${item * 4}px; }
    .pa-${item} { padding: ${item * 4}px; }
  `)}
`
