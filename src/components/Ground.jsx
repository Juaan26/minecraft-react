import { usePlane } from "@react-three/cannon";
import { useStore } from '../hooks/useStore.js';
import { groundTexture } from "../textures/textures";
import { useEffect } from 'react';

export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], //x,y,z
        position: [0, -0.5, 0], //x,y,z
        args: [100, 100], // Asegúrate de que esto coincida con la geometría del plano
    }));

    const addCube = useStore(state => state.addCube);

    useEffect(() => {
        groundTexture.repeat.set(100, 100);
    }, []);

    const handleClickGround = event => {
        event.stopPropagation();
        const [x, y, z] = Object.values(event.point).map(n => Math.ceil(n));
        addCube(x, y, z);
    };

    return (
        <mesh onClick={handleClickGround} ref={ref}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={groundTexture} />
        </mesh>
    );
}
