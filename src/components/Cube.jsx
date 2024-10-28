import { useBox } from "@react-three/cannon";
import * as textures from '../textures/textures.js';
import { useState, useMemo } from 'react';
import { useStore } from '../hooks/useStore.js';

export const Cube = ({ id, position, texture }) => {
    const [isHovered, setIsHovered] = useState(false);
    const removeCube = useStore(state => state.removeCube);

    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        args: [1, 1, 1], // Asegúrate de que las dimensiones son las adecuadas para cubos
    }), { mass: 1 }); // Asegúrate de que el cubo tenga masa

    const activeTexture = useMemo(() => textures[`${texture}Texture`], [texture]);

    return (
        <mesh
            onPointerMove={(e) => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            ref={ref}
            onClick={(e) => {
                e.stopPropagation();
                if (e.altKey) {
                    removeCube(id);
                }
            }}
        >
            <boxGeometry args={[1, 1, 1]} /> // Asegúrate de que esto también coincida
            <meshStandardMaterial 
                color={isHovered ? 'grey' : 'white'}
                transparent
                map={activeTexture}
                attach='material'
            />
        </mesh>
    );
};
