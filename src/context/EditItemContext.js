import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';


const EditingContext = React.createContext();

export function UseCreate() {
    return useContext(EditingContext);
}

export function EditingProvider({ children }) {

    const {setItems} = UseCreate();
    // const [items, setItems] = useState([]);

    function editBox(id,scale, pos, color) {
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

    function editSphere(id,scale, pos, color) {
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

    function editPlane(id,scale, pos, color) {
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
    function editDiamond(id,radius, pos, color) {
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

    function editCircle(id,radius, pos, color , segments) {
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

    function setUpdateItem(item) {
        setItems((prevState) => [...prevState,
            prevState.map((it,ix) => {
                if (it.id == item.id) {
                    return item
                }
            })
        ])
    }

    const value = {
        editBox,
        editCircle,
        editDiamond,
        editPlane,
        editSphere,
        setUpdateItem
    }

    return (
        <EditingContext.Provider value={value}>
            {children}
        </EditingContext.Provider>
    )
}