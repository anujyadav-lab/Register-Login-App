import { useState } from "react";

export const Register = ({ onFormSwitch, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      fullName: fullName,
    };
    onRegister(data);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          value={fullName}
          id="name"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="text"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      <button className="link-btn" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
