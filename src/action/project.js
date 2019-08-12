import { projectContants } from '../constants/project.contants';
import { Success, Failure } from '../constants/action';

import http from '../helpers/http';

export const getProjects = async (dispatch) => {
  try {
    const result = await http.get('/projects');
    dispatch(Success(projectContants.PROJECT_SUCCESS, result.data))
  } catch (error) {
    dispatch(Failure(projectContants.PROJECT_FAILURE, error))
  }
}

