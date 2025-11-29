import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  const CreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOutUser = () =>{
  setLoading(true);
    return signOut(auth)
  }




    const updateProfileInfo = (updateUser) =>
    updateProfile(auth.currentUser, updateUser);



    useEffect(() => {
      const unsubscribe = onAuthStateChanged (auth , currentUser =>{
        setLoading(false);;
        console.log(currentUser);
        setUser(currentUser);

      })



      return() =>{
        unsubscribe()
      }


    },[])





    
  const userInfo = {
    CreateNewUser,
    loading,
    updateProfileInfo,
    loginUser,
    logOutUser,
    user
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
