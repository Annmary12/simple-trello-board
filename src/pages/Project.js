import React, { useEffect, useState } from 'react';

// third-party libraries
import { Container , Jumbotron } from 'reactstrap';

// actions
import { getProject } from '../action/project';

// components
import Alert from '../components/Alert';

const Project = (props) => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const { projectId } = props;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await getProject(projectId);
        setProject(result.data)
      } catch(error) {
        setIsError('Project not found!')
      }
      setIsLoading(false);
    }
    fetchData();
  }, [props])

  return (
    <Jumbotron fluid>
      <Container>
        { isError && <Alert content={isError} color="danger"/>}
        { isLoading ? 'Loading...' : project.name }
      </Container>
    </Jumbotron>
  )
}

export default Project;