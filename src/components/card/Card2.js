import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import AppList from "../list/List";

export default function OutlinedCard(props) {
  const { data = {} } = props;
  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: "#ffffff04",
        width: "100%",
        height: "100%",
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
            width: "inherit",
          }}
        >
          <AppList
            style={{ width: "100%" }}
            data={data.data}
            renderItem={(item, i) => {
              return (
                <Grid
                  container
                  style={{
                    background: "#21282C80",
                    borderRadius: 4,
                  }}
                >
                  <Grid item xs={8}>
                    <Grid container>
                      {item.side === "left" && (
                        <Grid item xs={2}>
                          <Box
                            style={{
                              height: 20,
                              width: 20,
                              borderRadius: "50%",
                              backgroundColor: item.color,
                              margin: "auto",
                            }}
                          />
                        </Grid>
                      )}
                      <Grid
                        item
                        xs={item.side === "left" ? 10 : 12}
                        zeroMinWidth
                      >
                        <Typography noWrap>{item.title}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container>
                      {item.side === "right" && (
                        <Grid item xs={2}>
                          <Box
                            style={{
                              height: 20,
                              width: 20,
                              borderRadius: "50%",
                              backgroundColor: item.color,
                              margin: "auto",
                            }}
                          />
                        </Grid>
                      )}
                      <Grid item xs={item.side === "right" ? 10 : 12}>
                        {item.action}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
