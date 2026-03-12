export default function InputNome({ input, setInput, onAdicionar }) {
  return (
    <div className="input-area">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um nome: "
      />
      <button onClick={onAdicionar}>Adicionar</button>
    </div>
  );
}