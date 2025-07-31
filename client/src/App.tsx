import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import { ThemeProvider } from "./components/ui/theme-provider"
import DashBoard from "./pages/homeDashBoard/main"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <Header />
        <DashBoard />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
