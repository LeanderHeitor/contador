import React, { useState } from 'react';

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar} disabled={contador >= 10}>
        {contador >= 10 ? 'Limite alcançado' : 'Somar'}
      </button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default MeuComponente;
