import fetch from "isomorphic-unfetch";
import shuffle from "lodash/shuffle";
import Cookies from "js-cookie";
// import { TOKEN_COOKIE, USER_COOKIE, getCookie, getCookieFromBrowser } from "./session";

const FetchAPIData = (url, locale, token) => {

    // const isNode = typeof (window) === "undefined";
    // const nodeOptions = !isNode ? {} : {
    //   agent: new (require("https").Agent)({
    //     rejectUnauthorized: false
    //   }),
    //   headers: {
    //     "Authorization": "Bearer " + token,
    //     "Accept-Language": locale
    //     "Content-Type": "application/json",
    //     "Cookie": token
    //   }
    // };

  const settings = {
    method: "GET",
    mode: "no-cors",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
    // ...nodeOptions
  };

  return fetch(url, settings)
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
};

export const ProcessAPIData = (apiData) => {
  let fetchData = {};
  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : "";
    });
  }
  const data = fetchData ? fetchData.data : [];
  return data;
};

export const SearchedData = (processedData) => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = shuffle(processedData.slice(0, randNumber));
  return data;
};

export const SearchStateKeyCheck = (state) => {
  for (var key in state) {
    if (
      state[key] !== null &&
      state[key] != "" &&
      state[key] != [] &&
      state[key] != 0 &&
      state[key] != 100
    ) {
      return true;
    }
  }
  return false;
};

export const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

const GetAPIData = async (apiUrl, locale, token = null) => {
  const promises = apiUrl.map(async (repo) => {
    const api = repo.endpoint;
    const response = await FetchAPIData(api, locale, token);
    return {
      name: repo.name,
      data: await response,
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

export default GetAPIData;