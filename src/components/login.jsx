import { useState } from "react";
import { users } from "../utils/data";

const Login = ({ show, toggleShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    
    const user = users.find(u => u.username == username && u.password == password);
    if(user){
      setError(false);
      localStorage.setItem("user", JSON.stringify(user));
    }else{
      setError(true)
    }
    
  };
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } bg-opacity-85 w-full h-screen fixed top-0 bottom-0 start-0 end-0 bg-black justify-center items-center`}
    >
      <form
        onSubmit={formSubmit}
        className="relative w-[400px] flex gap-5 justify-center bg-black border rounded-md px-5 py-10 border-slate-500 flex-col"
      >
        <button
          className="absolute top-1 end-4 text-4xl"
          onClick={() => toggleShowLogin(false)}
          type="button"
        >
          &times;
        </button>
        <h3 className="text-3xl text-center mb-5">Log In</h3>
        {error && (
          <p className="text-red-500 text-center">
            Username yoki password xato!
          </p>
        )}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
