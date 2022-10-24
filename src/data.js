/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from "uuid"

export default {
  menu: [
    { id: uuidv4(), number: 1, link: "/", title: "Homepage" },
    { id: uuidv4(), number: 2, link: "#model", title: "Ferries Wheel" }
  ]
}
