import { useState, useEffect } from "react";
import "./App.css";
interface User {
  _id: string;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user-list">
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            users.map((user) => (
              <div className="user-card" key={user._id}>
                <h2>{user.name}</h2>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}

export default App;
