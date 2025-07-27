import { IconButton, StarIcon, type IconButtonProps } from "@chakra-ui/icons";

type FavoriteButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export const FavoriteButton = ({
  isActive,
  onClick,
  ...rest
}: FavoriteButtonProps & IconButtonProps) => {
  return (
    <IconButton
      borderColor={isActive ? "yellow.300" : "gray.300"}
      variant="outline"
      icon={<StarIcon color={isActive ? "yellow.300" : "gray.300"} />}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...rest}
    />
  );
};
