export const executeCode = async (language, code) => {
  try {
    if (language === 'pitugues') {
      const response = await fetch('http://localhost:3001/executar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo: code }),
      });

      const data = await response.json();
      return data;
    }

    return { erro: 'Linguagem não suportada.' };
  } catch (err) {
    return { erro: err.message };
  }
};
