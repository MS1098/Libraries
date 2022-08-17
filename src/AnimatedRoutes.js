import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Page from "./Page";
import Product1 from "./Product1";
// import Product2 from "./Product2";
// import Product3 from "./Product3";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes=()=>{
    const location=useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/"  element={<Page/>}></Route>
                <Route path="/Product1" element={<Product1/>}></Route>
                {/* <Route path="/Product2" element={<Product2/>}></Route> */}
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes;



