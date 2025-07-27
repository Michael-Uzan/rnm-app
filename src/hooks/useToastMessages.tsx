import { useToast } from "@chakra-ui/react";

export const useToastMessages = () => {
  const toast = useToast();

  const warnToast = ({ description }: { description: string }) => {
    toast({
      position: "bottom-left",
      title: "Error",
      status: "error",
      duration: 7000,
      isClosable: true,
      description,
    });
  };

  const successToast = ({ description }: { description: string }) => {
    toast({
      position: "bottom-left",
      title: "Success",
      status: "success",
      duration: 1000,
      isClosable: true,
      description,
    });
  };

  return { warnToast, successToast };
};
