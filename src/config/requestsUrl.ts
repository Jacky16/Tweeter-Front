import environment from "./environment";

const { apiUrl } = environment;

const requestsUrl = {
  registerUser: `${apiUrl}/user/register`,
  loginUser: `${apiUrl}/user/login`,
};

export default requestsUrl;
