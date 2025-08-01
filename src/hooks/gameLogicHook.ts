import { useDispatch, useSelector } from "react-redux";
import { incrementWheat } from "../store/gameSlice";
import { TickRateInMilliseconds } from "../configuration/gameConstants";
import { useEffect } from "react";
import type { RootState } from "../store/store";
import { getTotalWPS } from "../logic/gameLogic";

export const TickLoop = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(incrementWheat(getTotalWPS(state)));
        }, TickRateInMilliseconds);

        return () => clearInterval(interval);
    }, [dispatch, state]);
};