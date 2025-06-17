import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Text} from "@chakra-ui/react";
import { LANGUAGE_VERSION } from "../constants";

const languages = Object.entries(LANGUAGE_VERSION);
const ACTIVE_COLOR = "blue.400"

const LanguageSelector = ({language, onSelect}) => {
    return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} variant="outline" size="sm">
          {language}
        </MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              onClick={() => onSelect(lang)}
              color={
                lang === language ? ACTIVE_COLOR : ""
              }
              bg={
                lang === language ? "gray.900" : "transparent"
              }
              _hover={{
                color: "blue.400",
                bg: "gray.900",
              }}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>

    );
}

export default LanguageSelector