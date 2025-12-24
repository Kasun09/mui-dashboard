import { Drawer, List, ListItem, ListItemText, Toolbar, ListItemButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { text: "Dashboard", path: "/" },
        { text: "Users", path: "/users" },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />

            <List>
                {menuItems.map(({ text, path }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={path}
                            selected={location.pathname === path}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
