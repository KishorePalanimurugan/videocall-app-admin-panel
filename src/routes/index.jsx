import React from "react";

// // Profile
import UserProfile from "../pages/Authentication/user-profile";

// // Authentication related pages
import Login from "../pages/Authentication/Login";

// // Dashboard
import Dashboard from "../pages/Dashboard/index";
import { components } from "react-select";
import BoysList from "../pages/Users Management/Boys List/BoysList";
import GirlsList from "../pages/Users Management/Girls list/GirlsList";
import Payments from "../pages/Payments/Payments";
import Earnings from "../pages/Earnings/Earnings";
import CallHistory from "../pages/Call History/CallHistory";
import SettleMents from "../pages/Settlement/Settlements";
import PriceDetails from "../pages/Price Details/PriceDetails";

const authProtectedRoutes = [
  //Dashboard
  { path: "/dashboard", component: <Dashboard /> },

  //profile
  { path: "/profile", component: <UserProfile /> },

  //User Management
  { path: "/boys-list", component: <BoysList /> },
  { path: "/girls-list", component: <GirlsList /> },

  //Payments
  { path: "/payments", component: <Payments /> },

  //Earnings
  { path: "/earnings", component: <Earnings /> },

  //Call History
  { path: "/call-history", component: <CallHistory /> },

  //Settlements
  { path: "/settlement", component: <SettleMents /> },

  //Price Details
  { path: "/price-details", component: <PriceDetails /> },
];

const publicRoutes = [{ path: "/", component: <Login /> }];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes };
