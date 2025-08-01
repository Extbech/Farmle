import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store";
import { FarmTemplate } from "./farmTemplate";
import { spendWheat } from "../../store/gameSlice";
import { upgradeFertilizer } from "../../store/farmSlice";
import { getTotalCost } from "../../logic/farmCostLogic";
import { FertilizerCostMultiplier } from "../../configuration/gameConstants";

export const Fertilizers = () => {
    const dispatch = useDispatch();

    const { fertilizer, cost, amount, wheat, description } = useSelector((state: RootState) => ({
        fertilizer: state.farm.fertilizer,
        cost: state.farm.fertilizerCost,
        amount: state.filter.purchaseAmount,
        wheat: state.game.wheat,
        description: state.farm.fertilizerDescription
    }));
    const totalCost = getTotalCost(cost, amount, FertilizerCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeFertilizer(amount));
        }
    }

    return (
        <FarmTemplate
            title="Fertilizers"
            count={fertilizer}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    )
}