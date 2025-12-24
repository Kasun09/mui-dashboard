import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Admin Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
