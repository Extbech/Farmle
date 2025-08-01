import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeFarmers } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { FarmersCostMultiplier } from "../../configuration/gameConstants";
import { getFarmerWPS, getTotalWPS } from "../../logic/gameLogic";

export const Farmers = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const totalCost = getTotalCost(state.farm.farmerCost, state.filter.purchaseAmount, FarmersCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeFarmers(state.filter.purchaseAmount));
        }
    }

    return (
        <FarmTemplate
            title="Farmers"
            count={state.farm.farmers}
            cost={totalCost}
            description={state.farm.farmerDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getFarmerWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    )
}