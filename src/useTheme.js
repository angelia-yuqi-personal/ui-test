import {useState, useEffect} from 'react'
export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.theme)
  useEffect(() => {
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  console.log(theme)
  return [theme, setTheme]
}
