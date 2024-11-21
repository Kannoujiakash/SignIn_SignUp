import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        height: "70vh",
        width: "100vw",
        backgroundColor: "navajowhite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
