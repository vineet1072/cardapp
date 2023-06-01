import React, { useEffect, useState } from "react";
import Button from "./Button";

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleRemoveCard = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            {users.length > 3 && (
              <button
                className="close-btn"
                onClick={() => handleRemoveCard(user.id)}
              >
                x
              </button>
            )}
            <img
              src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
              alt="Person"
              className="card__image"
            />
            <p className="card__name">{user.name}</p>
            <div className="grid-container">
              <div className="grid-child-posts">Email:{user.email}</div>
              <div className="grid-child-followers">
                City:{user.address.city}
              </div>
            </div>
          </div>
        );
      })}
      <Button users={users} setUsers={setUsers} />;
    </div>
  );
};

export default Card;
