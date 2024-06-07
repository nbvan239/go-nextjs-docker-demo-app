import React from "react";

interface Card {
  id: number;
  name: string;
  email: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-4 mb-4 hover:bg-gray-700">
      <div className="text-sm text-gray-400">Id: {card.id}</div>
      <div className="text-lg font-semibold text-white">{card.name}</div>
      <div className="text-md text-gray-300">{card.email}</div>
    </div>
  );
};

export default CardComponent;
