import { Heading } from "@chakra-ui/react";

const HeadingSection = ({ title }: { title: string }) => {
  return (
    <Heading size={"md"} marginBottom={"10px"}>
      {title}
    </Heading>
  );
};

export default HeadingSection;
