import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { FormatNumber } from "../../helper/numberFormatter";
import GrassIcon from '@mui/icons-material/Grass';

export type farmTemplateProps = {
    title: string;
    count: number;
    cost: number;
    description: string;
    upgradeAction: () => void;
    canUpgrade: boolean;
    wpsPerUnit: number;
    wps: number;
    totalWPS: number;
    farmIcon?: React.ReactNode;
}

export const FarmTemplate = ({ title, count, cost, description, upgradeAction, canUpgrade, wpsPerUnit, wps, totalWPS, farmIcon }: farmTemplateProps) => {
    const wpsPercent = totalWPS > 0 ? ((wps / totalWPS) * 100).toFixed(1) : "0";
    
    return (
        <Paper elevation={1} sx={{ padding: 2, margin: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        {farmIcon}
                        <Typography variant="h6" sx={{minWidth: '120px', userSelect: 'none'}}>{title}</Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5, userSelect: 'none' }}>
                            WPS: {FormatNumber(wpsPerUnit)} / WPS Total: {FormatNumber(wps)} / WPS%: {wpsPercent}%
                        </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 0.2, userSelect: 'none' }}>
                        {description}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ userSelect: 'none' }}>{count}x</Typography>
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
        </Paper>
    )
}