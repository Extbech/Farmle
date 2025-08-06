import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { updatePurchaseAmount } from "../../store/filterSlice";

export const PurchaseAmountFilter = () => {
    const dispatch = useDispatch();
    const purchaseAmount = useSelector((state: RootState) => state.filter.purchaseAmount);

    const handlePurchaseAmountClick = () => {
        dispatch(updatePurchaseAmount());
    };
    return (
        <Box sx={{ mx: 4, display: 'flex', justifyContent: 'end', mt: 2}}>
            <Button variant="outlined" color="primary" sx={{width: '100px'}} onClick={handlePurchaseAmountClick}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {purchaseAmount}x
                </Typography>
            </Button>
        </Box>
    );
};
