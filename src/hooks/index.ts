import { useContext } from 'react'
import { useTheme } from '@emotion/react'
import { ThemeContext } from '~/provider'

type TypeTheme = 'light' | 'dark'

export const useThemeMode = (): [TypeTheme, () => void] => {
  const { mode, setMode } = useContext(ThemeContext)

  const onChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return [mode, onChange]
}

export const useColorSet = () => {
  const theme = useTheme()

  return {
    common: theme.common,
    color: theme.color,
    pantone: theme.pantone,
  }
}

export const useBreakPoint = () => {
  const theme = useTheme()

  return theme.breakPoint
}
