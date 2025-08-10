'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  systemTheme: 'dark' | 'light'
  resolvedTheme: 'dark' | 'light'
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  systemTheme: 'light',
  resolvedTheme: 'light',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  attribute = 'class',
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('light')
  const [mounted, setMounted] = useState(false)

  // Get system theme preference
  const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light'
  }

  // Apply theme to document
  const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement
    const isDark =
      theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

    // Disable transitions temporarily if requested
    if (disableTransitionOnChange) {
      const css = document.createElement('style')
      css.appendChild(
        document.createTextNode(
          `* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }`
        )
      )
      document.head.appendChild(css)

      // Force reflow
      window.getComputedStyle(css).opacity
      document.head.removeChild(css)
    }

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    // Add new theme class
    if (attribute === 'class') {
      root.classList.add(isDark ? 'dark' : 'light')
    } else if (attribute === 'data-theme') {
      root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }
  }

  // Handle theme change
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    try {
      localStorage.setItem(storageKey, newTheme)
    } catch (e) {
      // Handle localStorage errors
    }
    applyTheme(newTheme)
  }

  // Initialize theme from localStorage or default
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme
      if (storedTheme) {
        setTheme(storedTheme)
      }
    } catch (e) {
      // Handle localStorage errors
    }
  }, [storageKey])

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setSystemTheme(getSystemTheme())

    // Set initial system theme
    setSystemTheme(getSystemTheme())

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [enableSystem])

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme)
  }, [theme, systemTheme])

  // Set mounted to true after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate resolved theme
  const resolvedTheme: 'dark' | 'light' =
    theme === 'system' ? systemTheme : theme

  const value = {
    theme,
    setTheme: handleThemeChange,
    systemTheme,
    resolvedTheme,
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider value={value}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeProviderContext.Provider>
    )
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}

// Theme toggle button component
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-10 w-10 items-center justify-center rounded-lg
        bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
        border border-gray-200 dark:border-gray-700
        shadow-sm hover:shadow-md
        transition-all duration-200 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        ${className}
      `}
      aria-label='Toggle theme'
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon for light mode */}
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
      </svg>

      {/* Moon icon for dark mode */}
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        }`}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
      </svg>
    </button>
  )
}

export default ThemeProvider
