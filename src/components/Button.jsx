import React from "react";

const Button = (props) => {
  const handleAddCard = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      address: {
        city: "new city",
      },
    };
    props.setUsers([...props.users, newUser]);
  };
  return (
    <button onClick={handleAddCard} className="btn draw-border">
      Add Card
    </button>
  );
};

export default Button;
