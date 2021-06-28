import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

import user3 from "../../../assets/images/backgrounds/u4.jpg";

const BlogCard3 = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <img src={user3} alt="img" width="100%" />
      <CardContent
        sx={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "h4.fontSize",
            fontWeight: "500",
          }}
        >
          Super awesome, Angular 12 is coming soon!
        </Typography>
        <Typography
          color="textSecondary"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            mt: 1,
          }}
        >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: "15px",
          }}
          color="secondary"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard3;
