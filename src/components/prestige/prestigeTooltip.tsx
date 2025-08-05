
import { Tooltip, Box, Typography, type TooltipProps } from "@mui/material";
import type { Prestige } from "../../store/prestigeSlice";

type PrestigeTooltipProps = Omit<TooltipProps, 'title'> & {
  prestige: Prestige;
};

export const PrestigeTooltip = ({ prestige, children, ...props }: PrestigeTooltipProps) => {
  const { name, description, cost, level, maxLevel } = prestige;
  return (
    <Tooltip
      {...props}
      title={
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" gutterBottom>{description}</Typography>
          <Typography variant="body2">Cost: {cost} Prestige Points</Typography>
          <Typography variant="body2">Level: {level} / {maxLevel}</Typography>
        </Box>
      }
      arrow
      placement="top"
    >
      {children}
    </Tooltip>
  );
};
