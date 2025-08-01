import { useDispatch, useSelector } from "react-redux";
import { spendWheat } from "../../store/gameSlice";
import { FarmTemplate } from "./farmTemplate";
import type { RootState } from "../../store/store";
import { upgradeWhickens } from "../../store/farmSlice";
import { getTotalCost } from "../../logic/farmCostLogic";
import { WhickenCostMultiplier } from "../../configuration/gameConstants";
import { getTotalWPS, getWhickenWPS } from "../../logic/gameLogic";

export const Whickens = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const totalCost = getTotalCost(state.farm.whickenCost, state.filter.purchaseAmount, WhickenCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeWhickens(state.filter.purchaseAmount));
        }
    }

    return (
        <FarmTemplate
            title="Whickens"
            count={state.farm.whickens}
            cost={totalCost}
            description={state.farm.whickenDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getWhickenWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    );
}