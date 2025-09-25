import { useState } from "react";
import "./styles.css";

export default function Searchbar() {
  const [termoPesquisa, setTermpoPesquisa] = useState("");
  console.log(termoPesquisa);
  return (
    <>
      <input
        className="searchbar"
        type="search"
        placeholder="Digite o que você procura"
        value={termoPesquisa}
        onChange={(evento) => setTermpoPesquisa(evento.target.value)}
      />
    </>
  );
}
