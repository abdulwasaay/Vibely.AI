"use client"
import { Plan } from "@/components";
import { Box, Typography, Grid, useTheme, Chip } from "@mui/material";

const plans = [
    {
        title: "Basic",
        desc: "Best for personal use.",
        price: "Rs 100",
        credits: "100 credits",
        icon: "/logo.png",
    },
    {
        title: "Advanced",
        desc: "Best for business use.",
        price: "Rs 500",
        credits: "500 credits",
        icon: "/logo.png",
    },
    {
        title: "Business",
        desc: "Best for enterprise use.",
        price: "Rs 5000",
        credits: "5000 credits",
        icon: "/logo.png",
    },
];

const SubscriptionPlans = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 6, px: 2, }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                <Chip
                    label="Our Plans"
                    variant="outlined"
                    sx={{
                        background: theme.palette.background.paper,
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                        px: 2,
                    }}
                />
                <Typography variant="h2" mt={2} fontWeight={600}>
                    Choose the plan
                </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                {plans.map((plan, index) => (
                    <Plan key={index} plan={plan} />
                ))}
            </Grid>
        </Box>
    );
};

export default SubscriptionPlans;