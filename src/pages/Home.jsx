import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import SearchableList from "../components/SearchableList";
import UserItem from "../components/users/UserItem";

const Home = () => {
  return (
    <>
      <span className="text-rotate text-7xl leading-[2]" id="Team">
        <span className="justify-items-start ">
          <span className="bg-teal-400 text-teal-800 px-2 ">
            🔖 Codification
          </span>
          <span className="bg-red-400 text-gray-800 px-2">⌨️ Enrôlement</span>
          <span className="bg-blue-400 text-blue-800 px-2">
            📸 Photographie
          </span>
          <span className="bg-green-400 text-green-800 px-2">🤖 WebMaster</span>
          <span className="bg-yellow-400 text-yellow-800 px-2">
            🪛 Maintenance informatique
          </span>
          <span className="bg-purple-400 text-purple-800 px-2">♻️ Répéter</span>
        </span>
      </span>
      <UserSearch />

      <UserResults />
    </>
  );
};

export default Home;
