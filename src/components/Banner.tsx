import { Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
/*         <Button component={Link} to={"/test"}>
         Test
         </Button>
          <Tab component={Link} to="/" value="tab" label="test3" />
*/
export default function Banner() {
  const [tab, setTab] = useState("appbar");
  const tabChangeHandler = (even: React.SyntheticEvent, newTab: string) => {
    setTab(newTab);
    console.log(newTab);
  };
  return (
    <>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={tabChangeHandler}
            indicatorColor="primary"
          >
            <Tab component={Link} to="/appbar" value="appbar" label="app bar" />
            <Tab
              component={Link}
              to="/post_list"
              value="listPost"
              label="all post"
            />
            <Tab component={Link} to="/post2" value="post2" label="Post2" />
            <Tab
              component={Link}
              to="/parse"
              value="parsing"
              label="parsing"
              id="test2"
            />
            <Tab
              component={Link}
              to="/uploadDnD"
              value="upload"
              label="Upload"
            />
            <Tab component={Link} to="/buttons" value="button" label="button" />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
