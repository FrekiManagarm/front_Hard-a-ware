import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { getCookie, TOKEN_COOKIE, USER_COOKIE } from '../helpers/session';
import redirect from '../helpers/redirect';
import fetch from 'isomorphic-unfetch';
import { getUserByToken, withData } from '../helpers/restriction';


export const AuthContext = React.createContext();

const addItem = (key, value = '') => {
  if (key) Cookies.set(key, value, { expires: 7 }); // secure true à remettre lors de la prod
};

const clearItem = key => {
  Cookies.remove(key);
};

const isValidToken = () => {
  const token = Cookies.get(TOKEN_COOKIE);
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};



const AuthProvider = props => {

  const router = useRouter(); 
  const { locale } = router;
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(!isValidToken());
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [apiErrorMessage, setApiErrorMessage] = useState([]);

  //console.log(loggedIn, 'loggedIn');

  const getAuthUser = async () => {
    const { user } = await withData();
    setUser(user);
    return user;
  }

  useEffect(() => {
    setLoggedIn(isValidToken());
    getAuthUser();
  } , []);
  

  
  const signIn = (params, redirectionDatas) => { 
    //console.log(params);
      return fetch(`${process.env.SERVER_API}/api/login`, 
        {
          method: 'POST',
          // Authorization: `Bearer ${token}`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(params),
        },
        )
        .then(response => {
          if(!response.ok) {
            response.json()
            .then(json => {
              // console.log(json.message, 'return api signin')
              setApiErrorMessage(json.message);
            })
          }
          return response.json()
        })
        .then(json => {
            if (json.token) {
              let user = json.user;
              let token = json.token;
              setUser(user);
              setToken(token);
              addItem(TOKEN_COOKIE, token);
              addItem(USER_COOKIE, user);
              setLoggedIn(true);
              setApiErrorMessage(null);

              if (redirectionDatas.next !== undefined) {
                const nextRoute = redirectionDatas.next;
                delete redirectionDatas.next;
                router.push({ pathname: decodeURIComponent(nextRoute), query: redirectionDatas, locale: locale }); 
              } else {
                router.push({ pathname: '/', locale: locale});
              }
              return json;
            } 
        })
        .catch(error => {
          return error.message
        });
  };

  const signUp = (params, redirectionUrl, locale) => {

    //console.log('url',redirectionUrl)
    //console.log('locale',locale)

    return fetch(`${process.env.SERVER_API}/api/register`, 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(params),
        },
        )
        .then(response => {
          if(response.status === 422) {
            setApiErrorMessage("User already exists");
          }
          return response.json()  
        })
        .then(json => {
            if (json.token) {
            let user = json.user;
            let token = json.token;
            setUser(user);
            setToken(token);
            addItem(TOKEN_COOKIE, token);
            addItem(USER_COOKIE, user);
            setLoggedIn(true);
            setApiErrorMessage(null);
            router.push({pathname: redirectionUrl, locale: locale});
          } 
        })
        .catch(error => {
          //console.log("error:"+ error.message);
        });
  };

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem(TOKEN_COOKIE, token);
    addItem(USER_COOKIE, user);
    setLoggedIn(true);
    router.push('/', '/', {locale: locale})
  };

  const forgetPass = params => {
    //console.log(params, 'forget password form Props');
  };
  const changePass = params => {
    //console.log(params, 'change password form Props');
  };

  const logOut = () => {

    fetch(`${process.env.SERVER_API}/api/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${getCookie(TOKEN_COOKIE)}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    })
      .then(response => {
        if(response.status == 200) {
          // console.log('logged out');
          clearItem(TOKEN_COOKIE);
          clearItem(USER_COOKIE);
          setLoggedIn(false);
          setUser({});
          setToken(null);
          router.push({ pathname: '/', locale: locale});
        }
      });
  };

  

  

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        loggedOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        router,
        user,
        token,
        apiErrorMessage,
        setApiErrorMessage,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;