

import { SplashScreen, Tabs } from 'expo-router'
import { useEffect } from 'react'

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync()

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return <Tabs/>
  
}
