import { Box, HStack } from "@chakra-ui/react";
import { Editor, loader } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import * as monaco from 'monaco-editor';

import { AvaliadorSintaticoPitugues, InterpretadorComDepuracao } from "@designliquido/delegua";

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('pituguês');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();

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
    }

    const onSelect= (language) => {
        setLanguage(language);
        setValue( 
            CODE_SNIPPETS[language]
        );
    }

    return (
        <Box>
        <HStack spacing={4}>
            <Box w='50%'>
            <LanguageSelector language={language} onSelect={onSelect}/>
            <Editor 
                height="75vh" 
                theme="vs-dark" 
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                value={value}
                onMount={onMount}
                onChange={(value) => setValue(value)}
            />
            </Box>
            <Output editorRef={editorRef} language={language} />
        </HStack>
        </Box>
    );
}

export default CodeEditor;