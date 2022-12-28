import Router from 'next/router';
import { getCookie, TOKEN_COOKIE, USER_COOKIE } from './session';
import GetAPIData from './get_api_data';
import redirect from './redirect';

export function isAuthenticated(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  // if (isLoggedIn) {
  //   redirect(context, '/');
  // }
  return { isLoggedIn };
}

export function secretPage(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      Router.replace('/login');
    }    
  }
  return { isLoggedIn };
}

export const getUserByToken = async (token) => {
  const locale = 'fr';
  const apiUrl = [
    {
      name: 'user',
      endpoint: `${process.env.SERVER_API}/api/get-user`,
    },
  ];
  const response = await GetAPIData(apiUrl, locale, token);
  // console.log(response, 'response get user')
  if (response) {
      return await response[0].data.user;
  }
}

export async function withData(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  let user = {};
  
  if(isLoggedIn) {
    user = await getUserByToken(token);
  }

  return { isLoggedIn, user, token };
}

export function isAuthorized(resourceOwnerId, locale) {
  const { user, isLoggedIn } = withData();
  const userObj = JSON.parse(user);
  let authorized = false;

  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      Router.replace(`/login`);
    }
  } else {
    if (resourceOwnerId == userObj.id) {
      authorized = true;
    } else {
      authorized = false;
    }
  }
  return { authorized };
}

export function isLoggedInOrLogThenRedirect(resourceOwnerId = null, locale = 'fr') {
  const { user, isLoggedIn } = withData();
  const userObj = (user && (Object.keys(user).length !== 0) && (user.constructor === Object)) ? JSON.parse(user) : {};
  let authorized = false;

  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      // Redirection a tester ??
      const nextLocation = window.location.pathname ?? '/';
      Router.replace(`${process.env.SERVER_FRONT}/login?next=${nextLocation}`);
    }
  } else {
    if (resourceOwnerId == userObj?.id) {
      authorized = true;
    } else {
      authorized = false;
    }
  }
  return { authorized };
}