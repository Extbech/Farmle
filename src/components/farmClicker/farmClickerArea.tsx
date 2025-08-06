import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementWheatByClick } from "../../store/gameSlice";
import GrassIcon from '@mui/icons-material/Grass';

export const FarmClickerArea = () => {
    const dispatch = useDispatch();
    const [grasses, setGrasses] = useState<Array<{ id: number; top: number; left: number, floatingLeft: boolean }>>([]);
    const handleClick = () => {
        dispatch(incrementWheatByClick());
        const top = Math.random() * 60 + 20;
        const left = Math.random() * 80 + 10;
        const id = Date.now() + Math.random();
        
        const floatingLeft = Math.random() < 0.5;
        setGrasses((prev) => [...prev, { id, top: top, left: left, floatingLeft: floatingLeft}]);
        setTimeout(() => {
            setGrasses((prev) => prev.filter((g) => g.id !== id));
        }, 1500);
    };
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                width: '100%',
                backgroundColor: '#388e3c',
                boxShadow: 2,
                cursor: 'pointer',
                userSelect: 'none',
                overflow: 'hidden',
            }}
            onClick={handleClick}
        >
            <Typography variant="h5" color="secondary" fontWeight={700}>
                Click the farm to harvest wheat!
            </Typography>
            {grasses.map((g) => (
                <GrassIcon
                    key={g.id}
                    sx={{
                        position: 'absolute',
                        top: `${g.top}%`,
                        left: `${g.left}%`,
                        fontSize: 40,
                        color: (theme) => theme.palette.secondary.main,
                        opacity: 0.8,
                        pointerEvents: 'none',
                        animation: g.floatingLeft ? 'floatfadeLeft 1.5s linear forwards' : 'floatfadeRight 1.5s linear forwards',
                    }}
                />
            ))}
            {/* Fadeout keyframes */}
            <style>{`
                @keyframes floatfadeLeft {
                    0%   { opacity: 0.8; transform: translateY(20px) translateX(20px);}
                    80%  { opacity: 0.8; transform: translateY(-10px) translateX(10px);}
                    100% { opacity: 0;   transform: translateY(-30px) translateX(0px);}
                }
            `}</style>
            <style>{`
                @keyframes floatfadeRight {
                    0%   { opacity: 0.8; transform: translateY(20px) translateX(0px);}
                    80%  { opacity: 0.8; transform: translateY(-10px) translateX(10px);}
                    100% { opacity: 0;   transform: translateY(-30px) translateX(20px);}
                }
            `}</style>
        </Box>
    );
};