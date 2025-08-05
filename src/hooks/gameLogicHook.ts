import { useDispatch, useSelector } from "react-redux";
import { incrementWheat } from "../store/gameSlice";
import { TickRateInMilliseconds } from "../configuration/gameConstants";
import { useEffect, useRef } from "react";
import type { RootState } from "../store/store";
import { getTotalWPS } from "../logic/gameLogic";
import { updatePrestigeAchievements, updatePrestigeAchievementsTrigger, updateWheatAchievements, updateWheatAchievementsTrigger } from "../store/achievementSlice";
import { getUntriggeredCompletedPrestigeAchievements, getUntriggeredCompletedWheatAchievements } from "../logic/achievementLogic";
import { enqueueSnackbar } from "notistack";

export const TickLoop = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const stateRef = useRef(state);
    const dispatchRef = useRef(dispatch);
    dispatchRef.current = dispatch;
    stateRef.current = state;
    useEffect(() => {
        const interval = setInterval(() => {
            const currentState = stateRef.current;
            dispatchRef.current(incrementWheat(getTotalWPS(currentState)));
            dispatchRef.current(updateWheatAchievements({ wps: getTotalWPS(currentState), wheat: currentState.game.wheat }));
            dispatchRef.current(updatePrestigeAchievements(currentState.game.prestigePoints));
        }, TickRateInMilliseconds);
        return () => clearInterval(interval);
    }, []);
};

export const CheckForCompletedWheatAchievements = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const stateRef = useRef(state);
    const dispatchRef = useRef(dispatch);
    dispatchRef.current = dispatch;
    stateRef.current = state;
    useEffect(() => {
        const interval = setInterval(() => {
            const currentState = stateRef.current;
            const completedAchievements = getUntriggeredCompletedWheatAchievements(currentState);
            if (completedAchievements.length === 0) return;
            completedAchievements.forEach(achievement => {
                enqueueSnackbar(achievement.description, {
                    variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    }});
            });
            dispatchRef.current(updateWheatAchievementsTrigger(completedAchievements));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}

export const CheckForCompletedPrestigeAchievements = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const stateRef = useRef(state);
    const dispatchRef = useRef(dispatch);
    dispatchRef.current = dispatch;
    stateRef.current = state;
    useEffect(() => {
        const interval = setInterval(() => {
            const currentState = stateRef.current;
            const completedAchievements = getUntriggeredCompletedPrestigeAchievements(currentState);
            if (completedAchievements.length === 0) return;
            completedAchievements.forEach(achievement => {
                enqueueSnackbar(achievement.description, {
                    variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    }});
            });
            dispatchRef.current(updatePrestigeAchievementsTrigger(completedAchievements));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}