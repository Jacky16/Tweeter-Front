import environment from "./environment";

const { apiUrl } = environment;

const requestsUrl = {
  registerUser: `${apiUrl}/user/register`,
};

export default requestsUrl;
