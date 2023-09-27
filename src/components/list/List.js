import React from "react";
import { List, ListItem } from "@mui/material";

const AppList = (props) => {
  const { data = [], renderItem, ...rest } = props;
  return (
    <List {...rest}>
      {data.map((item, i) => {
        return (
          <ListItem key={i} {...item.itemPrps} style={{color:"white"}}>
            {renderItem(item, i)}
          </ListItem>
        );
      })}
    </List>
  );
};

export default AppList;
