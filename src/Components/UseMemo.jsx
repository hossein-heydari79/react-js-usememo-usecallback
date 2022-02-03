import React, { useState, useMemo } from "react";

const plusFive = (num) => {
    console.log("i was called!");
    return num + 5;
};

function UseMemo() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);

    const numPlusFive = useMemo(() => {
        return plusFive(num);
    }, [num])

    return (
        <div className={light ? "light" : "dark"}>
            <div>
                <h1>With useMemo</h1>
                <h2>
                    Current number: {num}, Plus five: {numPlusFive}
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


export default UseMemo;