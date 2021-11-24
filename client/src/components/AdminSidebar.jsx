import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RestoreIcon from "@mui/icons-material/Restore";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function AdminSidebar() {
<<<<<<< HEAD
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/admin/home">
                <ListItemText primary="Home" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Saved Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RestoreIcon />
              </ListItemIcon>
              <ListItemText primary="Active Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FastRewindIcon />
              </ListItemIcon>
              <ListItemText primary="Previous Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarViewMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calender Previous Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorIcon />
              </ListItemIcon>
              <ListItemText primary="Approved Orders" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
=======
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <List>
                <Link to="/home">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Saved Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <RestoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Active Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FastRewindIcon />
                        </ListItemIcon>
                        <ListItemText primary="Previous Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarViewMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calender Previous Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <ListItemText primary="Approved Orders" />
                    </ListItemButton>
                </ListItem>
                </List>
            </div>
        </div>
    )
>>>>>>> 0225dfaffe456cafccc16b2fabe00d77d514c0b9
}
