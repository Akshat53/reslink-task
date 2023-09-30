import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Header from "../components/header/Header";
import Toolbar from "@mui/material/Toolbar";
import AppCard from "../components/card/Card"; // Updated the import

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Card2 from "../components/card/Card2";

const card2Data = [
  {
    title: "haiof",
    data: [
      {
        title: "Thermal protective performance and mult",
        color: "#FDD26E",
        action: "Resume review",
      },
      {
        title:
          "Effect of heat flux and moisture content on the thermal protective performance of outer layer of fire pro",
        color: "#CD7849",
        action: "Interview",
      },
      {
        title: "Thermal protective performance and mult",
        color: "#5446456",
        action: "Task",
      },
      {
        title: "Testing and evaluation of functional textiles",
        color: "#44C677",
        action: "Payment",
      },
      {
        title:
          "Development of thermal liner for Extreme Heat Protective Clothing",
        color: "#FFFFFF",
        action: "Closed",
      },
      {
        title: "Testing and evaluation of functional textiles",
        color: "#44C677",
        action: "Payment",
      },
    ],
  },
  {
    title: "haio",
    data: [
      {
        color: "#73C2B4",
        title: "Interview is scheduled for 12PM",
        action: "6:29PM",
      },
      {
        title: "Applicant applied on Technical researcher",
        color: "#FDD26E",
        action: "Pyment",
      },
      {
        title: "Interview is cancelled",
        color: "#CD7849",
        action: "Pyment",
      },
      {
        title: "Applicant applied on Technical researcher",
        color: "#FDD26E",
        action: "Pyment",
      },
      {

        title: "Recieved Proposal",
        color: "#44C677",
        action: "Pyment",
      },
      {
        title: "Interview is scheduled for 12PM",
        color: "#73C2B4",
        action: "Pyment",
      },
    ],
  },
];
const cardData = [
  {
    Name: "Active Projects",
    Count: "07",
    Icon: (
      <PersonOutlineIcon style={{ color: "white" }} sx={{ fontSize: "30px" }} />
    ),
  },
  {
    Name: "Proposals",
    Count: "04",
    Icon: (
      <EditNoteOutlinedIcon
        style={{ color: "white" }}
        sx={{ fontSize: "30px" }}
      />
    ),
  },
  {
    Name: "Active Jobs",
    Count: "03",
    Icon: (
      <BookmarkBorderOutlinedIcon
        style={{ color: "white" }}
        sx={{ fontSize: "30px" }}
      />
    ),
  },
  {
    Name: "Applications",
    Count: "240",
    Icon: (
      <RemoveRedEyeOutlinedIcon
        style={{ color: "white" }}
        sx={{ fontSize: "30px" }}
      />
    ),
  },
];

function Home() {
  const tempData2 = card2Data.map((item, i) => {
    return {
      title: item.title,
      data: item.data.map((item) => {
        return {
          ...item,
          side: i === 0 ? "right" : "left",
        };
      }),
    };
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ p: 5 }}>
          <Toolbar />
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {cardData.map((item, i) => {
                    return (
                      <Grid
                        item
                        sm={12}
                        md={6}
                        lg={3}
                        style={{ width: "inherit" }}
                      >
                        <AppCard data={item} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {tempData2.map((item, i) => {
                    return (
                      <Grid item sm={12} md={6} style={{ width: "inherit" }}>
                        <Card2 data={item} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
