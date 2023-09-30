import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";

function AppCard(props) {
  const { data = {}, style, ...rest } = props;

  return (
    <Box
      sx={{ display: "flex", gap: "16px", flexWrap: "wrap", height: "100%" }}
    >
      <Card
        variant="outlined"
        style={{
          backgroundColor: "#ffffff04",
          width: "100%",
          borderRadius: 8,
          border: "1px solid #ffffff14",
        }}
      >
        <Grid container style={{ padding: "16px 28px" }}>
          <Grid item sm={8} md={7}>
            <Typography
              component="h4"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {data.Count}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {data.Name}
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            <Box
              style={{
                backgroundColor: "#3FA268",
                borderRadius: "50%",
                width: 60,
                height: 60,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {data.Icon}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default AppCard;
