import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube.jsx";
import { useMemo } from 'react';

export const Cubes = () => {
    const cubes = useStore(state => state.cubes);

    const renderedCubes = useMemo(() => {
        return cubes.map(({id, pos, texture}) => (
            <Cube key={id} position={pos} texture={texture} />
        ));
    }, [cubes]);

    return <>{renderedCubes}</>;
};
