import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Statics from "./Components/Statics/Statics";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz></Quiz>,
        },
        { path: "" },
        { path: "/static", element: <Statics></Statics> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
