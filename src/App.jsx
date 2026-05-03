import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers")
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Random User Card</h1>

      <div>
        <img src={user.picture.large} alt="user" />

        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <p>Email: {user.email}</p>

        <p>Phone: {user.phone}</p>

        <p>
          Location: {user.location.city}, {user.location.country}
        </p>
      </div>
    </>
  );
}

export default App;