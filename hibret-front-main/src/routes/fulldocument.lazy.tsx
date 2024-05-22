import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import NoData from "../components/NoData";
export const Route = createLazyFileRoute("/fulldocument")({
  component: () => <FullPagePdfView />,
});

const FullPagePdfView = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/asset/icons/trypdf.pdf"
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default FullPagePdfView;