import { React, useState } from "react";
import { db } from "../firebase-config.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Search({ setSelectedNode }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const queryServer = async (e) => {
    const q = query(collection(db, "nodes"), where("name", ">=", searchValue));
    var tempSearchResults = [];
    const querySnapshot = await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempSearchResults.push({ ...doc.data(), id: doc.id });
      });
    });
    setSearchResults(tempSearchResults);
    console.log(searchResults);
  };

  return (
    <div>
      <div id="Search" style={{ display: "inline-block" }}>
        <input
          type="text"
          onChange={handleChange}
          value={searchValue}
          placeholder={"Search for something"}
        ></input>
        <input
          type="button"
          value="Search (case-sensitive!)"
          onClick={queryServer}
        ></input>
      </div>
      <div
        className="resultText"
        style={{ display: "inline-block", marginLeft: "0.01%" }}
      >
        {searchResults.map((result) => (
          <div
            key={result.id}
            style={{ paddingTop: "1%", cursor: "pointer" }}
            onClick={() => setSelectedNode(result)}
          >
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
}
