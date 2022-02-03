import React, { useState, useEffect, useCallback } from "react";

function UseCallback() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);

    const plusFive = useCallback(() => {
        console.log("I was called!");
        return num + 5;
    }, [num]);

    return (
        <div className={light ? "light" : "dark"}>
            <div>
                <h1>With useCallback </h1>
                <h2>
                    Current number: {num},
                    <SomeComp someFunc={plusFive} />
                </h2>
                <div className="button-container">
                    <button
                        onClick={() => {
                            setNum(num + 1);
                        }}
                    >
                        Update Number{" "}
                    </button>
                    <button
                        onClick={() => {
                            setLight(!light);
                        }}
                    >
                        {" "}
                        Toggle the light{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

const SomeComp = ({ someFunc }) => {
    const [calcNum, setCalcNum] = useState(0);
    useEffect(() => {
        setCalcNum(someFunc());
    }, [someFunc]);

    return <span> Plus five: {calcNum}</span>;
};



export default UseCallback;

