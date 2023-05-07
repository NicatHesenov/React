import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./components/Users/UserList";
import User from "./components/Users/User";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container mt-3">
      <User />
      <UserList />;
    </div>
  );
}

export default App;
