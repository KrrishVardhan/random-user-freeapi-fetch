import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data.data;

        const random = Math.floor(Math.random() * users.length);

        setUser(users[random]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex dark justify-center items-center min-h-screen bg-primary">
      <Card className="w-87.5">
        <CardHeader className="items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.picture.large} />
            <AvatarFallback>
              {user.name.first[0]}
            </AvatarFallback>
          </Avatar>

          <CardTitle>
            {user.name.title} {user.name.first} {user.name.last}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

          <p>
            Location: {user.location.city},{" "}
            {user.location.country}
          </p>

          <Button onClick={fetchUser} className="w-full">
            Generate New User
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;