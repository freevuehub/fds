import React, { useState } from 'react'
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react'
import { common, font, reset, theme } from '~/styles'
import { TypeThemeMode } from '../'

const initialThemeMode: TypeThemeMode = 'light'

export const ThemeContext = React.createContext<{ mode: TypeThemeMode, setMode: any }>({
  mode: initialThemeMode,
  setMode: null,
})

export const ThemeProvider: React.FC = (props) => {
  const [mode, setMode] = useState<TypeThemeMode>(initialThemeMode)

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <EmotionThemeProvider
        theme={{
          mode: mode,
          common: theme.common,
          color: theme.color[mode],
          style: theme.style,
        }}
      >
        <Global styles={[font, reset, common]} />
        {props.children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
