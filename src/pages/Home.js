import React, { useEffect, useReducer } from 'react';
import { Container, Jumbotron } from 'reactstrap';

// commponents
import Logo from '../components/logo';
import Projects from '../components/ProjectList';

import { projectReducer, initialState } from '../reducers/project';
import { getProjects } from '../action/project';

const Home = () => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  useEffect(()  => {
    dispatch(getProjects(dispatch));
  }, []);

  return (
    <div className="home">
      <Logo />
      <Jumbotron fluid>
        <Container className="dashboard">
          <div className="center d-flex flex-column">
            <div className="add-project center">
              <i className="fa fa-plus fa-2x"></i>
            </div>
            <h3 className="my-4">Create a project</h3>
          </div>

          <div className="projects mt-5">
            <h1 className="py-5"> My projects</h1>
            <Projects { ...state}/>
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home;