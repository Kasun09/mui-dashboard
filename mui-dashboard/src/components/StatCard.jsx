import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value }) => {
    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                    {title}
                </Typography>

                <Typography variant="h4">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StatCard;
