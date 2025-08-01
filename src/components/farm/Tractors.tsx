import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeTractors } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { TractorCostMultiplier } from "../../configuration/gameConstants";

export const Tractors = () => {
    const dispatch = useDispatch();

    const { tractors, cost, amount, description, wheat } = useSelector((state: RootState) => ({
        tractors: state.farm.tractors,
        cost: state.farm.tractorCost,
        amount: state.filter.purchaseAmount,
        description: state.farm.tractorDescription,
        wheat: state.game.wheat
    }));

    const totalCost = getTotalCost(cost, amount, TractorCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeTractors(amount));
        }
    }
    return (
        <FarmTemplate
            title="Tractors"
            count={tractors}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    )
}