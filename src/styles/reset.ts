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
    height: 100vh;
    width: 100vw;
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
  div {
    color: ${theme.color.text};
  }
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
  mark {
    background-color: rgba(135,131,120,0.15);
    padding: 3px 5px;
    color: ${theme.mode === 'dark' ? theme.common.primary : '#325355'};
    border-radius: 3px;
  }
  blockquote {
    border-radius: 3px;
    background: rgb(241, 241, 239);
    padding: 16px 16px 16px 12px;
    margin: 0 20px;
    border-left: 5px solid #6bb3b8;
    p {
      color: #335658;
      font-size: 16px;
      padding: 0;
    }
  }
`
