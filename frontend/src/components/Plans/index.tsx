"use client"
import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import ButtonLatest from "../ButtonLatest"

type PlanProps = {
    title: string;
    desc: string;
    price: string;
    credits: string;
    icon: string;
}

const Plan = ({ plan }: { plan: PlanProps }) => {
    const theme = useTheme();

    return (
        <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
            <Card
                sx={{
                    borderRadius: 3,
                    minHeight: 320,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    background: theme.palette.background.paper,
                }}
            >
                <Box sx={{ mt: 2, mb: 1 }}>
                    <Image src={plan.icon} alt={plan.title} width={60} height={60} />
                </Box>
                <CardContent sx={{ flex: 1, textAlign: "center" }}>
                    <Typography variant="h2" fontWeight={600} mb={0.5}>
                        {plan.title}
                    </Typography>
                    <Typography variant="body1" mb={2}>
                        {plan.desc}
                    </Typography>
                    <Typography variant="h5" fontWeight={700} mb={0.5}>
                        {plan.price}
                        <Typography component="span" variant="body1" ml={1}>
                            / {plan.credits}
                        </Typography>
                    </Typography>
                </CardContent>
                <ButtonLatest
                    title="Get Started"
                    clickHandler={() => console.log(`Selected ${plan.title} plan`)}
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 500,
                        background: "#1e293b",
                        "&:hover": { background: "#334155" },
                        width: "90%",
                        mb: 2,
                    }}
                    size="large"
                    fullWidth
                />
            </Card>
        </Grid>
    )
}

export default Plan