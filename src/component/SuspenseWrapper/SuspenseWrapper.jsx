import React, { lazy, Suspense } from "react";

const SuspenseWrapper = (props) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default SuspenseWrapper;

const customStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Loading = () => <div style={customStyle}>Loading</div>;
