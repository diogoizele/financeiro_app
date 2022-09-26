import { Routes, Route } from "react-router-dom";

import {
  Contribution,
  Expense,
  Home,
  Income,
  Login,
  Purchase,
} from "../screens";
import { PrivateRoute } from "../routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/activity/expense"
        element={
          <PrivateRoute>
            <Expense />
          </PrivateRoute>
        }
      />
      <Route
        path="/activity/income"
        element={
          <PrivateRoute>
            <Income />
          </PrivateRoute>
        }
      />
      <Route
        path="/activity/contribution"
        element={
          <PrivateRoute>
            <Contribution />
          </PrivateRoute>
        }
      />
      <Route
        path="/purchase"
        element={
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
