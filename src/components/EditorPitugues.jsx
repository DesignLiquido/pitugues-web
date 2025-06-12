import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { AvaliadorSintaticoPitugues, InterpretadorComDepuracao } from '@designliquido/delegua';

const EditorPitugues = () => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    monaco.languages.register({ id: 'pitugues' });

    monaco.languages.setMonarchTokensProvider('pitugues', {
      tokenizer: {
        root: [
          [/\b(se|senao|enquanto|para|deixe|constante|funcao|retorne)\b/, 'keyword'],
          [/\b(verdadeiro|falso|null|nulo)\b/, 'constant'],
          [/[{}()\[\]]/, '@brackets'],
          [/[a-zA-Z_]\w*/, 'identifier'],
          [/[0-9]+/, 'number'],
          [/".*?"/, 'string'],
        ],
      },
    });

    monaco.editor.defineTheme('pitugues-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'ff9d00' },
        { token: 'identifier', foreground: 'ffffff' },
        { token: 'number', foreground: '00ff99' },
        { token: 'string', foreground: 'ce9178' },
      ],
      colors: {},
    });

    monaco.editor.setTheme('pitugues-dark');
  };

  const avaliarCodigo = () => {
    const codigo = editorRef.current?.getValue();
    if (codigo) {
      const avaliador = new AvaliadorSintaticoPitugues();
      const interpretador = new InterpretadorComDepuracao();
      const retorno = interpretador.interpretar(avaliador.analisar(codigo));
      console.log(retorno);
    }
  };

  return (
    <div>
      <button onClick={avaliarCodigo} className="p-2 bg-blue-600 text-white mb-2 rounded">
        Executar Pituguês
      </button>
      <Editor
        height="600px"
        defaultLanguage="pitugues"
        defaultValue={`funcao digaOi() {\n  escreva("Oi mundo!");\n}`}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default EditorPitugues;
