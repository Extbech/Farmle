import { Box, Button, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
import type { Prestige } from "../../store/prestigeSlice";
import { PrestigeTooltip } from "./prestigeTooltip";


export const PrestigeNode = memo(({ data }: {data: Prestige}) => {

  return (
    <PrestigeTooltip prestige={data} className="nodrag" sx={{cursor: 'pointer'}}>
        <Button sx={{
        background: data.available ? '#c50b91ff' : '#aaa',
        color: '#fff',
        borderRadius: '30%',
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        position: 'relative',
        opacity: data.available ? 1 : 0.5,
        border: data.available ? '3px solid #c50b91ff' : '3px solid #888',
        transition: 'background 0.2s, opacity 0.2s, border 0.2s',
        userSelect: 'none',
        cursor: 'pointer',
        }}
        className="nodrag"
        >
            <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '0.8rem' }}>
                {data.level}
            </Typography>
        <Handle type="source" position={Position.Bottom} style={{ opacity: 0, pointerEvents: 'none' }} />
        <Handle type="target" position={Position.Top} style={{ opacity: 0, pointerEvents: 'none' }} />
        </Button>
    </PrestigeTooltip>
  );
});