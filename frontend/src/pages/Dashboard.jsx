import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import EngagementCard from "../components/Cards/EngagementCard";
import SentimentCard from "../components/Cards/SentimentCard";
import HashtagCard from "../components/Cards/HashtagCard";
import LineChart from "../components/Charts/LineChart";
import Heatmap from "../components/Charts/Heatmap";

const Dashboard = () => {
  // Mock data for now
  const engagementData = { likes: 1200, shares: 300, comments: 450 };
  const sentimentData = { positive: 70, neutral: 20, negative: 10 };
  const hashtagData = { trending: ["#ReactJS", "#MaterialUI", "#Dashboard"] };

  return (
    <Box
      sx={{ padding: "24px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}
    >
      {/* Top Section: Metric Summary Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <EngagementCard data={engagementData} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SentimentCard data={sentimentData} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <HashtagCard data={hashtagData} />
        </Grid>
      </Grid>

      {/* Middle Section: Line Chart */}
      <Box sx={{ marginTop: "32px" }}>
        <Typography variant="h6" gutterBottom>
          Engagement Trends
        </Typography>
        <LineChart />
      </Box>

      {/* Bottom Section: Heatmap */}
      <Box sx={{ marginTop: "32px" }}>
        <Typography variant="h6" gutterBottom>
          Hashtag Activity Heatmap
        </Typography>
        <Heatmap />
      </Box>
    </Box>
  );
};

export default Dashboard;
