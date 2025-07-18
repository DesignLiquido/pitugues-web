import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, KEYWORDS_DOCS_LIST } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('pitugues');

    const onMount = (editor, monaco) => {
        editorRef.current = editor;
        editor.focus();

        monaco.languages.register({ id: language });

        const KEYWORDS = KEYWORDS_DOCS_LIST.map(item => item.nome);

        monaco.languages.setMonarchTokensProvider(language, {
            tokenizer: {
                root: [
                    [new RegExp(`\\b(${KEYWORDS.join('|')})\\b`), "keyword"],
                    [/\d+/, "number"],
                    [/".*?"/, "string"],
                    [/\#.*/, "comment"],
                    [/[a-zA-Z_]\w*/, "identifier"],
                ],
            },
        });

        function createKeywordsAutocomplete(range) {
            return  KEYWORDS_DOCS_LIST.map((p) => ({
              label: p.nome,
              kind: monaco.languages.CompletionItemKind.Function,
              documentation: p.documentacao,
              insertText: `${p.nome}()`,
              range
            }));
          }

        monaco.languages.registerCompletionItemProvider(language, {
            triggerCharacters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
          
            provideCompletionItems: function (model, position) {
              const word = model.getWordUntilPosition(position);
              const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
              };
          
              return {
                suggestions: createKeywordsAutocomplete(range)
              };
            }
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
