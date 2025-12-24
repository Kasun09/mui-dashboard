import { useEffect, useState } from "react";
import {
    Grid,
    Typography,
    CircularProgress,
    Alert,
} from "@mui/material";
import StatCard from "../components/StatCard";
import { api } from "../services/api";

const Dashboard = () => {
    const [usersCount, setUsersCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get("/users");
                setUsersCount(res.data.total);
            } catch (err) {
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard title="Users" value={usersCount} />
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
