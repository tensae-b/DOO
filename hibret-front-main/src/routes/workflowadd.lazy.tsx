import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export const Route = createFileRoute("/workflowtemp")({
  component: () => <WorkFlowAddTemp />,
});

function WorkFlowAddTemp() {}