import { projectContants } from '../constants/project.contants';

export const initialState = {
  projects: [],
  loading: false,
  error: ''
}

 export const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case projectContants.PROJECT_REQUEST:
      return {
        ...state,
        loading: action.bool
      }

    case projectContants.PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload
      }

    case projectContants.PROJECT_FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
