import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { PrestigeNode } from "../components/prestige/prestigeNode";


export const Prestige = () => {
    const { prestigeStore } = useSelector((state: RootState) => ({
        prestigeStore: state.prestige
    }));

    const nodes = [
        {id: 'n1', type: 'plain', position: { x: 100, y: -150 }, data: prestigeStore.humbleFarmer },
        {id: 'n2', type: 'plain', position: { x: 0, y: 0 }, data: prestigeStore.stinkyFertilizer },
        {id: 'n3', type: 'plain', position: { x: 200, y: 0 }, data: prestigeStore.whickenWhisperer },
        {id: 'n4', type: 'plain', position: { x: 100, y: 0 }, data: prestigeStore.cowCulator },
        {id: 'n5', type: 'plain', position: { x: -100, y: 150 }, data: prestigeStore.dirtCheap },
    ]
    const edges = [
        {id: 'n1-n2',source: 'n1',target: 'n2',style: { stroke: prestigeStore.stinkyFertilizer.available ? '#c50b91ff' : '#aaa', strokeWidth: 3 }},
        {id: 'n1-n3',source: 'n1',target: 'n3',style: { stroke: prestigeStore.whickenWhisperer.available ? '#c50b91ff' : '#aaa', strokeWidth: 3 }},
        {id: 'n1-n4',source: 'n1',target: 'n4',style: { stroke: prestigeStore.cowCulator.available ? '#c50b91ff' : '#aaa', strokeWidth: 3 }},
        {id: 'n2-n5',source: 'n2',target: 'n5',style: { stroke: prestigeStore.dirtCheap.available ? '#c50b91ff' : '#aaa', strokeWidth: 3 }}
    ];


    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'calc(100%)', height: '1000px', background: '#181a1b' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                proOptions={{ hideAttribution: true }}
                fitView
                nodeTypes={{ plain: PrestigeNode }}
            >
                <Background gap={24} />
                <Controls showInteractive={false} />
            </ReactFlow>

        </Box>
    );
}