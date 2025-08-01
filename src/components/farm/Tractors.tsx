import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeTractors } from "../../store/farmSlice";

import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { TractorCostMultiplier } from "../../configuration/gameConstants";
import { getTractorWPS, getTotalWPS } from "../../logic/gameLogic";

export const Tractors = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);

    const totalCost = getTotalCost(state.farm.tractorCost, state.filter.purchaseAmount, TractorCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeTractors(state.filter.purchaseAmount));
        }
    }
    return (
        <FarmTemplate
            title="Tractors"
            count={state.farm.tractors}
            cost={totalCost}
            description={state.farm.tractorDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getTractorWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    )
}