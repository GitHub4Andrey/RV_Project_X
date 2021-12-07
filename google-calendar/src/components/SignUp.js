import React, { useCallback } from "react";
import { withRouter , Redirect} from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>
            <form className="space-y-5" onSubmit={handleSignUp}>
            <div>
                <label className="block mb-1 font-bold text-gray-500">Email</label>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                />
            </div>
            <div>
                <label className="block mb-1 font-bold text-gray-500">Password</label>
                <input
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                />
            </div>
            <button 
                type="submit" 
                className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
            >
                Sign Up
            </button>
            <button 
                className="block w-full bg-green-400 hover:bg-green-300 p-4 rounded text-green-900 hover:text-green-800 transition duration-300"
            >
                Log in
            </button>
            </form>
        </div>
    </div>
  );
};

export default withRouter(SignUp);