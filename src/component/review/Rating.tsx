import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { DataReview } from "./dataReview";

export default function BasicRating(props: any) {
  const [value, setValue] = React.useState<number | null>(2);

  const rating = DataReview.map((e) => e.id);
  console.log(rating);

  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={props.data}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
