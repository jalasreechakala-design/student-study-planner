import { useState } from "react";

function Login({ setPage, setIsLoggedIn,setUser, }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    const response = await fetch(
      "https://student-study-planner-qpdr.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Login Successful");
    
      console.log("USER:", data.user);
setUser(data.user);
      setIsLoggedIn(true);
      setPage("dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h1>🔐 Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={loginUser}>
        Login
      </button>

      <br />
      <br />

      <p>Don't have an account?</p>

      <button onClick={() => setPage("register")}>
        Register
      </button>
    </div>
  );
}

export default Login;