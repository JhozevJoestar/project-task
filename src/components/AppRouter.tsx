import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./../routes/index";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
