import { AIIntro, CustomerTestimonials, GenerateImage, MagicTry, WorkFlow } from "@/flavors";
import { Grid } from "@mui/material";

export default function Home() {

  return (
    <Grid sx={{ px: 2 }}>
      <GenerateImage />
      <WorkFlow />
      <AIIntro />
      <CustomerTestimonials />
      <MagicTry />
    </Grid>
  );
}
