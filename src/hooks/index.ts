import { useContext } from 'react'
import { ThemeContext } from '~/provider'

type TypeTheme = 'light' | 'dark'

export const useThemeMode = (): [TypeTheme, Function] => {
  const { mode, setMode } = useContext(ThemeContext)

  const onChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return [mode, onChange]
}
