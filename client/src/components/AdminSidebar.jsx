import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SaveIcon from '@mui/icons-material/Save';
import RestoreIcon from '@mui/icons-material/Restore';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BorderColorIcon from '@mui/icons-material/BorderColor';


export default function AdminSidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <List>
                    <ListItem disablePadding>
                        <Link to="/home" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/CreateOrders" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create Orders" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/SavedOrders" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <SaveIcon />
                                </ListItemIcon>
                                <ListItemText primary="Saved Orders" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/ActiveOrders" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <RestoreIcon />
                                </ListItemIcon>
                                <ListItemText primary="Active Orders" />
                            </ListItemButton>
                        </Link>    
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/PreviousOrders" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <FastRewindIcon />
                                </ListItemIcon>
                                <ListItemText primary="Previous Orders" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/CalenderPO" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <CalendarViewMonthIcon />
                                </ListItemIcon>
                                <ListItemText primary="Calender Previous Orders" />
                            </ListItemButton>
                        </Link>    
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/AdminDashboard/ApprovedOrders" underline="hover">
                            <ListItemButton>
                                <ListItemIcon>
                                    <BorderColorIcon />
                                </ListItemIcon>
                                <ListItemText primary="Approved Orders" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    </List>
            </div>
        </div>
    )
}
