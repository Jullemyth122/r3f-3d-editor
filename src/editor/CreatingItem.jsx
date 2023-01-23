import React from 'react'

const CreatingItem = () => {

    return (
        <>
            <mesh position={[0,0.55,0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial
                    color={"#232323"} 
                />
            </mesh>
            <mesh position={[-3,0.55,0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial
                    color={"#232323"} 
                />
            </mesh>
            <mesh position={[3,0.55,0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial
                    color={"#232323"} 
                />
            </mesh>
        </>
    )
}

export default CreatingItem