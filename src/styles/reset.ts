import { css, Theme } from '@emotion/react'

export default (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html, body {
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-family: 'nanumsquare';
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'GmarketSans';
    font-weight: 700;
    color: ${theme.color.text};
    transition: color .3s;
  }
  ${[1, 2, 3, 4, 5, 6].map((item) => `
    h${item} {
      font-size: ${64 - (item * 10)}px;
      line-height: ${64 - ((item - 1) * 10)}px;
    }
  `)}
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${theme.color.text};
    font-family: 'nanumsquare';
    transition: color .3s;
  }
  table {
    border-collapse: collapse;
  }
  code {
    font-family: 'D2Coding';
    background-color: ${theme.color.content}50;
    color: ${theme.color.text};
    padding: 2px 4px;
  }
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
`
