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

const drawerWidth = 240;

const card2Data = [
  {
    title: "haiof",
    data: [
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
    ],
  },
  {
    title: "haio",
    data: [
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
        action: "Pyment",
      },
      {
        title: "one",
        color: "#5446456",
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
const cardStyle = {
  height: "500px",
};

function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ p: 5 }} style={{
          width: "100%"
        }}>
          <Toolbar />
          <Header />
          <br></br>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {cardData.map((item, i) => {
                return (
                  <Grid item sm={12} md={6} lg={3}>
                    <AppCard data={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          
          <br></br>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {card2Data.map((item, i) => {
                return (
                  <Grid item sm={12} md={6}>
                    <Card2 data={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/*  */}
        </Box>
      </Box>
    </>
  );
}

export default Home;
