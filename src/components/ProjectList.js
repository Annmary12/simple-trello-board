import React from 'react';

import Card from './Card';

const ProjectList = ({ projects }) => (
  <div className="row">
    { projects && projects.map(project => (
      <div className="col-md-6 pb-4 project-card" key={project.id}>
        <Card title={project.name} type={project.type}>
          Connects business together with {project.name}
        </Card>
      </div>
    ))}
  </div>
)

export default ProjectList;