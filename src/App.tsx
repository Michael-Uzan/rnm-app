import { Box, Heading } from "@chakra-ui/react";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { HalfSide, MainContainer } from "./components/layout/MainContainer";
import { CharacterGallery } from "./components/CharacterGallery";

function App() {
  return (
    <Box>
      <AppHeader />
      <MainContainer>
        <HalfSide>
          <Heading size={"md"} marginBottom={"10px"}>
            Characters
          </Heading>
          <CharacterGallery />
        </HalfSide>
        <HalfSide>
          <Heading size={"md"} marginBottom={"10px"}>
            Favorites
          </Heading>
        </HalfSide>
      </MainContainer>
      <AppFooter />
    </Box>
  );
}

export default App;
