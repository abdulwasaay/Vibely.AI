import { SubscriptionPlans } from "@/flavors"
import { Grid } from "@mui/material"

const Pricing = () => {
    return (
        <Grid sx={{ px: 2 }}>
            <SubscriptionPlans />
        </Grid>
    )
}

export default Pricing