import { Grid, Typography } from "@mui/material";
import StatCard from "../components/StatCard";

const Dashboard = () => {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Users" value="1,245" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Orders" value="312" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Revenue" value="$8,420" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Growth" value="+12%" />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
