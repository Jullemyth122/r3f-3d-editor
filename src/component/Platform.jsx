import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import React, { Suspense,useRef,useEffect,useMemo,forwardRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { Mesh } from 'three'
import { OrbitControls  } from '@react-three/drei'
import CreatingItem from '../editor/CreatingItem'
import { useState } from 'react'
import ItemCreating from '../editor/ItemCreating'
import { UseCreate } from '../context/EditorContext'

const Scene = () => {

    const { items } = UseCreate();
    const cameraRef = useRef(null)
    const [positions, setPositions] = useState([]);

    const {
        camera, gl:{domElement},
    } = useThree()

    useEffect(() => {
        camera.position.set(5,10,0)
        camera.lookAt(0,0,0)
        cameraRef.current = camera
        console.log("Camera",cameraRef.current.position)
    },[camera])

    useEffect(() => {
        console.log(cameraRef.current.position)
    },[cameraRef])

    useFrame((state) => {
        cameraRef.current = camera;
        if (cameraRef.current) {
            let pos = [
                { x: -2, y: 0, z: 0 },
                { x: 2, y: 0, z: 0 },
                { x: 0, y: 2, z: 0 },
                { x: 0, y: -2, z: 0 },
                { x: 0, y: 0, z: 2 },
                { x: 0, y: 0, z: -2 }
            ].map(pos => [
                (cameraRef.current.position.x - 5) + pos.x,
                (cameraRef.current.position.y - 2) + pos.y,
                (cameraRef.current.position.z) + pos.z
            ]);
            setPositions(pos);
        }
    });


    return (
        <>
            <OrbitControls 
                ref={cameraRef} 
                target={[0,0,0]} 
                args={[camera,domElement]} 
            />
            <color attach={"background"} args={[0,0,0]}></color>
            {/* Initializing Point Light Of the Box Created */}
            {/* This six point lights should follow where-ever the camera goes to make it look like 
                a normal map effect in lights
            */}
            {positions.map((position, index) => {
                return (
                    <pointLight key={index} color={"white"} intensity="1" position={position} />
                )
            })}
            <ambientLight intensity="1"/>

            <spotLight 
                color={"gray"}
                position={[0,10,0]} 
                scale={[100,100,100]} 
                // target={[0,0,0]}
                intensity="5" 
                castShadow
            ></spotLight>
            <mesh
                scale={[2,2,2]}
                rotation={[Math.PI/2,0,0]}
            >
                <planeGeometry args={[50,50,50,50]}></planeGeometry>
                <meshBasicMaterial
                    side={THREE.DoubleSide}
                    wireframe={true}
                    color={0xcccffccc}
                />
            </mesh>
            {items.map((elem,i) => (elem))}
            {/* <CreatingItem/> */}
        </>
    )
}


const Platform = () => {
    return (
        <div className='platform-component-main'>
            <div className="editor-sidebar-right">
                <ItemCreating/>
            </div>
            <div className="main-platform">
                <Canvas 
                    linear 
                    shadows 
                    gl={{antialias:true}}
                    id="platform-main" 
                >
                <Suspense fallback={null}>
                    <Scene></Scene>
                </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Platform