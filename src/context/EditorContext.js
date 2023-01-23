import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';



const CreatingContext = React.createContext();


export function UseCreate() {
    return useContext(CreatingContext);
}

export function CreatingProvider({ children }) {
    const [items, setItems] = useState([]);

    function createBox(scale, pos, color) {
        return (
            <mesh
                position={pos}
                key={Date.now()}
            >
                <boxGeometry args={scale} />
                <meshStandardMaterial
                    color={color}
                />
            </mesh>
        );
    }

    function createSphere(scale, pos, color) {
        return (
            <mesh
                position={pos}
                key={Date.now()}
            >
                <sphereGeometry args={scale} />
                <meshStandardMaterial
                    color={color}
                />
            </mesh>
        );
    }

    function createPlane(scale, pos, color) {
        return (
            <mesh
                position={pos}
                key={Date.now()}

            >
                <planeGeometry args={[scale[0],scale[1]]} />
                <meshStandardMaterial
                    color={color}
                />
            </mesh>
        );
    }
    function createDiamond(radius, pos, color) {
        return (
            <mesh
                position={pos}
                key={Date.now()}

            >
                <octahedronGeometry args={[radius,0]} />
                <meshStandardMaterial
                    color={color}
                />
            </mesh>
        );
    }

    function createCircle(radius, pos, color , segments) {
        return (
            <mesh
                position={pos}
                key={Date.now()}

            >
                <circleGeometry args={[radius,segments]} />
                <meshStandardMaterial
                    color={color}
                    side={THREE.DoubleSide}
                />
            </mesh>
        );
    }

    function addItem(item) {
        setItems((prevState) => [...prevState,
            item
        ])
    }

    const value = {
        createBox,
        createPlane,
        createSphere,
        createDiamond,
        createCircle,
        addItem,
        items,
        setItems
    }

    return (
        <CreatingContext.Provider value={value}>
            {children}
        </CreatingContext.Provider>
    )
}