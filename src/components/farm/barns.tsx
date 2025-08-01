import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeBarns } from "../../store/farmSlice";

import { FarmTemplate } from "./farmTemplate";
import { BarnCostMultiplier } from "../../configuration/gameConstants";
import { getTotalCost } from "../../logic/farmCostLogic";
import { getBarnWPS, getTotalWPS } from "../../logic/gameLogic";

export const Barns = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);

    const totalCost = getTotalCost(state.farm.barnCost, state.filter.purchaseAmount, BarnCostMultiplier);
    const canUpgrade = state.game.wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeBarns(state.filter.purchaseAmount));
        }
    }

    return (
        <FarmTemplate
            title="Barns"
            count={state.farm.barns}
            cost={totalCost}
            description={state.farm.barnDescription}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
            wps={getBarnWPS(state)}
            totalWPS={getTotalWPS(state)}
        />
    )
}