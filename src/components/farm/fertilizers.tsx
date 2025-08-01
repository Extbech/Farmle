import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store";
import { FarmTemplate } from "./farmTemplate";
import { spendWheat } from "../../store/gameSlice";
import { upgradeFertilizer } from "../../store/farmSlice";
import { getTotalCost } from "../../logic/farmCostLogic";
import { FertilizerCostMultiplier } from "../../configuration/gameConstants";
import { getFertilizerWPS, getTotalWPS } from "../../logic/gameLogic";

export const Fertilizers = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const totalCost = getTotalCost(state.farm.fertilizerCost, state.filter.purchaseAmount, FertilizerCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeFertilizer(state.filter.purchaseAmount));
        }
    }

    return (
        <FarmTemplate
            title="Fertilizers"
            count={state.farm.fertilizer}
            cost={totalCost}
            description={state.farm.fertilizerDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getFertilizerWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    )
}