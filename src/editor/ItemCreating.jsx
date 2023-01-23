import React, { useState } from 'react'
import { useRef } from 'react';
import { UseCreate } from '../context/EditorContext'

const ItemCreating = () => {

    const { 
        createBox,
        createPlane,
        createSphere,
        createDiamond,
        createCircle,
        setItems,
        addItem
    } = UseCreate();
    const [name,setName] = useState("")
    const handleCreating = (name) => {
        setName(name)
    }

    // 
    const createNames = ["box","circle","diamond","sphere","plane"]

    const scaleX = useRef()
    const scaleY = useRef()
    const scaleZ = useRef()
    const posX = useRef()
    const posY = useRef()
    const posZ = useRef()
    const rad = useRef()
    const seg = useRef()
    const widseg = useRef()
    const heightseg = useRef()
    const color = useRef()
    // 

    const handleSubmit = (e) => {

        if (name == "box") {
            const {x,y,z} = {
                x: scaleX.current.value,
                y: scaleX.current.value,
                z: scaleX.current.value
            }
            const {x_s,y_s,z_s} = {
                x_s: posX.current.value,
                y_s: posY.current.value,
                z_s: posZ.current.value
            }
            addItem(
                createBox(
                    [x,y,z],
                    [x_s,y_s,z_s],
                    color.current.value
                )
            )
            setItems((prevState) => [...prevState,
            ])
        }
        if (name == "circle") {
            const {r,s} = {
                r: rad.current.value,
                s: seg.current.value
            }
            const {x_s,y_s,z_s} = {
                x_s: posX.current.value,
                y_s: posY.current.value,
                z_s: posZ.current.value
            }
            addItem(
                createCircle(
                    r,
                    [x_s,y_s,z_s],
                    color.current.value,
                    s
                )
            )

        }
        if (name == "diamond") {
            const {r} = {
                r: rad.current.value,
            }
            const {x_s,y_s,z_s} = {
                x_s: posX.current.value,
                y_s: posY.current.value,
                z_s: posZ.current.value
            }
            addItem(
                createDiamond(
                    r,
                    [x_s,y_s,z_s],
                    color.current.value,
                )
            )
        }
        if (name == "sphere") {
            const {r,ws,hs} = {
                r: rad.current.value,
                ws: widseg.current.value,
                hs: heightseg.current.value,
            }
            const {x_s,y_s,z_s} = {
                x_s: posX.current.value,
                y_s: posY.current.value,
                z_s: posZ.current.value
            }
            addItem(
                createSphere(
                    [r,ws,hs],
                    [x_s,y_s,z_s],
                    color.current.value,
                )
            )
        }
        if (name == "plane") {
            const {x,y,z} = {
                x: scaleX.current.value,
                y: scaleY.current.value,
            }
            const {x_s,y_s,z_s} = {
                x_s: posX.current.value,
                y_s: posY.current.value,
                z_s: posZ.current.value
            }
            addItem(
                createPlane(
                    [x,y],
                    [x_s,y_s,z_s],
                    color.current.value,
                )
            )
        }
    }


    return (
        <>
            <div className="create-shapes">
                {name && <>
                { name == "box" ? <>
                    <div className="text-plate">
                        <div className="exit" onClick={e => handleCreating("")}>
                            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.8 146.2C151.175 146.564 151.473 146.999 151.677 147.48C151.88 147.961 151.985 148.478 151.985 149C151.985 149.522 151.88 150.039 151.677 150.52C151.473 151.001 151.175 151.437 150.8 151.8C150.436 152.175 150.001 152.473 149.52 152.677C149.039 152.88 148.522 152.985 148 152.985C147.478 152.985 146.961 152.88 146.48 152.677C145.999 152.473 145.563 152.175 145.2 151.8L75.9999 82.7001L6.79987 151.8C6.4363 152.175 6.00112 152.473 5.52013 152.677C5.03915 152.88 4.52217 152.985 3.99987 152.985C3.47758 152.985 2.9606 152.88 2.47961 152.677C1.99863 152.473 1.56345 152.175 1.19987 151.8C0.824891 151.437 0.526756 151.001 0.323158 150.52C0.119561 150.039 0.0146484 149.522 0.0146484 149C0.0146484 148.478 0.119561 147.961 0.323158 147.48C0.526756 146.999 0.824891 146.564 1.19987 146.2L70.2999 77.0001L1.19987 7.8001C0.622159 7.02981 0.341683 6.07698 0.409939 5.11654C0.478195 4.15611 0.8906 3.25252 1.57145 2.57167C2.25229 1.89083 3.15588 1.47842 4.11632 1.41016C5.07676 1.34191 6.02958 1.62238 6.79987 2.2001L75.9999 71.3001L145.2 2.2001C145.544 1.74163 145.982 1.3624 146.485 1.08809C146.988 0.813774 147.545 0.650787 148.116 0.610161C148.688 0.569535 149.262 0.652221 149.799 0.852616C150.335 1.05301 150.823 1.36644 151.228 1.77167C151.634 2.17691 151.947 2.66449 152.147 3.2014C152.348 3.73831 152.43 4.31201 152.39 4.88366C152.349 5.4553 152.186 6.01154 151.912 6.51472C151.638 7.01789 151.258 7.45625 150.8 7.8001L81.6999 77.0001L150.8 146.2Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="plate">
                            <h6> Scale </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={scaleX}/>
                                <input type="text" placeholder='y' ref={scaleY}/>
                                <input type="text" placeholder='z' ref={scaleZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Position </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={posX}/>
                                <input type="text" placeholder='y' ref={posY}/>
                                <input type="text" placeholder='z' ref={posZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Color </h6>
                            <div className="forms">
                                <input type="text" ref={color} placeholder='color(HEX)' defaultValue={"#000"}/>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Submit </button>
                    </div>
                </> : <></>}
                { name == "circle" ? <>
                    <div className="text-plate">
                        <div className="exit" onClick={e => handleCreating("")}>
                            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.8 146.2C151.175 146.564 151.473 146.999 151.677 147.48C151.88 147.961 151.985 148.478 151.985 149C151.985 149.522 151.88 150.039 151.677 150.52C151.473 151.001 151.175 151.437 150.8 151.8C150.436 152.175 150.001 152.473 149.52 152.677C149.039 152.88 148.522 152.985 148 152.985C147.478 152.985 146.961 152.88 146.48 152.677C145.999 152.473 145.563 152.175 145.2 151.8L75.9999 82.7001L6.79987 151.8C6.4363 152.175 6.00112 152.473 5.52013 152.677C5.03915 152.88 4.52217 152.985 3.99987 152.985C3.47758 152.985 2.9606 152.88 2.47961 152.677C1.99863 152.473 1.56345 152.175 1.19987 151.8C0.824891 151.437 0.526756 151.001 0.323158 150.52C0.119561 150.039 0.0146484 149.522 0.0146484 149C0.0146484 148.478 0.119561 147.961 0.323158 147.48C0.526756 146.999 0.824891 146.564 1.19987 146.2L70.2999 77.0001L1.19987 7.8001C0.622159 7.02981 0.341683 6.07698 0.409939 5.11654C0.478195 4.15611 0.8906 3.25252 1.57145 2.57167C2.25229 1.89083 3.15588 1.47842 4.11632 1.41016C5.07676 1.34191 6.02958 1.62238 6.79987 2.2001L75.9999 71.3001L145.2 2.2001C145.544 1.74163 145.982 1.3624 146.485 1.08809C146.988 0.813774 147.545 0.650787 148.116 0.610161C148.688 0.569535 149.262 0.652221 149.799 0.852616C150.335 1.05301 150.823 1.36644 151.228 1.77167C151.634 2.17691 151.947 2.66449 152.147 3.2014C152.348 3.73831 152.43 4.31201 152.39 4.88366C152.349 5.4553 152.186 6.01154 151.912 6.51472C151.638 7.01789 151.258 7.45625 150.8 7.8001L81.6999 77.0001L150.8 146.2Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="plate">
                            <h6> Radius/Segments </h6>
                            <div className="forms">
                                <input type="text" placeholder='r' ref={rad}/>
                                <input type="text" placeholder='s' ref={seg}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Position </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={posX}/>
                                <input type="text" placeholder='y' ref={posY}/>
                                <input type="text" placeholder='z' ref={posZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Color </h6>
                            <div className="forms">
                                <input type="text" ref={color} placeholder='color(HEX)' defaultValue={"#000"}/>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Submit </button>
                    </div>
                </> : <></>}
                { name == "diamond" ? <>
                    <div className="text-plate">
                        <div className="exit" onClick={e => handleCreating("")}>
                            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.8 146.2C151.175 146.564 151.473 146.999 151.677 147.48C151.88 147.961 151.985 148.478 151.985 149C151.985 149.522 151.88 150.039 151.677 150.52C151.473 151.001 151.175 151.437 150.8 151.8C150.436 152.175 150.001 152.473 149.52 152.677C149.039 152.88 148.522 152.985 148 152.985C147.478 152.985 146.961 152.88 146.48 152.677C145.999 152.473 145.563 152.175 145.2 151.8L75.9999 82.7001L6.79987 151.8C6.4363 152.175 6.00112 152.473 5.52013 152.677C5.03915 152.88 4.52217 152.985 3.99987 152.985C3.47758 152.985 2.9606 152.88 2.47961 152.677C1.99863 152.473 1.56345 152.175 1.19987 151.8C0.824891 151.437 0.526756 151.001 0.323158 150.52C0.119561 150.039 0.0146484 149.522 0.0146484 149C0.0146484 148.478 0.119561 147.961 0.323158 147.48C0.526756 146.999 0.824891 146.564 1.19987 146.2L70.2999 77.0001L1.19987 7.8001C0.622159 7.02981 0.341683 6.07698 0.409939 5.11654C0.478195 4.15611 0.8906 3.25252 1.57145 2.57167C2.25229 1.89083 3.15588 1.47842 4.11632 1.41016C5.07676 1.34191 6.02958 1.62238 6.79987 2.2001L75.9999 71.3001L145.2 2.2001C145.544 1.74163 145.982 1.3624 146.485 1.08809C146.988 0.813774 147.545 0.650787 148.116 0.610161C148.688 0.569535 149.262 0.652221 149.799 0.852616C150.335 1.05301 150.823 1.36644 151.228 1.77167C151.634 2.17691 151.947 2.66449 152.147 3.2014C152.348 3.73831 152.43 4.31201 152.39 4.88366C152.349 5.4553 152.186 6.01154 151.912 6.51472C151.638 7.01789 151.258 7.45625 150.8 7.8001L81.6999 77.0001L150.8 146.2Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="plate">
                            <h6> Radius </h6>
                            <div className="forms">
                                <input type="text" placeholder='r' ref={rad}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Position </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={posX}/>
                                <input type="text" placeholder='y' ref={posY}/>
                                <input type="text" placeholder='z' ref={posZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Color </h6>
                            <div className="forms">
                                <input type="text" ref={color} placeholder='color(HEX)' defaultValue={"#000"}/>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Submit </button>
                    </div>
                </> : <></>}
                { name == "sphere" ? <>
                    <div className="text-plate">
                        <div className="exit" onClick={e => handleCreating("")}>
                            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.8 146.2C151.175 146.564 151.473 146.999 151.677 147.48C151.88 147.961 151.985 148.478 151.985 149C151.985 149.522 151.88 150.039 151.677 150.52C151.473 151.001 151.175 151.437 150.8 151.8C150.436 152.175 150.001 152.473 149.52 152.677C149.039 152.88 148.522 152.985 148 152.985C147.478 152.985 146.961 152.88 146.48 152.677C145.999 152.473 145.563 152.175 145.2 151.8L75.9999 82.7001L6.79987 151.8C6.4363 152.175 6.00112 152.473 5.52013 152.677C5.03915 152.88 4.52217 152.985 3.99987 152.985C3.47758 152.985 2.9606 152.88 2.47961 152.677C1.99863 152.473 1.56345 152.175 1.19987 151.8C0.824891 151.437 0.526756 151.001 0.323158 150.52C0.119561 150.039 0.0146484 149.522 0.0146484 149C0.0146484 148.478 0.119561 147.961 0.323158 147.48C0.526756 146.999 0.824891 146.564 1.19987 146.2L70.2999 77.0001L1.19987 7.8001C0.622159 7.02981 0.341683 6.07698 0.409939 5.11654C0.478195 4.15611 0.8906 3.25252 1.57145 2.57167C2.25229 1.89083 3.15588 1.47842 4.11632 1.41016C5.07676 1.34191 6.02958 1.62238 6.79987 2.2001L75.9999 71.3001L145.2 2.2001C145.544 1.74163 145.982 1.3624 146.485 1.08809C146.988 0.813774 147.545 0.650787 148.116 0.610161C148.688 0.569535 149.262 0.652221 149.799 0.852616C150.335 1.05301 150.823 1.36644 151.228 1.77167C151.634 2.17691 151.947 2.66449 152.147 3.2014C152.348 3.73831 152.43 4.31201 152.39 4.88366C152.349 5.4553 152.186 6.01154 151.912 6.51472C151.638 7.01789 151.258 7.45625 150.8 7.8001L81.6999 77.0001L150.8 146.2Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="plate">
                            <h6> Radius </h6>
                            <div className="forms">
                                <input type="text" placeholder='r' ref={rad}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Segments </h6>
                            <div className="forms">
                                <input type="text" placeholder='width' ref={widseg}/>
                                <input type="text" placeholder='height' ref={heightseg}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Position </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={posX}/>
                                <input type="text" placeholder='y' ref={posY}/>
                                <input type="text" placeholder='z' ref={posZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Color </h6>
                            <div className="forms">
                                <input type="text" ref={color} placeholder='color(HEX)' defaultValue={"#000"}/>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Submit </button>
                    </div>
                </> : <></>}
                { name == "plane" ? <>
                    <div className="text-plate">
                        <div className="exit" onClick={e => handleCreating("")}>
                            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150.8 146.2C151.175 146.564 151.473 146.999 151.677 147.48C151.88 147.961 151.985 148.478 151.985 149C151.985 149.522 151.88 150.039 151.677 150.52C151.473 151.001 151.175 151.437 150.8 151.8C150.436 152.175 150.001 152.473 149.52 152.677C149.039 152.88 148.522 152.985 148 152.985C147.478 152.985 146.961 152.88 146.48 152.677C145.999 152.473 145.563 152.175 145.2 151.8L75.9999 82.7001L6.79987 151.8C6.4363 152.175 6.00112 152.473 5.52013 152.677C5.03915 152.88 4.52217 152.985 3.99987 152.985C3.47758 152.985 2.9606 152.88 2.47961 152.677C1.99863 152.473 1.56345 152.175 1.19987 151.8C0.824891 151.437 0.526756 151.001 0.323158 150.52C0.119561 150.039 0.0146484 149.522 0.0146484 149C0.0146484 148.478 0.119561 147.961 0.323158 147.48C0.526756 146.999 0.824891 146.564 1.19987 146.2L70.2999 77.0001L1.19987 7.8001C0.622159 7.02981 0.341683 6.07698 0.409939 5.11654C0.478195 4.15611 0.8906 3.25252 1.57145 2.57167C2.25229 1.89083 3.15588 1.47842 4.11632 1.41016C5.07676 1.34191 6.02958 1.62238 6.79987 2.2001L75.9999 71.3001L145.2 2.2001C145.544 1.74163 145.982 1.3624 146.485 1.08809C146.988 0.813774 147.545 0.650787 148.116 0.610161C148.688 0.569535 149.262 0.652221 149.799 0.852616C150.335 1.05301 150.823 1.36644 151.228 1.77167C151.634 2.17691 151.947 2.66449 152.147 3.2014C152.348 3.73831 152.43 4.31201 152.39 4.88366C152.349 5.4553 152.186 6.01154 151.912 6.51472C151.638 7.01789 151.258 7.45625 150.8 7.8001L81.6999 77.0001L150.8 146.2Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="plate">
                            <h6> Scale </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={scaleX}/>
                                <input type="text" placeholder='y' ref={scaleY}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Position </h6>
                            <div className="forms">
                                <input type="text" placeholder='x' ref={posX}/>
                                <input type="text" placeholder='y' ref={posY}/>
                                <input type="text" placeholder='z' ref={posZ}/>
                            </div>
                        </div>
                        <div className="plate">
                            <h6> Color </h6>
                            <div className="forms">
                                <input type="text" ref={color} placeholder='color(HEX)' defaultValue={"#000"}/>
                            </div>
                        </div>
                        <button onClick={handleSubmit}> Submit </button>
                    </div>
                </> : <></>}
                </>}
                <div className="box" onClick={e => handleCreating("box")}>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.9102 16.8895V16.7061L46.7727 16.3624C46.7249 16.2894 46.6712 16.2205 46.6123 16.1561C46.551 16.0591 46.482 15.9671 46.4061 15.8811L46.1998 15.7207L45.8331 15.5374L28.6456 4.92695C28.2814 4.69931 27.8606 4.57861 27.4311 4.57861C27.0016 4.57861 26.5807 4.69931 26.2165 4.92695L9.16647 15.5374L8.96022 15.7207L8.75397 15.8811C8.678 15.9671 8.60903 16.0591 8.54772 16.1561C8.48881 16.2205 8.43516 16.2894 8.3873 16.3624L8.2498 16.7061V16.8895C8.22728 17.0874 8.22728 17.2873 8.2498 17.4853V37.5145C8.24902 37.9039 8.34751 38.2871 8.53597 38.628C8.72442 38.9688 8.99663 39.256 9.32689 39.4624L26.5144 50.0728C26.6202 50.1381 26.7365 50.1846 26.8581 50.2103C26.8581 50.2103 26.9727 50.2103 27.0415 50.2103C27.4292 50.3333 27.8454 50.3333 28.2331 50.2103H28.4165C28.5381 50.1846 28.6544 50.1381 28.7602 50.0728L45.8331 39.4624C46.1634 39.256 46.4356 38.9688 46.6241 38.628C46.8125 38.2871 46.911 37.9039 46.9102 37.5145V17.4853C46.9327 17.2873 46.9327 17.0874 46.9102 16.8895ZM25.2081 44.0228L12.604 36.2311V21.6103L25.2081 29.379V44.0228ZM27.4998 25.4145L14.6665 17.4853L27.4998 9.57903L40.3331 17.4853L27.4998 25.4145ZM42.3956 36.2311L29.7915 44.0228V29.379L42.3956 21.6103V36.2311Z" fill="black"/>
                    </svg>
                </div>
                <div className="circle" onClick={e => handleCreating("circle")}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.25 11C0.25 5.06279 5.06279 0.25 11 0.25C16.9372 0.25 21.75 5.06279 21.75 11C21.75 16.9372 16.9372 21.75 11 21.75C5.06279 21.75 0.25 16.9372 0.25 11ZM11 1.75C5.89121 1.75 1.75 5.89121 1.75 11C1.75 16.1088 5.89121 20.25 11 20.25C16.1088 20.25 20.25 16.1088 20.25 11C20.25 5.89121 16.1088 1.75 11 1.75Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.40037 4.31474C6.39568 5.98926 5.75 8.35104 5.75 11C5.75 13.649 6.39568 16.0107 7.40037 17.6853C8.41401 19.3747 9.70992 20.25 11 20.25C11.4142 20.25 11.75 20.5858 11.75 21C11.75 21.4142 11.4142 21.75 11 21.75C8.97608 21.75 7.27199 20.3868 6.11413 18.457C4.94732 16.5123 4.25 13.874 4.25 11C4.25 8.12596 4.94732 5.48774 6.11413 3.54301C7.27199 1.61319 8.97608 0.25 11 0.25C11.4142 0.25 11.75 0.585786 11.75 1C11.75 1.41421 11.4142 1.75 11 1.75C9.70992 1.75 8.41401 2.62531 7.40037 4.31474Z" fill="black"/>
                    </svg>
                </div>
                <div className="diamond" onClick={e => handleCreating("diamond")}>
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 10L7 20L0 10L7 0" fill="black"/>
                    </svg>
                </div>
                <div className="sphere" onClick={e => handleCreating("sphere")}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0ZM11.744 10C11.878 9.368 11.963 8.697 11.99 8H13.981C13.9294 8.68801 13.7677 9.36328 13.502 10H11.744ZM3.256 5C3.11749 5.65849 3.03519 6.32757 3.01 7H1.019C1.07055 6.31199 1.23228 5.63672 1.498 5H3.256ZM10.719 5C10.869 5.64 10.96 6.31 10.989 7H8V5H10.719ZM8 4V1.073C8.228 1.139 8.454 1.251 8.675 1.407C9.09 1.7 9.488 2.151 9.824 2.711C10.057 3.099 10.258 3.53 10.425 4H8ZM5.176 2.711C5.512 2.15 5.91 1.699 6.325 1.407C6.547 1.251 6.772 1.139 7 1.073V4H4.574C4.73184 3.55177 4.93413 3.12005 5.176 2.711ZM7 5V7H4.011C4.04 6.31 4.131 5.64 4.281 5H7ZM1.498 10C1.23228 9.36328 1.07055 8.68801 1.019 8H3.01C3.038 8.697 3.122 9.368 3.256 10H1.498ZM4.011 8H7V10H4.281C4.131 9.36 4.04 8.69 4.011 8ZM7 11V13.927C6.75797 13.854 6.52983 13.7411 6.325 13.593C5.91 13.3 5.512 12.849 5.176 12.289C4.93339 11.8802 4.73175 11.4484 4.574 11H7ZM9.825 12.289C9.489 12.85 9.091 13.301 8.676 13.593C8.47105 13.7409 8.24295 13.8538 8.001 13.927V11H10.427C10.259 11.47 10.058 11.901 9.825 12.289ZM8 10V8H10.989C10.96 8.69 10.869 9.36 10.719 10H8ZM11.99 7C11.9643 6.32761 11.882 5.65858 11.744 5H13.502C13.769 5.639 13.929 6.309 13.981 7H11.99ZM12.979 4H11.481C11.19 3.082 10.788 2.277 10.304 1.634C10.9694 1.95197 11.5755 2.38151 12.096 2.904C12.432 3.24 12.727 3.606 12.979 4ZM2.904 2.904C3.42487 2.38196 4.03087 1.95248 4.696 1.634C4.213 2.277 3.81 3.082 3.519 4H2.021C2.273 3.606 2.568 3.239 2.904 2.904ZM2.021 11H3.519C3.81 11.918 4.212 12.723 4.696 13.366C4.03057 13.048 3.42449 12.6185 2.904 12.096C2.57089 11.7637 2.27483 11.3962 2.021 11ZM12.096 12.096C11.5751 12.618 10.9691 13.0475 10.304 13.366C10.787 12.723 11.19 11.918 11.481 11H12.979C12.7254 11.3964 12.4293 11.7639 12.096 12.096Z" fill="black"/>
                    </svg>
                </div>
                <div className="plane" onClick={e => handleCreating("plane")}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18V0H18V18H0ZM2 16H16V2H2V16Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ItemCreating