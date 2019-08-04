import React from 'react';

import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const CardComponent = ({ title, children, type}) => (
  <Card >
    <CardBody>
      <CardTitle className="text-monospace">
        { type && type === 'private'
         ? <i class="fa fa-lock pr-3"></i>
         : <i class="fa fa-globe pr-3"></i>
        }{ title }
      </CardTitle>
      <CardText className="pt-3 pl-4">
        { children }
      </CardText>
    </CardBody>
  </Card>
);

export default CardComponent;
