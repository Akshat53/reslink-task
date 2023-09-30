import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import AppList from "../list/List";

export default function OutlinedCard(props) {
  const { data = {}, ...rest } = props;
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
          <Grid item sm={12}>
            <Typography
              style={{
                fontSize: "20px",
                color: "#fff",
              }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <AppList
                data={data.data}
                renderItem={(item, i) => {
                  return (
                  <>
                  
                 <div style={{color:"red",}}> {item.title}</div>
                  <div>{item.color}
                  {item.action}</div>
               
                  </>
                )}}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
