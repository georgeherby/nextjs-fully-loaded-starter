"use client";

import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <div className={'flex space-x-10'}>
      <button key={'light-theme-toggle'} onClick={() => setTheme('light')}>Light</button>
      <button key={'dark-theme-toggle'} onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}

export default ThemeToggle
