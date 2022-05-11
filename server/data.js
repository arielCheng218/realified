const uuidv4 = require("uuid/v4");

let ids = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];

let data = [
  {
    id: ids[0],
    name: "Item 1",
    description: "Description blah blah blah",
    select: false,
    sdg: 1,
    tags: ["Tag for item 1"],
    edges: [ids[1], ids[2]],
  },
  {
    id: ids[1],
    name: "Item 2",
    description: String,
    select: true,
    sdg: 1,
    tags: ["Tag for item 2"],
    edges: [ids[1]],
  },
  {
    id: ids[2],
    name: "Item 3",
    description: String,
    select: true,
    sdg: 1,
    tags: ["Tag for item 3"],
    edges: [ids[1], ids[3]],
  },
  {
    id: ids[3],
  },
];
