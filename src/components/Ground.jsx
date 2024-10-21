import { usePlane } from "@react-three/cannon";

export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [0, 0, 0],
        position: [0, 0, 0]
    }));

    return (
        <mesh ref={ref}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color='green' />
        </mesh>
    );
}
