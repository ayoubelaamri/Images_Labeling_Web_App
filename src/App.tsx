import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { DataConsumer, DataProvider } from "./context/global-context";

import Login from "./pages/Login";
import Workflow from "./pages/Workflow";
import NotFound from "./pages/NotFound";
import Captcha from "./pages/Captcha";

function App() {
  return (
    <DataProvider>
      <DataConsumer>
        {(globalContext) => {
          return (
            <Routes>
              <Route path="/" element={globalContext.authState.authenticated ? (
                <Navigate to="/workflow" />
              ):(
                <Navigate to="/login" />
              )} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/captcha" element={<Captcha />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          );
        }}
      </DataConsumer>
    </DataProvider>
  );
}

export default App;
