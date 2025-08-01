import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeWows } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { WowCostMultiplier } from "../../configuration/gameConstants";
import { getTotalWPS, getWowWPS } from "../../logic/gameLogic";

export const Wows = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const totalCost = getTotalCost(state.farm.wowCost, state.filter.purchaseAmount, WowCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeWows(state.filter.purchaseAmount));
        }
    }

    return (
        <FarmTemplate
            title="Wows"
            count={state.farm.wows}
            cost={totalCost}
            description={state.farm.wowDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getWowWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    )
}