export const light = {
  app: '#ffffff',
  content: '#ffffff',
  text: '#37352f',
  table: {
  th: '#263747',
    td: '#263747',
    background: '#32329005',
    border: '#D7E2EB',
  },
}
export const dark = {
  app: '#121212',
  content: '#1e1e1e',
  text: '#ffffff',
  table: {
  th: '#263747',
    td: '#263747',
    background: '#32329005',
    border: '#D7E2EB',
  },
}

export const common = {
  primary: '#71B9C1',
  white: '#ffffff',
  black: '#000000',
  grey: '#eaeaea',
}

export const style = {
  shadow: `4px 12px 30px 6px rgb(0 0 0 / 9%)`
}

export const breakPoint = {
  notebook: 1460,
  ipadPro: 1160,
  ipad: 980,
  foldInner: 800,
  mobile: 640,
  foldFront: 360
}

export const pantone = {
  2022: ['rgb(102, 103, 171)'],
  2021: ['rgb(147, 149, 151)', 'rgb(245, 223, 77)'],
  2020: ['rgb(15, 76, 129)'],
  2019: ['rgb(255, 111, 97)'],
  2018: ['rgb(95, 75, 139)'],
  2017: ['rgb(136, 176, 75)'],
  2016: ['rgb(247, 202, 202)', 'rgb(147, 169, 209)'],
  2015: ['rgb(150, 79, 76)'],
  2014: ['rgb(173, 94, 153)'],
  2013: ['rgb(0, 148, 115)'],
  2012: ['rgb(221, 65, 36)'],
}

export default {
  color: {
    light,
    dark,
  },
  common,
  style,
  breakPoint,
  pantone,
}
