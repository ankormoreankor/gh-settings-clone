import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routers";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
