import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Projects></Projects>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/skills',
                element: <Skills></Skills>,
            }
        ]
    }
])