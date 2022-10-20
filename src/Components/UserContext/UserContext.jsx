import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export  const AuthContext = createContext();

const auth = getAuth(app)
const UserContext = ({children}) => {

    const [user, setUser] = useState({});
   //sign in with google
   const Provider = new GoogleAuthProvider(); 

   const googleSignUp = () =>{
    signInWithPopup(auth, Provider)
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        console.error(error)
    })
   }


   // sign in with google

    const signUpNewUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    // Sign Out method
    const logOut=()=>{
         signOut(auth)
         .then(()=>{
            alert("Successfully is log out")
         })
         .catch((error)=>{
            console.error(error)
         })
    }
    //
    useEffect(()=>{
       const unsubscriber = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscriber()
        }
    },[])
   const signInUser = (email , password) =>{
    return signInWithEmailAndPassword(auth,email, password)
   }
    const authInfo ={user,signUpNewUser,signInUser , logOut,googleSignUp}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;