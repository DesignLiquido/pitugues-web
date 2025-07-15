import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('pitugues');

    const onMount = (editor, monaco) => {
        editorRef.current = editor;
        editor.focus();

        monaco.languages.register({ id: language });

        const PALAVRASRESERVADAS = ['escreva', 'leia', 'aparar', 'apararFim', 'apararInicio', 'concatenar',
            'dividir', 'fatiar', 'inclui', 'maiusculo', 'minusculo', 'substituir', 'subtexto', 'arredondarParaBaixo',
            'arredondarParaCima', 'adicionar', 'empilhar', 'inverter', 'juntar', 'ordenar', 'remover', 'removerPrimeiro',
            'removerUltimo', 'somar', 'tamanho', 'aleatorio', 'aleatorioEntre', 'inteiro', 'numero', 'número', 'real',
            'texto'
        ]

        monaco.languages.setMonarchTokensProvider(language, {
            tokenizer: {
                root: [
                    [new RegExp(`\\b(${PALAVRASRESERVADAS.join('|')})\\b`), "keyword"],
                    [/\d+/, "number"],
                    [/".*?"/, "string"],
                    [/\#.*/, "comment"],
                    [/[a-zA-Z_]\w*/, "identifier"],
                ],
            },
        });
    };

    const onSelect = (lang) => {
        setLanguage(lang);
        setValue(CODE_SNIPPETS[lang]);
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        value={value}
                        onMount={(editor, monaco) => onMount(editor, monaco)}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    );
};

export default CodeEditor;
