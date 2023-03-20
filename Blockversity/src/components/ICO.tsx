import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    getBVTBalance,
    getFUSDBalance,
    getIsSaleActive,
    getPrice,
    getPurchasers,
    setupBVT,
    deployICO,
    depositBVT,
    pause,
    unPause,
    withdrawBVT,
    refund,
    distribute,
} from "../Flow/ICOActions";

const ICO: React.FC = () => {
    return (
        <div>ICO</div>
    )
}

export default ICO;