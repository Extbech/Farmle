import type { RootState } from "../store/store";
import { getBarnTotalMultPurchased, getBaseTotalMultPurchased, getFarmerTotalMultPurchased, getFertilizerTotalMultPurchased, getTractorTotalMultPurchased, getWhickensTotalMultPurchased, getWowsTotalMultPurchased } from "./upgradeLogic";

/**
 * 
 * @param state The current state of the Redux store
 * @description Calculates the total Wheat Per Second (WPS) based on the current game state
 * @returns Total Wheat Per Second (WPS) with all modifiers applied
 */
export const getTotalWPS = (state: RootState): number => {

    return getBaseWPS(state) * (
        getFertilizerWPS(state) + 
        getFarmerWPS(state) + 
        getTractorWPS(state) + 
        getBarnWPS(state) + 
        getWhickenWPS(state) + 
        getWowWPS(state)
    );
};

export const getBaseWPS = (state: RootState): number => {
    return state.game.wps * getBaseTotalMultPurchased(state);
};

export const getFertilizerWPS = (state: RootState): number => {
    return state.farm.fertilizer * state.farm.fertilizerWPSValue * getFertilizerTotalMultPurchased(state);
};
export const getFertilizerWPSPerUnit = (state: RootState): number => {
    return state.farm.fertilizerWPSValue * getFertilizerTotalMultPurchased(state);
};

export const getWhickenWPS = (state: RootState): number => {
    return state.farm.whickens * state.farm.whickenWPSValue * getWhickensTotalMultPurchased(state);
};
export const getWhickenWPSPerUnit = (state: RootState): number => {
    return state.farm.whickenWPSValue * getWhickensTotalMultPurchased(state);
};

export const getWowWPS = (state: RootState): number => {
    return state.farm.wows * state.farm.wowWPSValue * getWowsTotalMultPurchased(state);
};
export const getWowWPSPerUnit = (state: RootState): number => {
    return state.farm.wowWPSValue * getWowsTotalMultPurchased(state);
};

export const getFarmerWPS = (state: RootState): number => {
    return state.farm.farmers * state.farm.farmerWPSValue * getFarmerTotalMultPurchased(state);
};
export const getFarmerWPSPerUnit = (state: RootState): number => {
    return state.farm.farmerWPSValue * getFarmerTotalMultPurchased(state);
};


export const getTractorWPS = (state: RootState): number => {
    return state.farm.tractors * state.farm.tractorWPSValue * getTractorTotalMultPurchased(state);
};
export const getTractorWPSPerUnit = (state: RootState): number => {
    return state.farm.tractorWPSValue * getTractorTotalMultPurchased(state);
};

export const getBarnWPS = (state: RootState): number => {
    return state.farm.barns * state.farm.barnWPSValue * getBarnTotalMultPurchased(state);
};
export const getBarnWPSPerUnit = (state: RootState): number => {
    return state.farm.barnWPSValue * getBarnTotalMultPurchased(state);
};