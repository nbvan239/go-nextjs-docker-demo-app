import React from "react";
import UserInterface from "../components/UserInterface";

const Home: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen bg-gray-900">
      <div className="m-4">
        <UserInterface UserUI="go" />
      </div>
    </main>
  );
};

export default Home;
