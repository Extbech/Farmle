import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeWows } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { WowCostMultiplier } from "../../configuration/gameConstants";

export const Wows = () => {
    const dispatch = useDispatch();

    const { wows, cost, amount, description, wheat } = useSelector((state: RootState) => ({
        wows: state.farm.wows,
        cost: state.farm.wowCost,
        amount: state.filter.purchaseAmount,
        description: state.farm.wowDescription,
        wheat: state.game.wheat
    }));
    const totalCost = getTotalCost(cost, amount, WowCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeWows(amount));
        }
    }

    return (
        <FarmTemplate
            title="Wows"
            count={wows}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    )
}