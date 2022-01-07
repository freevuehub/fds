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
    font-size: 16px;
    font-family: 'nanumsquare';
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'GmarketSans';
    font-weight: 700;
    color: ${theme.color.text};
    transition: color .3s;
    line-height: 1.25;
  }
  h1 { font-size: 2.2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.1rem; }
  h4 { font-size: 1rem; }
  div {
    color: ${theme.color.text};
  }
  p {
    font-weight: 400;
    font-size: .85rem;
    line-height: 1.7;
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
    padding: 0.1rem 0.3rem;
    color: ${theme.mode === 'dark' ? theme.common.primary : '#325355'};
    border-radius: 3px;
  }
  blockquote {
    margin: 2rem 0px;
    padding: 1rem;
    background: rgb(241, 241, 239);
    border-left: 4px solid #6bb3b8;
    p {
      margin: 0;
      color: #335658;
      font-size: 16px;
      padding: 0;
    }
  }
`
