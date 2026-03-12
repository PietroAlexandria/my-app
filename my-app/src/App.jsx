import { useState } from "react";
import "./App.css";
import InputNome from "./components/InputNome";
import ListaNomes from "./components/ListaNomes";

export default function App() {
  const [nomes, setNomes] = useState(["João", "Maria", "Carlos"]);
  const [input, setInput] = useState("");

  const adicionar = () => {
    if (input.trim() === "") return;
    setNomes([...nomes, input]);
    setInput("");
  };

  const remover = (index) => {
    setNomes(nomes.filter((_, i) => i !== index));
  };

  return (
    <div classname="container">
      <h1>Lista Dinâmica</h1>
      <InputNome
        input={input}
        setInput={setInput}
        onAdicionar={adicionar}
      />
      <ListaNomes
        nomes={nomes}
        onRemover={remover}
      />
    </div>
  );
}