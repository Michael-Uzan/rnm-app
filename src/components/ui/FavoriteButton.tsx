import { IconButton, StarIcon } from "@chakra-ui/icons";

type FavoriteButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export const FavoriteButton = ({ isActive, onClick }: FavoriteButtonProps) => {
  return (
    <IconButton
      borderColor={isActive ? "yellow.300" : "gray.300"}
      variant="outline"
      aria-label="favorite-button"
      icon={<StarIcon color={isActive ? "yellow.300" : "gray.300"} />}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};
