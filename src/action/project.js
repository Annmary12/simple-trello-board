import { projectContants } from '../constants/project.contants';
import { Success, Failure } from '../constants/action';

import http from '../helpers/http';

export const getProjects = async (dispatch) => {
  try {
    const result = await http.get('/projects');
    dispatch(Success(projectContants.FETCH_PROJECTS, result.data))
  } catch (error) {
    dispatch(Failure(projectContants.PROJECT_FAILURE, error))
  }
}

export const createProject = async (projectDetail, dispatch) => {
  try {
    const result = await http.post('/projects', projectDetail);
    dispatch(Success(projectContants.ADD_PROJECT, result.data))
  } catch (error) {
    dispatch(Failure(projectContants.PROJECT_FAILURE, error))
  }
}

export const getProject = (projectId) => {
  return http.get(`/projects/${projectId}`);
}

