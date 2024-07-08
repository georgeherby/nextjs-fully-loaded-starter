"use client";

import { useTheme } from 'next-themes'
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <div className={'flex space-x-10'}>
      {theme ==='dark' ? <Button variant="link" size="icon" onClick={() => setTheme('light')}><SunIcon className="h-4 w-4" /></Button> : null}
      {theme ==='light' ? <Button variant="link" size="icon" onClick={() => setTheme('dark')}><MoonIcon className="h-4 w-4" /></Button> : null}
    </div>
  )
}

export default ThemeToggle
