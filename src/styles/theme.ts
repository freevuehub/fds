import dayjs from 'dayjs'

const secondaryColor = (primary: string) => {
  const [red, green, blue] = primary.split(',').map((item) => Number(item))

  const newRed = (red + 90) > 255 ? 255 : red + 90
  const newGreen = (green + 47) > 255 ? 255 : green + 47
  const newBlue = (blue + 41) > 255 ? 255 : blue + 41

  return `${newRed}, ${newGreen}, ${newBlue}`
}
const colorToHex = (color: number) => {
  const hex = color.toString(16)

  return hex.length === 1 ? `0${hex}` : hex
}
const convertRGBtoHex = (color: string) => {
  const [red, green, blue] = color.split(',').map((item) => Number(item))

  return `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`
}

export const pantone: any = {
  2022: ['102, 103, 171'],
  2021: ['147, 149, 151', '245, 223, 77'],
  2020: ['15, 76, 129'],
  2019: ['255, 111, 97'],
  2018: ['95, 75, 139'],
  2017: ['136, 176, 75'],
  2016: ['247, 202, 202', '147, 169, 209'],
  2015: ['150, 79, 76'],
  2014: ['173, 94, 153'],
  2013: ['0, 148, 115'],
  2012: ['221, 65, 36'],
}

export const light = {
  app: '#f4f7f8',
  content: '#ffffff',
  text: '#2c3e50',
  table: {
  th: '#263747',
    td: '#263747',
    background: '#32329005',
    border: '#D7E2EB',
  },
}
export const dark = {
  app: '#18191c',
  content: '#1E2023',
  text: '#ffffff',
  table: {
  th: '#263747',
    td: '#263747',
    background: '#32329005',
    border: '#D7E2EB',
  },
}

const currentYear = dayjs().format('YYYY')
const [first, second] = pantone[currentYear]
const primary = convertRGBtoHex(first)
const secondary = convertRGBtoHex(second || secondaryColor(first))

// 71b9c1
export const common = {
  primary: primary,
  secondary: secondary,
  white: '#ffffff',
  black: '#000000',
  grey: '#eaeaea',
}

export const style = {
  shadow: `0 5px 20px 0 rgba(0, 0, 0, 0.05)`
}

export const breakPoint = {
  notebook: 1460,
  ipadPro: 1160,
  ipad: 980,
  foldInner: 800,
  mobile: 640,
  foldFront: 360
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
