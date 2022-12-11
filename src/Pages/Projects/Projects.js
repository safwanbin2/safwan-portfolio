import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        fetch(`Projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    console.log(projects)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-10'>
            {
                projects && projects.map(project => <Project
                    key={project._id}
                    project={project}
                ></Project>)
            }
        </div>
    );
};

export default Projects;