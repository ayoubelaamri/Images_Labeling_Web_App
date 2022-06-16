import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DataConsumer, DataProvider } from "../context/global-context";

import Croquis from "../components/Croquis";
import Images_carousel from "../components/Images_carousel";
import Sidebar from "../components/Sidebar";
import Tools_bar from "../components/Tools_bar";
import Image_process_area from "../components/Image_process_area";
import Others_labels from "../components/Others_labels";
import LoadingModal from "../components/LoadingModal";
import ExportModal from "../components/ExportModal";
import ErrorModal from "../components/ErrorModal";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Workflow() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DataProvider>
      <DataConsumer>
        {(globalContext) => {
          return (
            <div className="flex h-screen gap-0 p-3 bg-gray-100">

              {/* <div className="flex items-center text-white absolute px-3 py-2 top-6 right-0 w-26 rounded-l-lg shadow-md bg-gradient-to-r to-blue-900 from-sky-900">
                <i className="fa fa-download mr-2" ></i>
                <span className="text-sm font-bold" >Export</span>
              </div> */}

              <ExportModal globalContext={globalContext} />
              
              <Sidebar globalContext={globalContext} />

              <div className="flex flex-col h-100 w-5/6 gap-0 pl-3">
                <div className="flex h-full gap-2">
                  
                  <div className="grid place-items-center w-3/5">
                    <div className="flex items-center w-100 h-100 p-3 pb-0 gap-3">
                      <Tools_bar globalContext={globalContext} />
                      <Image_process_area globalContext={globalContext} />
                    </div>
                  </div>

                  <div className="w-2/5 pr-3 mt-[2rem]">
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      sx={{ borderBottom: 1, borderColor: "divider" }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Pieces" {...a11yProps(0)} />
                        <Tab label="Autres" {...a11yProps(1)} />
                      </Tabs>
                    </Box>
                    <TabPanel
                      value={value}
                      index={0}
                      className="grid place-items-center h-full w-full -mt-0"
                    >
                      <Croquis globalContext={globalContext} />
                    </TabPanel>
                    <TabPanel
                      value={value}
                      index={1}
                      className="grid place-items-center h-[85%] w-full -mt-4"
                    >
                      <Others_labels globalContext={globalContext} />
                    </TabPanel>
                  </div>
                </div>

                <div className="h-2/6 w-100">
                  <Images_carousel globalContext={globalContext} />
                </div>
              </div>

              {globalContext.loading_encoding || globalContext.loading_export ||
              globalContext.loading_relatedPieces ? (
                <LoadingModal globalContext={globalContext} />
              ) : (
                <div></div>
              )}
              
              {globalContext.dossiers_count_0 ? (
                <ErrorModal globalContext={globalContext}/>
              ) : (
                <div></div>
              )}

            </div>
          );
        }}
      </DataConsumer>
    </DataProvider>
  );
}

