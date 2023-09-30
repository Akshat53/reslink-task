import React from "react";
import { List, ListItem } from "@mui/material";

const AppList = (props) => {
  const { data = [], renderItem, itemStyle, ...rest } = props;
  return (
    <List {...rest}>
      {data.map((item, i) => {
        return (
          <ListItem
            key={i}
            {...item.itemPrps}
            style={{ color: "white", width: "auto" }}
          >
            {renderItem(item, i)}
          </ListItem>
        );
      })}
    </List>
  );
};

export default AppList;
