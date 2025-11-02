"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
function ThemeToggler() {
    const theme = useTheme()
    const toggleTheme = () => {
        theme.setTheme(theme.resolvedTheme === "dark" ? "light" : "dark")
    }
    return (
        <div>
            <Button variant="ghost" size="icon" className='cursor-pointer' onClick={toggleTheme}>
                {theme.resolvedTheme != "dark" ? <MoonStar size={30}/> : <Sun size={30}/>}
            </Button>
        </div>
    )
}

export default ThemeToggler