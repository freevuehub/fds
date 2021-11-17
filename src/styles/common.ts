import { css, Theme } from '@emotion/react'

const diff = ['auto', 0, 1, 2, 3, 4, 5]
const itemsRange = ['center', 'flex-start', 'flex-end']
const contentRange = ['center', 'space-around', 'space-between']
const directions = ['column', 'row']
const overflow = ['hidden', 'auto', 'scroll']

export default (theme: Theme) => css`
  .fill {
    &.width { width: 100%; }
    &.height { height: 100%; }
  }
  
  .relative {
    position: relative;
    transform: translate(0);
  }
  .overlay {
    background-color: ${theme.color.app}70;
    backdrop-filter: blur(10px);
  }

  .d-flex {
    display: flex;
  }
  
  .flex-1 {
    flex: 1;
  }
  
  .flex-wrap {
    flex-wrap: wrap;
  }
  
  ${overflow.map((item) => `
    .x-${item} { overflow-x: ${item}; }
    .y-${item} { overflow-y: ${item}; }
  `)}
  ${directions.map((item) => `
    .dir-${item} { flex-direction: ${item}; }
  `)}
  ${itemsRange.map((item) => `
    .ji-${item} { justify-items: ${item}; }
    .ai-${item} { align-items: ${item}; }
  `)}
  ${contentRange.map((item) => `
    .jc-${item} { justify-content: ${item}; }
    .ac-${item} { align-content: ${item}; }
  `)}
  
  ${diff.map((item: number | string) => typeof item === 'number'
    ? `
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
    `
    : `
      .mt-${item} { margin-top: ${item}; }
      .mb-${item} { margin-bottom: ${item}; }
      .ml-${item} { margin-left: ${item}; }
      .mr-${item} { margin-right: ${item}; }
      .ma-${item} { margin: ${item}; }
      
      .pt-${item} { padding-top: ${item}; }
      .pb-${item} { padding-bottom: ${item}; }
      .pl-${item} { padding-left: ${item}; }
      .pr-${item} { padding-right: ${item}; }
      .pa-${item} { padding: ${item}; }
    `
  )}
`
