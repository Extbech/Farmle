import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { spendWheat } from "../../store/gameSlice";
import { upgradeFarmers } from "../../store/farmSlice";
import { FarmTemplate } from "./farmTemplate";
import { getTotalCost } from "../../logic/farmCostLogic";
import { FarmersCostMultiplier } from "../../configuration/gameConstants";

export const Farmers = () => {
    const dispatch = useDispatch();
    
    const { farmers, cost, amount, description, wheat } = useSelector((state: RootState) => ({
        farmers: state.farm.farmers,
        cost: state.farm.farmerCost,
        amount: state.filter.purchaseAmount,
        description: state.farm.farmerDescription,
        wheat: state.game.wheat
    }));
    const totalCost = getTotalCost(cost, amount, FarmersCostMultiplier);
    const canUpgrade = wheat >= totalCost;

    const upgradeAction = () => {
        if (canUpgrade) {
            dispatch(spendWheat(totalCost));
            dispatch(upgradeFarmers(amount));
        }
    }

    return (
        <FarmTemplate
            title="Farmers"
            count={farmers}
            cost={totalCost}
            description={description}
            upgradeAction={upgradeAction}
            canUpgrade={canUpgrade}
        />
    )
}