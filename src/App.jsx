import { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { Welcome } from "./Welcome";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [storedData, setStoredData] = useState(null);

  const handleRegister = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setCurrentForm("login");
  };

  const handleLogin = (email, password) => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (email === userData.email && password === userData.password) {
        setStoredData(userData);
        setCurrentForm("welcome");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No user registered. Please register first.");
    }
  };

  const handleLogout = () => {
    setStoredData(null);
    setCurrentForm("login");
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" && (
        <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
      )}
      {currentForm === "register" && (
        <Register onFormSwitch={toggleForm} onRegister={handleRegister} />
      )}
      {currentForm === "welcome" && (
        <Welcome onLogout={handleLogout} userData={storedData} />
      )}
    </div>
  );
}

export default App;
