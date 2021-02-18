import axios from "axios";

const RootPath = "http://localhost:3004/";
const OnlineRoot = "https://jsonplaceholder.typicode.com/";

/**
 *
 * @param { String } path uri path
 * @param { Boolean } root true = local root path, false = online root path. default true
 */
const Get = (path, root = true) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${RootPath}${path}`).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getNewsBlog = () => Get("posts?_sort=id&_order=desc", true);
const getComments = () => Get("comments", false);

const API = {
  getNewsBlog,
  getComments,
};

export default API;
