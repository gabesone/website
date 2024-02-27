import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export function LoadingProjects() {
  return (
    <Box>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={380} height={256} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Box>
  );
}
