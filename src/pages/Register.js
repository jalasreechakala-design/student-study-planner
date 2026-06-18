import { useState } from "react";

function Register({ setPage }) {
  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const registerUser = async () => {
    if (
  username.trim() === "" ||
  email.trim() === "" ||
  password.trim() === ""
) {
  alert("Please fill all fields");
  return;
}

if (password.length < 6) {
  alert("Password must be at least 6 characters");
  return;
}

    const response = await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    );

    const data = await response.text();

alert(data);

setUsername("");
setEmail("");
setPassword("");

setPage("login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📝 Register</h1>

     <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={registerUser}>
        Register
      </button>
      <p>
  Already have an account?
</p>

<button
  onClick={() => setPage("login")}
>
  Go to Login
</button>
    </div>
    
  );
}

export default Register;