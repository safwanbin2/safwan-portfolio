import { createBrowserRouter } from "react-router-dom";
import InnerLayout from "../Layouts/InnerLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import BLog from "../Pages/Blog/BLog";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
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
            },
        ]
    },
    {
        path: '/l2',
        element: <InnerLayout></InnerLayout>,
        children: [
            {
                path: '/l2/projects/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: async ({ params }) => {
                    const res = await fetch(`Projects.json`)
                    const data = await res.json();
                    const project = data.filter(d => d._id === parseInt(params.id));
                    return project;
                }
            },
            {
                path: '/l2/blog',
                element: <BLog></BLog>
            },
            {
                path: '/l2/about',
                element: <About></About>
            }
        ]
    }
])