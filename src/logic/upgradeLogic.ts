import { MaxItems } from "../configuration/gameConstants";
import type { RootState } from "../store/store";
import type { Upgrade } from "../store/upgradeSlice";

export const getAllUpgradesSortByPurchased = (state: RootState): Upgrade[] => {
    return Object.values(state.upgrade).flatMap((upgradeType) => upgradeType as Upgrade[]).sort((a, b) => {
        if (a.purchased && !b.purchased) return -1; // a is purchased, b is not
        if (!a.purchased && b.purchased) return 1; // b is purchased, a is not
        return a.cost - b.cost; // both are purchased or not, sort by cost
    });
};

export const getAllAvailableUpgradesSortedByCost = (state: RootState): Upgrade[] => {
    const availableUpgrades = Object.values(state.upgrade).flatMap((upgradeType) => (upgradeType as Upgrade[]).filter((upgrade) => !upgrade.purchased));
    return availableUpgrades.sort((a, b) => a.cost - b.cost);
};


export const getAvailableUpgradesUnderMaxItems = (state: RootState): Upgrade[] => {
    const allUpgrades = getAllAvailableUpgradesSortedByCost(state);
    return allUpgrades.slice(0, MaxItems);
};

export const getFertilizerTotalMultPurchased = (state: RootState): number => {
    const purchasedFertilizers = state.upgrade.fertilizersUpgrade.filter((fertilizer) => fertilizer.purchased);
    if (purchasedFertilizers.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedFertilizers.reduce((total, fertilizer) => total * fertilizer.multiplier, 1);
};

export const getWhickensTotalMultPurchased = (state: RootState): number => {
    const purchasedWhickens = state.upgrade.whickensUpgrade.filter((whicken) => whicken.purchased);
    if (purchasedWhickens.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedWhickens.reduce((total, whicken) => total * whicken.multiplier, 1);
};


export const getWowsTotalMultPurchased = (state: RootState): number => {
    const purchasedWows = state.upgrade.wowsUpgrade.filter((wow) => wow.purchased);
    if (purchasedWows.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedWows.reduce((total, wow) => total * wow.multiplier, 1);
};


export const getFarmerTotalMultPurchased = (state: RootState): number => {
    const purchasedFarmers = state.upgrade.farmersUpgrade.filter((farmer) => farmer.purchased);
    if (purchasedFarmers.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedFarmers.reduce((total, farmer) => total * farmer.multiplier, 1);
};


export const getTractorTotalMultPurchased = (state: RootState): number => {
    const purchasedTractors = state.upgrade.tractorsUpgrade.filter((tractor) => tractor.purchased);
    if (purchasedTractors.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedTractors.reduce((total, tractor) => total * tractor.multiplier, 1);
};


export const getBarnTotalMultPurchased = (state: RootState): number => {
    const purchasedBarns = state.upgrade.barnsUpgrade.filter((barn) => barn.purchased);
    if (purchasedBarns.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedBarns.reduce((total, barn) => total * barn.multiplier, 1);
};

export const getBaseTotalMultPurchased = (state: RootState): number => {
    const purchasedBase = state.upgrade.baseUpgrade.filter((base) => base.purchased);
    if (purchasedBase.length === 0) return 1; // Default multiplier if no upgrades purchased
    return purchasedBase.reduce((total, base) => total * base.multiplier, 1);
}