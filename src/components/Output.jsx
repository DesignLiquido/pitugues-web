import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from '@api/executeCode';

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState('');

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
  
    try {
      if (language === 'pitugues') {
        const resultado = await executeCode(language, sourceCode);
        setOutput(Array.isArray(resultado.saida) ? resultado.saida.join('\n') : resultado.saida);
      } else {
        setOutput('Linguagem não suportada.');
      }
    } catch (error) {
      setOutput(error.message);
    }
  };
    
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">Output</Text>
      <Button variant="outline" colorScheme="green" mb={4} onClick={runCode}>
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        overflowY="auto"
        whiteSpace="pre-wrap"
        color="white"
        bg="gray.900"
      >
        {output || 'Nenhuma saída ainda.'}
      </Box>
    </Box>
  );
};

export default Output;
