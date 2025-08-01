import { useDispatch, useSelector } from "react-redux";
import { spendWheat } from "../../store/gameSlice";
import { FarmTemplate } from "./farmTemplate";
import type { RootState } from "../../store/store";
import { upgradeWhickens } from "../../store/farmSlice";
import { getTotalCost } from "../../logic/farmCostLogic";
import { WhickenCostMultiplier } from "../../configuration/gameConstants";

export const Whickens = () => {
    const dispatch = useDispatch();

    const { whickens, cost, amount, description, wheat } = useSelector((state: RootState) => ({
        whickens: state.farm.whickens,
        cost: state.farm.whickenCost,
        amount: state.filter.purchaseAmount,
        description: state.farm.whickenDescription,
        wheat: state.game.wheat
    }));
    const totalCost = getTotalCost(cost, amount, WhickenCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeWhickens(amount));
        }
    }

    return (
        <FarmTemplate
            title="Whickens"
            count={whickens}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    );
}