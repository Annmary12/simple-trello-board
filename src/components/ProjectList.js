import React from 'react';

import Card from './Card';

const ProjectList = ({ projects }) => (
  <div className="row">
    { projects && projects.map(project => (
      <div className="col-md-6 pb-4 project-card" key={project.id}>
        <Card title={project.name} type={project.type}>
          {project.description}
        </Card>
      </div>
    ))}
  </div>
)

export default ProjectList;