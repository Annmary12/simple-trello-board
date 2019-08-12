import http from '../helpers/http';

export const getProject = () => (
  http.get('/projects')
)
