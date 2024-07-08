"use client";

import {useTheme} from 'next-themes'
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";

const ThemeToggle = () => {
  const {setTheme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={'flex space-x-10'}>
      {resolvedTheme === 'dark' ?
        <Button variant="link" size="icon" onClick={() => setTheme('light')}><MoonIcon
          className="h-4 w-4"/></Button>
        :
        resolvedTheme === 'light' ?
          <Button variant="link" size="icon" onClick={() => setTheme('dark')}><SunIcon
            className="h-4 w-4"/></Button>
          : null}
    </div>
  )
}

export default ThemeToggle
