import { Box, Button, Paper, Typography } from "@mui/material"
import { FormatNumber } from "../../helper/numberFormatter";
import GrassIcon from '@mui/icons-material/Grass';

export type farmTemplateProps = {
    title: string;
    count: number;
    cost: number;
    description: string;
    upgradeAction: () => void;
    canUpgrade: boolean;
}

export const FarmTemplate = ({ title, count, cost, description, upgradeAction, canUpgrade }: farmTemplateProps) => {

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2, display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{title}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="h6">{count}x</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginLeft: 2, width: '100px' }}
                        onClick={upgradeAction}
                        disabled={!canUpgrade}
                        endIcon={<GrassIcon fontSize="medium" sx={{ color: canUpgrade ? '#FFD700' : '#888', mb: 0.4 }} />}
                    >
                        {FormatNumber(cost)}
                        </Button>
                </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.2 }}>
                {description}
            </Typography>
        </Paper>
    )
}