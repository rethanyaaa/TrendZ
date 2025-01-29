import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; // Box for layout
import Sidebar from "./components/Shared/Sidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Engagement from "./pages/Engagement";
import Sentiment from "./pages/Sentiment";
import Demographics from "./pages/Demographics";
import Influencers from "./pages/Influencers";
import Hashtags from "./pages/Hashtags";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      {/* Main application layout */}
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#f5f5f5", // Light gray background for the content area
            p: 3, // Padding around the content
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/sentiment" element={<Sentiment />} />
            <Route path="/demographics" element={<Demographics />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/hashtags" element={<Hashtags />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
