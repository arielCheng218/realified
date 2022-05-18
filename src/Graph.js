import React from "react";
import { v4 as uuid } from "uuid";
import { useQuery, gql } from "@apollo/client";
import ForceGraph from "force-graph";

export default function Graph() {
  return (
    <div>
      Hello world!
      <ForceGraph />
    </div>
  );
}
