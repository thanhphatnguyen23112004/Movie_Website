import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./routes"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.page
              if(!route.path) route.path = '/notFound'
              return (
                <Route key={index} path={route.path} element={<DefaultLayout> <Page /></DefaultLayout>} />
              )
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

export default App
