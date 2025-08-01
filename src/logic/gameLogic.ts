import type { RootState } from "../store/store";
import { getBarnTotalMultPurchased, getBaseTotalMultPurchased, getFarmerTotalMultPurchased, getFertilizerTotalMultPurchased, getTractorTotalMultPurchased, getWhickensTotalMultPurchased, getWowsTotalMultPurchased } from "./upgradeLogic";

/**
 * 
 * @param state The current state of the Redux store
 * @description Calculates the total Wheat Per Second (WPS) based on the current game state
 * @returns Total Wheat Per Second (WPS) with all modifiers applied
 */
export const getTotalWPS = (state: RootState): number => {
    const baseWPS = state.game.wps * getBaseTotalMultPurchased(state);

    const fertilizerWPS = state.farm.fertilizer * state.farm.fertilizerWPSValue * getFertilizerTotalMultPurchased(state);

    const whickenWPS = state.farm.whickens * state.farm.whickenWPSValue * getWhickensTotalMultPurchased(state);

    const wowWPS = state.farm.wows * state.farm.wowWPSValue * getWowsTotalMultPurchased(state);

    const farmersWPS = state.farm.farmers * state.farm.farmerWPSValue * getFarmerTotalMultPurchased(state);

    const tractorWPS = state.farm.tractors * state.farm.tractorWPSValue * getTractorTotalMultPurchased(state);

    const barnWPS = state.farm.barns * state.farm.barnWPSValue * getBarnTotalMultPurchased(state);

    return baseWPS * (fertilizerWPS + farmersWPS + tractorWPS + barnWPS + whickenWPS + wowWPS);
};