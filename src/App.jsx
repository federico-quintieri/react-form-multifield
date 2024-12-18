import { useState } from "react";
import { Input } from "./components/Input";

const oggettoPartenza = {
  titolo: "",
  prezzo: 0,
  immagine: "",
  contenuto: "",
};

function App() {
  // State per gli input che sarà un oggetto
  const [inputState, setInputState] = useState(oggettoPartenza);

  // Funzione per aggiornare lo state
  const callBackSetInputState = (event) => {
    setInputState((inputState) => ({
      ...inputState,
      [event.target.name]: event.target.value,
    }));
  };

  // Definizione dinamica degli input con relative etichette
  const labels = {
    titolo: "Inserisci titolo libro",
    prezzo: "Inserisci prezzo libro",
    immagine: "Inserisci immagine copertina",
    contenuto: "Inserisci descrizione libro",
  };

  const tipiInput = {
    titolo: "text",
    prezzo: "number",
    immagine: "text",
    contenuto: "text",
  };

  return (
    <>
      <h1>Form libri</h1>
      <form>
        {/* Creazione dinamica degli input */}
        {Object.keys(inputState).map((chiave) => (
          <Input
            key={chiave}
            chiaveState={chiave}
            objState={inputState}
            callbackState={callBackSetInputState}
            tipoInput={tipiInput[chiave]} // Tipo dinamico
            labelText={labels[chiave]} // Label dinamica
          />
        ))}
        <button className="btn btn-primary">Crea libro</button>
      </form>
    </>
  );
}

export default App;
