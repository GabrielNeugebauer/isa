import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import ProfileScreen from './components/ProfileScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleContinue = () => {
    setShowSplash(false)
  }

  return (
    <div className="app-container">
      {showSplash ? (
        <SplashScreen onContinue={handleContinue} />
      ) : (
        <ProfileScreen />
      )}
    </div>
  )
}

export default App
