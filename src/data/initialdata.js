import { v4 as uuid, v4 } from "uuid";

const ids = [];

for (var i = 0; i < 12; i++) {
  ids.push(v4());
}

export const initialData = {
  nodes: [
    {
      id: ids[0],
      name: "CO2 Emissions",
      desc: "",
      tags: [],
    },
    {
      id: ids[1],
      name: "Fossil fuels",
      desc: "",
      tags: [],
    },
    {
      id: ids[2],
      name: "Global warming",
      desc: "",
      tags: [],
    },
    {
      id: ids[3],
      name: "Electricity",
      desc: "",
      tags: [],
    },
    {
      id: ids[4],
      name: "Deforestation",
      desc: "",
      tags: [],
    },
    {
      id: ids[5],
      name: "CH4 emissions",
      desc: "",
      tags: [],
    },
    {
      id: ids[6],
      name: "Climate change",
      desc: "",
      tags: [],
    },
    {
      id: ids[7],
      name: "Agriculture",
      desc: "",
      tags: [],
    },
    {
      id: ids[8],
      name: "Acid rain",
      desc: "",
      tags: [],
    },
    {
      id: ids[9],
      name: "Wildlife loss",
      desc: "",
      tags: [],
    },
    {
      id: ids[10],
      name: "Drought",
      desc: "",
      tags: [],
    },
    {
      id: ids[11],
      name: "Industry",
      desc: "",
      tags: [],
    },
  ],
  links: [
    {
      source: ids[1],
      target: ids[0],
    },
    {
      source: ids[0],
      target: ids[2],
    },
    {
      source: ids[3],
      target: ids[1],
    },
    {
      source: ids[4],
      target: ids[0],
    },
    {
      source: ids[5],
      target: ids[2],
    },
    {
      source: ids[2],
      target: ids[6],
    },
    {
      source: ids[7],
      target: ids[5],
    },
    {
      source: ids[6],
      target: ids[8],
    },
    {
      source: ids[6],
      target: ids[9],
    },
    {
      source: ids[6],
      target: ids[10],
    },
    {
      source: ids[11],
      target: ids[1],
    },
  ],
};
