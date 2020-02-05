import "../styles/index.css";
import search from "./search";
import render from "./render";

const id = prompt("¿Qué pokemon deseas ver ?");

search(id)
  .then(data => {
    render(data);
  })
  .catch(error => {
    console.log(error.message);
  });
