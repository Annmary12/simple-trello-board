import React from 'react';

import Card from './Card';

const ProjectList = ({ projects }) => (
  <div className="row">
    <div className="col-md-6 pb-4">
      <Card title="Weconnect">
        Connects business together
      </Card>
    </div>
    <div className="col-md-6">
      <Card title="Weconnect" type="private">
        Connects business together
      </Card>
    </div>
    <div className="col-md-6">
      <Card title="Weconnect">
        Connects business together
      </Card>
    </div>
    <div className="col-md-6">
      <Card title="Weconnect" type="private">
        Connects business together
      </Card>
    </div>

  </div>
)

export default ProjectList;