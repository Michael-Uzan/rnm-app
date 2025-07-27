import { Box, Heading } from "@chakra-ui/react";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { HalfSide, MainContainer } from "./components/layout/MainContainer";
import { CharacterGallery } from "./components/CharacterGallery";
import { CharacterDetails } from "./components/CharacterDetails";
import HeadingSection from "./components/ui/HeadingSection";

function App() {
  return (
    <Box>
      <CharacterDetails />
      <AppHeader />
      <MainContainer>
        <HalfSide>
          <HeadingSection title="Characters" />
          <CharacterGallery />
        </HalfSide>
        <HalfSide>
          <HeadingSection title="Favorites" />
        </HalfSide>
      </MainContainer>
      <AppFooter />
    </Box>
  );
}

export default App;
