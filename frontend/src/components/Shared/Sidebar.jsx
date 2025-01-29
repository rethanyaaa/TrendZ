import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Home as HomeIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Tag as TagIcon,
  Person as PersonIcon,
  InsertDriveFile as InsertDriveFileIcon
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#63b3ed' : '#fff',
    textDecoration: 'none',
  });

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1a202c',
          color: '#fff',
        },
      }}
    >
      <div style={{ padding: '16px', fontWeight: 'bold', fontSize: '1.25rem', borderBottom: '1px solid #2d3748' }}>
        Analytics Tool
      </div>
      <List>
        <ListItem button component={NavLink} to="/dashboard" style={navLinkStyles}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/engagement" style={navLinkStyles}>
          <ListItemIcon>
            <BarChartIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Engagement" />
        </ListItem>
        <ListItem button component={NavLink} to="/sentiment" style={navLinkStyles}>
          <ListItemIcon>
            <PeopleIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Sentiment Analysis" />
        </ListItem>
        <ListItem button component={NavLink} to="/audience" style={navLinkStyles}>
          <ListItemIcon>
            <PersonIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Audience Insights" />
        </ListItem>
        <ListItem button component={NavLink} to="/content" style={navLinkStyles}>
          <ListItemIcon>
            <TrendingUpIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Content Metrics" />
        </ListItem>
        <ListItem button component={NavLink} to="/hashtags" style={navLinkStyles}>
          <ListItemIcon>
            <TagIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Hashtag Analytics" />
        </ListItem>
        <ListItem button component={NavLink} to="/influencers" style={navLinkStyles}>
          <ListItemIcon>
            <PersonIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Influencer Analysis" />
        </ListItem>
        <ListItem button component={NavLink} to="/reports" style={navLinkStyles}>
          <ListItemIcon>
            <InsertDriveFileIcon style={{ color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
