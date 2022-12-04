import environment from "./environment";

const { apiUrl } = environment;

const requestsUrl = {
  registerUser: `${apiUrl}/user/register`,
  loginUser: `${apiUrl}/user/login`,
  getTweets: `${apiUrl}/tweets`,
  getTweetByCategory: `${apiUrl}/tweets/category`,
  getOneTweet: `${apiUrl}/tweets`,
  createTweet: `${apiUrl}/tweets/create`,
  deleteTweet: `${apiUrl}/tweets/delete`,
  updateTweet: `${apiUrl}/tweets/update`,
};

export default requestsUrl;
