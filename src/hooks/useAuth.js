import axios from "axios";
import { useState, useEffect } from "react";
import axiosConfig from "../Utils/axiosConfig";
import { baseURL } from "../baseURL"

const useAuth = () => {
  const [user, setUser] = useState({});
  const [darkmode, setdarkmode] = useState('light');
  const [tempEmail, setTempEmail] = useState({});
  const [authError, setAuthError] = useState("");
  const [userNameValidation, setUserNameValidation] = useState({
    success: "",
    error: "",
  });

  const [authLoader, setAuthLoader] = useState(false);

  // Sign Up the user
  const handleSignUpUser = (
    email,
    fullName,
    username,
    password,
    confirmPassword,
    navigate
  ) => {
    setAuthLoader(true);
    if (userNameValidation.success === "Username is Available") {
      axios
        .post(`${baseURL}/api/auth/register`, {
          email,
          fullName,
          username,
          password,
          confirmPassword,
        })
        .then((res) => {
          //console.log(res.data);
          if (res.data.statuscode === 200) {
            setTempEmail({ email: email });
            navigate(`/authentication/email-verification/${email}/`);
          }
        })
        .catch((err) => {
          setAuthError(err.response.data.message);
        })
        .finally(() => setAuthLoader(false));
    } else {
      setAuthLoader(false);
      return;
    }
  };

  // Sign in the user
  const handleSignInUser = (
    name,
    password,
    navigate,
    location,
    callbackURL
  ) => {
    setAuthError("");
    setAuthLoader(true);

    axios
      .post('https://dummyjson.com/auth/login', {
        username: name,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          navigate('/');
        }
      })
      .catch((err) => {
        setAuthError(err.response.data.message);
      })
      .finally(() => setAuthLoader(false));
  };

  const handledarkmode = (type) => {
    setdarkmode(type)
  }

  useEffect(() => {
    if (user?.token) {
      localStorage.setItem("users", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("users"));

    if (localUser?.token) {
      setUser(localUser);
    } else {
      setUser({});
    }
  }, []);

  // Log out the user
  const handleLogOut = (navigate) => {
    setUser({});
    localStorage.removeItem("users");
    if (navigate) {
      navigate(`/`);
    }
  };


  return {
    user,
    darkmode,
    authLoader,
    userNameValidation,
    authError,
    handleSignUpUser,
    handleSignInUser,
    handleLogOut,
    handledarkmode
  };
};

export default useAuth;
