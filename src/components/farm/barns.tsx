import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeBarns } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { BarnCostMultiplier } from "../../configuration/gameConstants";
import { getTotalCost } from "../../logic/farmCostLogic";

export const Barns = () => {
    const dispatch = useDispatch();

    const { barns, cost, amount, wheat, description } = useSelector((state: RootState) => ({
        barns: state.farm.barns,
        cost: state.farm.barnCost,
        amount: state.filter.purchaseAmount,
        wheat: state.game.wheat,
        description: state.farm.barnDescription
    }));

    const totalCost = getTotalCost(cost, amount, BarnCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeBarns(amount));
        }
    }

    return (
        <FarmTemplate
            title="Barns"
            count={barns}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    )
}