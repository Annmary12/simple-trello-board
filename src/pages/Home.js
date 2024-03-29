import React, { useEffect, useReducer, useState } from 'react';
import { Container, Jumbotron, Input, FormGroup, Label } from 'reactstrap';

// commponents
import Logo from '../components/logo';
import Projects from '../components/ProjectList';
import Modal from '../components/Modal';

import { projectReducer, initialState } from '../reducers/project';
import { getProjects, createProject } from '../action/project';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [newProject, setNewProject] = useState({name: '', description: '', type: ''})
  const [state, dispatch] = useReducer(projectReducer, initialState);

  useEffect(() => {
    getProjects(dispatch);
  }, []);

  const toggleModal = () => (setIsOpen(!isOpen))

  const handleChange = (event) => setNewProject({...newProject, [event.target.name] : event.target.value});

  const handleSubmit = async() => {
    await createProject(newProject, dispatch);

    if(!state.error) {
      toggleModal();
    }
  }

  return (
    <div className="home">
      <Logo />
      <Jumbotron fluid>
        <Modal toggleModal={toggleModal} isOpen={isOpen} modalTitle='Create a project' extraFunc={handleSubmit}>
          <div className="mt-4">
            <Input placeholder="Project Name" name="name" onChange={handleChange} />
            <Input type="textarea" placeholder="Enter description" col="3" name="description" onChange={handleChange}/>
            <div>
              <FormGroup tag="fieldset">
                <span className="pb-5">Project privacy</span>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="type" onChange={handleChange} value="private"/>
                      Private
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="type" onChange={handleChange} value="public"/>
                      Public
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
          </div>
        </Modal>

        <Container className="dashboard">
          <div className="center d-flex flex-column" onClick={toggleModal}>
            <div className="add-project center">
              <i className="fa fa-plus fa-1x"></i>
            </div>
            <h4 className="my-4">Create a project</h4>
          </div>

          <div className="projects mt-5">
            <h3 className="py-2"> My projects</h3>
            <Projects {...state} />
          </div>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home;