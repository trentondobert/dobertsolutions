import React from "react";
import "./pagewrapper.scss";
import NavBar from "../NavBar/NavBar";

const PageWrapper = ({ children }) => {
    return (
        <div className="page-wrapper">
            <NavBar />
            <main className="page-content">
                {children}
            </main>
            <footer className="page-footer">
                &copy; {new Date().getFullYear()} Dobert Solutions. All rights reserved.
            </footer>
        </div>
    );
};

export default PageWrapper;
