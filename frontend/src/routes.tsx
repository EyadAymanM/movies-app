import { createBrowserRouter } from "react-router-dom"
import Movies from "./pages/Movies"
import Search from "./pages/Search"

export const router = createBrowserRouter([
  { path: "/movies", element: <Movies /> },
  { path: "/movie/:id", element: <Movies /> },
  { path: "/search", element: <Search /> },
])
