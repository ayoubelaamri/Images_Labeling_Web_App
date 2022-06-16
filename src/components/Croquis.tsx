import React, { useEffect, useState } from "react";
import croquis_image from "./croquis-image.json";
import "../index.scss";

export default function Croquis(props: any) {
  const sketch = croquis_image.sketch;
  // const sketch = "";
  return (
    // <div className="flex items-center h-full w-full">
    <svg
      className="scaled1"
      width="100%"
      height="100%"
      version="1.1"
      id="Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1701 1701"
      xmlSpace="preserve"
    >
      <image
        style={{ overflow: "visible" }}
        width="3508"
        height="2582"
        transform="matrix(0.5126 0 0 0.5126 -48.3087 188.7704)"
        href={`data:image/png;base64,${sketch}`}
      />
      <path
        className={`croquis-path st0 ${
          props.globalContext.selectedParts.includes("CE4") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE4") == 0 &&
          "fill-cyan-500"
        }
          ${
            props.globalContext.selectedParts.indexOf("CE4") == 1 &&
            "fill-purple-500"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE4") == 2 &&
            "fill-orange-500"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE4") == 3 &&
            "fill-red-600"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE4") == 4 &&
            "fill-green-300"
          }
          `}
        onClick={() => {
          props.globalContext.selectPart("CE4");
        }}
        d="M1240.5,1229.4c-4.8-4.1-10.8-10.1-15.6-14.2c-13,45.8-39,57.5-62.3,72.6c-8.2,5.3-25.6,10.4-41.8,8.5
  c-14.1-1.7-20.4-12.6-35.6-15.6c-15-3-42.6,6.8-52.8,10.1c-14.3,3.9-13.2,2.9-27.5,6.8c-30.4,7.9-62.4,9.4-95.7,15.1
  c-16.4,0.9-32.7,2-49.1,2.9c-16.5-0.2-33.2,1.1-49.7,0.9c-8.3-0.1-18.6-2.6-26.9-2.8c-16.9-2.3-31.7-6-48.6-8.3
  c-24.7-5.1-48.1-9.4-72.7-14.6c-15.9-3.9-32.7-6.4-48.5-10.3c-8,3.5-36.2,16.4-46.3,18.1c-10.8-2-16.7-6.1-26.5-9.8
  c-28.4-13.6-49.1-36.6-66.2-71.2c-4.2,3.9-10.2,9.3-14.3,13.2c1,44.7,1.8,79.1,9.5,117.8c3,15.2,4,34.7,10.6,47.5
  c3.9,7.5,9.3,14.7,15.7,20c32.1,26.8,61.3,47.8,116.7,58.2c73.1,0.7,146.3,1.4,219.5,2.1c39.4,0.5,78.9,1.1,118.3,1.6
  c36.2,0,76.3,5,110-0.5c7.4,0.1,12.3,0.6,20.7-0.5c57.9-10.3,112.5-39.9,137.9-84.5C1240.6,1355.1,1241,1288.4,1240.5,1229.4z
   M1151.6,1403c-1.5,6.8-7.9,8.3-11.8,12.7c-17,19-39.8,30.2-67.8,38.5c-30,8.9-70.7,3.9-105.8,9.1c-9.1,0.2-18.2,0.3-27.2,0.5
  c-28.4,0.7-56.8,1.4-85.3,2c-14.9,0.2-29.8,0.3-44.7,0.5c-19-0.3-38-0.7-57-1c-9.4-0.2-18.8-0.3-28.3-0.5
  c-29.8-4.5-61.7-1.4-87.8-9.1c-27.3-8-49.4-20.5-69.3-35.5c-5.1-3.8-19.4-11.7-15.4-21.8c3.6-9.2,19.2-16,29.3-18.7
  c4.6-0.6,9.2-1.3,13.8-2c21-0.1,38,2.9,54.4,6.1c14.9,1,29.8,2,44.7,3c36.8,1.4,73.6,2.7,110.4,4.1c12.8,0.2,25.7,0.3,38.5,0.5
  c17.8-0.2,35.6-0.3,53.4-0.5c10.8-0.2,21.6-0.3,32.4-0.5c35.4-2.7,70.9-5.4,106.3-8.1c26.8-4.1,75.4-8.6,96.1,2
  C1137.6,1387.9,1154.3,1390.7,1151.6,1403z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE33") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE33") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE33") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE33") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE33") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE33") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE33");
        }}
        d="M1131,1384.8c-20.7-10.6-69.3-6.1-96.1-2c-35.4,2.7-70.9,5.4-106.3,8.1c-10.8,0.2-21.6,0.3-32.4,0.5
  c-17.8,0.2-35.6,0.3-53.4,0.5c-12.8-0.2-25.7-0.3-38.5-0.5c-36.8-1.4-73.6-2.7-110.4-4.1c-14.9-1-29.8-2-44.7-3
  c-16.4-3.2-33.4-6.2-54.4-6.1c-4.6,0.7-9.2,1.4-13.8,2c-10.1,2.7-25.7,9.5-29.3,18.7c-4,10.1,10.3,18,15.4,21.8
  c19.9,15,42,27.5,69.3,35.5c26.1,7.7,58,4.6,87.8,9.1c9.5,0.2,18.9,0.3,28.3,0.5c19,0.3,38,0.7,57,1c14.9-0.2,29.8-0.3,44.7-0.5
  c28.5-0.6,56.9-1.3,85.3-2c9-0.2,18.1-0.3,27.2-0.5c35.1-5.2,75.8-0.2,105.8-9.1c28-8.3,50.8-19.5,67.8-38.5
  c3.9-4.4,10.3-5.9,11.8-12.7C1154.8,1391.2,1138.1,1388.4,1131,1384.8z M596.6,1431.2c-18.8-0.7-28.6-20.4-18.3-35.5
  c4.9-7.2,13.2-11.4,22.1-11.8C637.1,1386.6,631,1432.5,596.6,1431.2z M1100.4,1431.2c-18.8-0.7-28.6-20.4-18.3-35.5
  c4.9-7.2,13.1-11.4,22.1-11.8C1140.9,1386.6,1134.8,1432.5,1100.4,1431.2z"
      />
      <path
        className={`croquis-path st2 ${
          props.globalContext.selectedParts.includes("CE44") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE44") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE44") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE44") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE44") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE44") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE44");
        }}
        d="M1103.7,1383.9c36.7,2.7,30.6,48.6-3.8,47.3c-18.8-0.7-28.6-20.4-18.3-35.5
  C1086.5,1388.5,1094.7,1384.3,1103.7,1383.9z"
      />
      <path
        className={`croquis-path st2 ${
          props.globalContext.selectedParts.includes("CE45") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE45") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE45") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE45") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE45") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE45") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE45");
        }}
        d="M599.9,1383.9c36.7,2.7,30.6,48.6-3.8,47.3c-18.8-0.7-28.6-20.4-18.3-35.5
  C582.7,1388.5,591,1384.3,599.9,1383.9z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE11") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE11") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE11") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE11") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE11") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE11") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE11");
        }}
        d="M506.7,1088.5c16.2,3.5,21.7,22,29.2,34.3c21,33.9,41.6,68.9,62,103.8c2.7,4.7,18.4,30.9,17.1,35.8
  c-1.3,4.9-8.5,9.1-12.6,11.3c-43.2,22.3-96.2-21.3-112.5-48.1c-5.1-8.4-7.7-19-10.1-30.2c-6.7-31.9-1.8-81.1,12.6-99.7
  C496.2,1091,500.7,1091,506.7,1088.5z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE12") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE12") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE12") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE12") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE12") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE12") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE12");
        }}
        d="M1210.3,1096.7c14.4,18.7,19.3,67.8,12.6,99.7c-2.4,11.2-5,21.8-10.1,30.2c-16.2,26.7-69.3,70.3-112.5,48.1
  c-4.1-2.1-11.3-6.4-12.6-11.3c-1.3-4.9,14.4-31.1,17.1-35.8c20.4-35,41-69.9,62-103.8c7.6-12.2,13.1-30.8,29.2-34.3
  C1202.2,1092,1206.7,1092,1210.3,1096.7z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE43") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE43") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE43") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE43") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE43") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE43") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE43");
        }}
        d="M1105.3,1214.4c0.9,2.8-6.9,10.9-9.2,14.4c-9.8,14.7-16,30.2-25.1,46.3c-17.2,5.5-34.5,11-51.7,16.5
  c-33.4,8.1-69,8.8-104.4,14.9c-10.4,0.7-20.8,1.4-31.2,2.1c-19.7,3.1-61.2,5-82.4,1.5c-16.5-1.9-33.1-3.8-49.6-5.7
  c-27.6-5.8-55.3-11.7-82.9-17.5c-12.3-3.6-24.6-7.2-36.8-10.8c-8.6-22.4-20.1-41.6-32.8-59.7c0.2-0.2,0.3-0.3,0.5-0.5
  c58.1,21,123,27.2,189.9,38.6c19.4,3.3,40,2,61.4,5.1c10.7,0.2,21.5,0.3,32.2,0.5c49.7-7.7,95-13.5,139.2-24.7
  c19.3-4.8,38.6-9.6,57.8-14.4C1088.6,1218.8,1097,1216.6,1105.3,1214.4z"
      />

      <path
        className={`croquis-path st3 
          ${props.globalContext.selectedParts.includes("CE1") ? "active" : ""} 
          ${
            props.globalContext.selectedParts.indexOf("CE1") == 0 &&
            "fill-cyan-500"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE1") == 1 &&
            "fill-purple-500"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE1") == 2 &&
            "fill-orange-500"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE1") == 3 &&
            "fill-red-600"
          }
          ${
            props.globalContext.selectedParts.indexOf("CE1") == 4 &&
            "fill-green-300"
          }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE1");
        }}
        d="M553.8,975.6L529.5,991c0,0-12.6,46.4,1.5,84.6c14,38.3,0.7,2.4,0.7,2.4s23.8,81.2,64.6,128.8
  c0,0,222.9,67.3,346.5,36.6c0,0,126.7-22.6,164.3-38c0,0,56.7-84.1,62.6-131c0,0,5.9-9.6,2.9-84.1l-23.6-16.1
  C1148.9,974.2,924.3,1023.9,553.8,975.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE25") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE25") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE25") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE25") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE25") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE25") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE25");
        }}
        d="M467.8,915c22,0.1,43.3,0.9,47.5,19.9c5,22.9-15.4,52.1,4,62.7c-4.8,10.9-10.6,28.3-20,34.7c-0.2,0-0.3,0-0.5,0
  c-2.2-12.7-10.1-37.8-17-46.4c-6.8-3.4-13.7-6.8-20.5-10.2c-6.8-4.2-17-15.3-19.5-23.5c-1.3-4.1,0.4-8.1-0.5-12.2
  c-1.7-7.4-2.2-14.7,4-19.4C451.4,916,459.6,918.1,467.8,915z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE26") ? "active" : ""
        } ${
          props.globalContext.selectedParts.indexOf("CE26") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE26") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE26") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE26") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE26") == 4 &&
          "fill-green-300"
        }`}
        onClick={() => {
          props.globalContext.selectPart("CE26");
        }}
        d="M1257.1,920.6c6.2,4.6,5.7,12,4,19.4c-0.9,4.2,0.8,8.1-0.5,12.2c-2.5,8.2-12.7,19.3-19.5,23.5
  c-6.8,3.4-13.7,6.8-20.5,10.2c-6.9,8.6-14.8,33.7-17,46.4c-0.2,0-0.3,0-0.5,0c-9.3-6.4-15.2-23.8-20-34.7c19.4-10.6-1-39.8,4-62.7
  c4.2-18.9,25.5-19.8,47.5-19.9C1242.8,918.1,1251,916,1257.1,920.6z"
      />
      <path
        className={`croquis-path st2 ${
          props.globalContext.selectedParts.includes("CE3") ? "active" : ""
        } 
        ${
          props.globalContext.selectedParts.indexOf("CE3") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE3") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE3") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE3") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE3") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE3");
        }}
        d="M626,749.6c0,0-50.7,131.5-71.2,225.2c0,0,308.4,37,593.1-1.5c0,0-40.4-140.3-72.7-223
  C1075.2,750.4,922.6,737.8,626,749.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE27") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE27") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE27") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE27") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE27") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE27") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE27");
        }}
        d="M634.1,966.6c12.1-25.5,61.5-20.8,61.5-20.8v-17.3c-9.1-0.8-15.4-9.6-15.4-9.6c-3-1.9-3.1-22.3-3.1-22.3
  c-1.8-7.8-3.1-31.1-3.1-31.1c4.3-22.5,17-22.7,17-22.7l59.4,0.5c6.4,0.3,11.3,8.6,11.3,8.6c6,13.2-0.5,60.2-0.5,60.2
  c-2.5,13.4-16.9,16.5-16.9,16.5c-0.3,10.2,0,17.3,0,17.3c56.7-2.4,62.2,20.5,62.2,20.5c3.2-5.7,7.2-7.4,10.8-10.6
  c15.2-9.1,50.4-11.3,71.2-5.1c11.2,3.3,15.8,8.5,24.6,14.2c3.7-10,16-14.1,27.1-16.8c3.4-0.3,6.8-1.7,10.2-2
  c6.7-4.9,13.8-10.5,23.6-13.2c-0.2-1.7-0.3-2.4-0.5-4.1c-5.9-0.7-9.6-4.7-13.3-7.6c-5.9-4.7-9-55.2-6.6-63.5
  c1.6-5.7,5.5-12,16.4-15.2c20.7,2.8,62.9-8.4,69.6,11.5c3.9,11.3,2.5,54.1-3.4,64.5c-3.2,5.7-7.7,7.6-14.5,9.9c0,1.5,0,5,0,6.6
  c10.2,2.5,16.9,10.1,25.1,13.2c3.4,0.3,6.8,0.7,10.2,1c12.3,2.9,20.7,6.5,25.7,16.8C1037.2,965.4,634.1,966.6,634.1,966.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE29") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE29") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE29") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE29") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE29") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE29") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE29");
        }}
        d="M832.8,751.1c38.6-0.1,78.1-3,114.1,1.4c0.2,0.6,0.3,1.3,0.5,1.9c-11.2,2.7-7,11.2-15.7,12.1
  c-31.7,3.6-43.2-7.5-49.7,16.5c5.8,0.2,15.2-0.1,17.7,3.4c7.8,10.7,4.3,22-6.6,24.3c-10.2,2.2-71.4,1.4-75.5-1.4
  c-2.6-1.8-4.9-6.5-5.1-10.7c-0.4-14.5,9.3-14.3,22.3-15.5c0-0.2,0-0.3,0-0.5c-2.7-6.8-4.7-13.4-12.7-15.1
  c-11.1-2.3-30.6,0.4-39.5-1.5l-11-13.9C792.6,751.5,811.8,751.9,832.8,751.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M1008.3,962c0.2,1,0.3,2,0.5,3.1c0.3,0.4,0.7,0.9,1,1.3c30.7,1,61.5,2,92.2,3.1c-0.2,3.3-0.3,6.7-0.5,10
  c-39.4-1.5-78.8-2.9-118.1-4.4c-21.8-2.8-47.4,2-66.8-3.1c-38.9,0.9-77.7,1.7-116.6,2.6c0-1.7,0-3.5,0-5.2
  c39-1.5,78.1-2.9,117.1-4.4c0-0.7,0-1.5,0-2.2C947.7,963.1,977.4,962.1,1008.3,962z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M800,961.3c0.2,1,0.5,2.3,0.7,3.3c0.3,0.4,0.7,0.9,1,1.3c30.5,1,60.9,2.1,91.4,3.2c-0.2,3.4-0.3,6.9-0.5,10.3
  c-39-1.5-78-3-117.1-4.5c-24.1-2.4-45.4-1-66.2-3.2c-38.5,0.9-77,1.8-115.5,2.7c0-1.8,0-3.6,0-5.4c38.7-1.5,77.4-3,116-4.5
  c0-0.8,0-2.5,0-3.3C740.1,961.6,769.4,961.4,800,961.3z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE2") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE2") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE2") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE2") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE2") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE2") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE2");
        }}
        d="M822.1,618c44-0.3,90.8,0.8,128.7,6.6c5.5,0.8,10.9-2.7,17.4-1c4.9,2.4,9.9,4.7,14.8,7.1
  c15.6,4.2,33.8,5.2,45.5,13.7c18.4,13.4,44.9,72.5,50.1,100c-36.3-1.2-72.5-2.4-108.8-3.6c-28.6-0.2-57.2-0.3-85.8-0.5
  c-35.8,0-71.5,0-107.3,0c-50.1,1.2-100.1,2.4-150.2,3.6c0-0.2,0-0.3,0-0.5c3.1-9.8,6.1-19.6,9.2-29.4c9.6-24.6,27-61.7,48-74.1
  c10.9-2.9,21.8-5.8,32.7-8.6c6-2.4,10.5-7.6,18.4-9.1c7.3-1.4,13.4,1,18.9,2c15.3-1.7,30.6-3.4,46-5.1
  C807.1,618.7,814.6,618.4,822.1,618z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE24") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE24") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE24") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE24") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE24") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE24") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE24");
        }}
        d="M1022.1,210.6c12.5,0,27.9,0.2,36.4,0.5c7,5.8-2.3,11.8-6.4,15.8c-20.5,19.9-12.8,15.3-87,16.6
  c-59.3-0.3-118.8-0.3-178.1-0.6c-18.7-0.3-37.1-0.5-56.2-0.9c-66.4-3.7-75.1,8.2-95-27.5c11.3-0.6,21.4-1.4,32.7-1.9
  c2.5,0.9,4.2,5.8,9.1,5.6c12.7,0.1,22.8,0,35.5,0.1c1.9,1.6,6,4.3,7.9,5.9c12.7,7,20.4,1.1,26.7-7.2c1.5,0.3,4.1,2.1,6.3,1.5
  c3.7-0.9,3.1-4,4.4-6.8c5.7,0.1,10.3,0.1,16,0.2c0.9,1.9,2.3,5.4,3.2,7.3c45.7-0.6,92.5-1.8,138.2-2.4l4.7-5.7l15.8,0.5l6.5,5.1
  l75.4-0.2L1022.1,210.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE40") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE40") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE40") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE40") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE40") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE40") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE40");
        }}
        d="M1125.8,257.3c-20.4,0.2-40.7,0.4-61.1,0.5c-9.1,18.7-23.5,39-42.6,47.4c-11.4,5-27.9,1.3-43.1,3.2
  c-22.2,0.2-44.5,0.4-66.7,0.5c-53-0.2-106-0.4-159.1-0.5c-16.8-0.2-33.5-0.4-50.3-0.5c-8.6,0-19.7,1.2-26.7-1.1
  c-19.8-6.4-39.9-30.3-47.2-49.5c-20,0.2-41,0.4-61,0.5c0-0.5,1-1.1,1-1.6c7.2-22.7,23.3-38.7,52.3-37.4c5.8,0.3,13.8-0.9,18,1.1
  c16.6,30.8,42,18.1,98.5,22.1c81,5.8,153.7,1.1,229.4,1.1c39.9,0,72,7.6,90.3-23.2C1091.6,218.7,1121.4,231.1,1125.8,257.3z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE21") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE21") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE21") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE21") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE21") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE21") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE21");
        }}
        d="M640.9,404.4c36.2,3.2,48.5-0.7,59,23.4c2.8,6.4,11.9,12,10.7,21.2c-19.6,1-38,3-57.6,5.1
  c-20.7,4.5-43.4,11.3-65.8,13c-0.7-0.7-3.4-3.6-4.1-4.2c-1.2-10.9,10.2-36.8,16.6-41.2c4.5-1.6,9-3.1,13.5-4.7c0-0.2,0-0.3,0-0.5
  c-2.1,0.3-4.2,0.7-6.2,1c0.5-0.7,1-1.8,1.5-2.5c3.8-2.4,7.5-4,11.3-6.4C624.4,407.3,634.3,403.8,640.9,404.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE22") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE22") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE22") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE22") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE22") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE22") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE22");
        }}
        d="M1079.2,407.9c3.8,2.4,7.4,4,11.2,6.4c0.5,0.7,1,1.8,1.5,2.5c-2.1-0.3-4.1-0.7-6.2-1c0,0.2,0,0.3,0,0.5
  c4.5,1.5,8.9,3.1,13.4,4.6c6.3,4.4,17.6,30.1,16.5,41c-0.7,0.7-3.4,3.5-4.1,4.2c-22.2-1.7-44.8-8.4-65.4-12.9
  c-19.4-2.1-37.7-4.1-57.2-5.1c-1.2-9.2,8.6-14.4,10.6-21.1c6.1-19.9,22.9-19.2,58.9-22.4C1065,404.1,1074.5,406.7,1079.2,407.9z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE19") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE19") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE19") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE19") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE19") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE19") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE19");
        }}
        d="M821.2,348.8c15.7,0.2,31.4,0.3,47.1,0.5c3.1,2.5,6.1,5,9.2,7.5c34.3,0.2,68.5,0.3,102.8,0.5
  c14.2,0,38.6-2.7,50,2c15.8,6.5,18.5,26.6,22.1,45.3c-35.7,4.2-44.9,2.2-56.8,26.1c-2,4.1-5.6,8.7-6.1,14.6c0.2,0.3,0.3,0.7,0.5,1
  c8.5,0.8,45.8,4.4,66.5,9c0.4,19.1-11.5,58.9-19.6,69.8c-20.8-15.3-32.3-29.8-62.4-38c-15.7-4.3-38.7-1.8-57.6-1.8
  c-35.3-0.2-70.7-0.6-106-0.7c-28.7,0-75.5-3.5-95.3,3.5c-24.5,8.5-41.7,23.4-60.1,37.2c1-33-20.4-38.7-18.4-67.3
  c22.9-2.2,45.9-8.8,72.1-9.5c2.1-7.5-7-15.1-10.2-20.6c-11-18.9-10-17-41.9-21.6c-5.5-0.2-10.9-0.3-16.4-0.5c0-0.2,0-0.3,0-0.5
  c2.5-20.7,6.7-41.7,23.5-48.2c8.9-3.5,22.1-0.5,33.8-0.5c26.3,0.2,52.5,0.3,78.8,0.5C815.5,356.9,811,359.8,821.2,348.8z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE20") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE20") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE20") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE20") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE20") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE20") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE20");
        }}
        d="M873.2,485.1c92.6-2.4,125.3-1.9,162.4,39.8c10.3,11.5,10.7,50.2-13.1,49.8c-6.8-0.1-44.6,14.4-71.3,17.3
  c-16.1,1.7-34.5,3.7-52.3,3.7c-10.2,0-20.5,0-30.7,0c-19-0.3-43.5,0.2-61-0.5c-15.4-0.9-30.7-1.8-46.1-2.7
  c-40.7-4.9-45.3-5.3-92.8-20.1c-18.4-1.9-18.7-34.4-12.8-43.9c9.7-15.6,46.4-39.3,67.1-42.9c29.9-0.9,59.8,0.2,89.7-0.7
  C832.7,484.8,852.8,485.3,873.2,485.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE32") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE32") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE32") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE32") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE32") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE32") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE32");
        }}
        d="M1056,455.1c20.1,3.9,35.9,8.1,56,12c-0.3,0.3,0.4,1.1,0.1,1.4c0,0,0,0,0,0c-4.1,7.7-12.8,17-23.3,18.2
  c-1.8,13-7.9,28.5-13.9,38c-2.4,2.6-4.8,5.1-7.1,7.7c-1.4,4.9-2.7,9.9-4.1,14.8c-5.6,13.1-15.8,35.2-25,45
  c-7.2,7.6-12.6,18.8-28.1,14.8c1-4.2-1.4-9.5-4.6-11.2c-8.5,1.7-16.4,3.6-25.5,6.1c-1.8,2.7-3.3,2.2-5.1,4.9
  c-9.6,0.6-12.2,2.7-21.8,3.3c-1.8-2.1-3-4.5-4.7-6.5c-16.4-0.2-35.8,2.2-52,5.1c-11.6,0.5-22.7,2.5-34.3,3
  c-11.7,0.2-23.5,0.3-35.2,0.5c-19.5-1.6-38.8-3.3-58.3-4.9c-5.9-1.1-11.8-2.2-17.7-3.3c-2.3,0.7-6.7,3.6-10.1,4.3
  c-23.3,4.7-55-37.6-56,0.4c-15.9-1.1-22.7-11.1-29.9-21c-18.2-25-33.8-65.3-39.5-101.2c-13.1-2.3-19.5-9.8-28.1-16.7
  c0.1-0.6,0-1.6,0.1-2.2c17.2-3.2,31.8-5.5,48.9-8.8c-0.7,24.7,18,39.5,19.8,66.8c-1,3.1-1.7,5.3-2.7,8.4c-2,8.1-0.4,30.8,5.4,33.9
  c14.2,7.6,52.5,20.3,76.7,20.8c18.9,1.9,37.8,3.7,56.7,5.6c7.3,0.2,14.6,0.3,22,0.5c13.8,0.2,27.6,0.3,41.4,0.5
  c14.5-0.5,28.9,0,43.4-0.5c19.7-1.8,35.6-0.5,52.1-3.6c17.1-0.9,33.4-4.2,47.6-8.8c10.2-3,18.9-8.7,23.6-7.6
  c22.6,5.2,21.3-39.6,14-49.1C1044.4,512.2,1057.8,475.3,1056,455.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M955.3,502.5c0.2,0.4,0.3,0.7,0.5,1.1c-0.1,3.1,0.4,4.8-2.5,5.9c-2.4-3.1-2.6-3.4-7.1-2.5
  c-3,6.6-15.7,4.4-23.8,5.4c-28.5,3.4-64.6-1.9-64.6-1.9l-0.2,2.2l-3.3,1.3c-0.2,0-0.3-4.8-0.3-4.8c-10.1-3.8-11.9,2.1-13.1,0.4
  c0,0-2.5-2.2-1.5-8.9c0,0-3.6,0.7-1.8-3.6l6.1-7.5c0,0,85.9,7.1,99.5,9.6l3.1,3.8C946.3,502.9,953.8,499.6,955.3,502.5z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M788.5,581c27.2,0.2,55.4,0.3,82.5,0.5c10.3,0,25.7,0.4,35.2,0c2.2,3.4,4.4,7.9,6.5,11.3c0,0.2,0,0.3,0,0.5
  c-43.3,3.1-92,2.9-133.9-1c0.8-0.8,1.7-1.6,2.5-2.5C783.8,586.9,786.1,583.9,788.5,581z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M1110.4,240.1c-0.2,2.6-0.3,5.2-0.5,7.7c-13.2-0.2-27.5-0.4-40.7-0.6c2.6-2.1,4.5-4.4,6.2-6.6
  C1087,240.5,1098.7,240.3,1110.4,240.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M618.3,239.7c1.7,2.2,3.7,4.5,6.2,6.6c-13.2,0.2-27.5,0.4-40.7,0.6c-0.2-2.6-0.3-5.2-0.5-7.7
  C595,239.3,606.7,239.5,618.3,239.7z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M676.3,356.4c91.8,0.4,183.6,0.9,275.4,1.3c24.5,0,84.5-5.5,86.4,12.6c-53.2,4.1-110.8,1.3-166.1,1.3
  c-73.2-0.3-146.5-0.6-219.7-0.9C654.7,359,664.9,360.3,676.3,356.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE23") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE23") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE23") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE23") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE23") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE23") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE23");
        }}
        d="M1052,404.7c-1-18-10.2-43.6-25.1-47.1c-9.6-2.3-35.3-1-47.6-1c-34.3-0.3-68.6-0.7-102.9-1
  c-8.7-11.2-34.2-7.6-54.8-7.4c-2.2,2.3-4.4,4.6-6.7,6.9c-36.4,0-72.7,0-109.1,0c-15.2,1.1-36.9-2.4-46.6,3.4
  c-11.3,6.7-18.4,29.6-18.7,46.6c-30.3,0-54.9,22.2-57.4,58.2c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5-0.2,0.5,0.2,0,0
  c-17.1-32.2-26.5-84.2-29.3-106.2c-0.9-7.7-1.7-15.4-2.6-23.1c-1.2-3.8-4-7.5-3.6-14.2c0.6-8.5,8.5-8.6,9.7-13.7
  c3.8-16,3.6-35.4,11.8-48.6c20.3-0.2,38.6-0.3,58.9-0.5c11.2,20.2,27.8,40.2,42,45.8c11.2,4.5,19.1,6.4,81.9,5.3
  c53.8,0,107.5,0,161.3,0c24.4,0,48.8,0,73.2,0c11.1,0,28.2,0.2,36.1-3.3c13.8-6.1,26.2-20.1,35-32c3.1-4.7,6.1-10.5,9.2-15.2
  c20.7,0,40.3,0,61,0c4.4,13.4,9,27.3,12.3,41.2c0.5,4.1,1,8.2,1.5,12.3c1,2.1,4.9,3.1,5.1,4.9c1.7,15.5-1.2,23.1-1.2,31.5
  c0,34.1-4.7,45.2-12.7,70.9c-4.4,14.1-4.4,40.7-16.7,46.5c1-1-0.3-0.1,0.7-1.1c-0.7-8-7.9-22.1-8.7-28.7
  C1105.8,421.6,1078.1,399.8,1052,404.7z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE13") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE13") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE13") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE13") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE13") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE13") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE13");
        }}
        d="M1202.9,440.9c8.7-6.9,39.6,17.2,55.8,25.2c5.3,1,10.5,2,15.8,3.1c5.5,3.4,7.7,10.1,14.2,12.7
  c13.9,5.6,28.2-0.3,31.5,15.8c4.5,21.9-21.4,28-22.4,42.3c1.1,2.3,1.8,3.5,4.1,4.6c4.6,1.7,10.8,0.1,13.2,4.1c3,3.6,2,12.8,1,18.9
  c-1.9,11.6-7.3,46.4-12.7,52.5c-2.2,2.4-19.4,4.4-23.4,6.1c-14.4,6.3-28.8,18.8-38.1,30.6c-11.7,14.7-22.2,31.4-28.5,51.5
  c-3.6,13.6-7.1,27.2-10.7,40.8c-7.2,12-41.3,25.2-54.9,32.6c-5.6,3-11,8.3-18.3,9.2c-8.3-4.4-24.1-22.8-30-30.6
  c5.8-3.6,11.5-7.1,17.3-10.7c9.3-6.6,19.4-15.6,26.4-24.5c26.5-33.4,44.9-83.1,54.9-132c7.4-36.4-9.7-89.3-28.4-104.1
  c-16.3,5-41.8,27.6-56,11.3c-2.7-3.1-4.7-5.6-5.1-11.2c7.2-6.7,17.9-10.1,26.9-14.8C1160.7,461.3,1177.1,453.3,1202.9,440.9z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE8") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE8") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE8") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE8") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE8") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE8") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE8");
        }}
        d="M1677.6,560.8c-3.1-6.1-10.2-9.1-15.8-12.8c-5.7-3.8-12.3-11.2-20.9-8.7c-13.2-9.8-49.2-46.1-66.7-46
    c-28.5,15.2-58.7,25.7-85.5,41.2c-7.8,4.6-25.8,9.7-28.5,18.9c-2.4,8.1,3.8,15.8,5.6,21c3.7,15.2,7.5,30.3,11.2,45.5
    c1.2,9.7,2.4,19.4,3.6,29.1c-0.8,5.3-3.8,12.9-2.5,19.4c2.5,12.8,3.5,33.2,1,48.6c-0.5,11.6-1,23.2-1.5,34.8
    c1.3,7.9,5.1,15.5,6.1,21.5c0,7,0,14,0,21c1.2,4.6,2.4,9.2,3.6,13.8c-2.5,5.7-5.1,11.3-7.6,16.9c30.3-19,60.7-38.1,91.1-57.2
    c12.1-7.6,30.1-14.5,38.2-26.1c7.7-11.1,8.6-30.3,13.7-43.4c8.1-20.9,18.3-40.4,29-58.8c9.7-16.8,17.4-33.8,23.9-53.7
    C1677.6,579.5,1681.4,568.3,1677.6,560.8z M1627.8,552.3c-4.4,4.6-11,7.8-16.4,11.1c-2.5-14.7-5-29.4-7.5-44.1
    C1612.4,530.1,1627.9,532.3,1627.8,552.3z M1494.7,630.1c-0.3,0.3-0.7,0.7-1,1c-3.9-17.2-7.9-34.5-11.8-51.7
    c-1.6-6-6.4-14.8-4.6-22.3c2.3-9.9,11.4-14.3,19.1-18.9c17.5-10.5,38.8-19.4,57.8-28.2c7.7-3.5,9.1-4.9,19.9-7.1
    c24.9,12.6,23.3,10.4,30.2,41c1.1,5.1,4,12.3,2.6,17.7c-5.1,4.9-22.4,14.6-29.2,18.8C1550,597,1522.4,613.5,1494.7,630.1z
     M1635.7,620.3c-1.4,8.3-8.4,16.9-16,13.7c-1-0.4-1.8-0.9-2.5-1.6c-5,2.6-9.9,4.3-11.4,2.1c-1.8-2.7,3.4-7.8,8.6-12
    c1.1-8.2,7.9-17.1,15.5-14.6c0.4,0.1,0.9,0.3,1.3,0.5c0.7,0.3,1.4,0.8,1.9,1.3c5.8-3.4,12.2-6.2,14-3.6
    C1649.2,609.2,1641.7,615.7,1635.7,620.3z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE36") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE36") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE36") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE36") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE36") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE36") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE36");
        }}
        d="M1359.4,530.2c2.7,7.8,5.3,15.6,8,23.4c5.1,13.1,11.4,26.5,18.5,38.1c6.5,10.7,20,18.2,23,31.5
  c4.4,20.1-5.5,41.3-5.5,63c-0.2,60.7-0.3,121.5-0.5,182.3c-0.2,41.1-0.3,82.2-0.5,123.4c-3.4,3.8-11.7,7.6-18,8.1
  c-20.1-10.9-28.6-13.9-52.9-3.6c0-20.3,0-39.6,0-59.9c9.3,2.3,28.6,21.9,37.2,18.4c1.8-4.7,4.6-11.1,5.7-16.8
  c2.4-12.3-0.4-26.5-0.5-38.6c-0.1-33.1,3.4-74.6-9-96c-5.2-8.9-12.7-19-20.5-25.4c-5.7-4.6-13.6-10-16-17.8
  c-0.2-10.5-0.3-21-0.5-31.5c0.2-6.9,0.3-13.9,0.5-20.8c14.1,8.5,28.3,16.9,42.4,25.4c18.6-31-8.2-80.8-20-99
  c-3.9-6.1-12.8-13.4-14.5-21.3c-1.5-6.8,4.3-14.3,6-19.8c4.6-15.3,6.5-29,11-45.2C1355.4,542.1,1357.4,536.1,1359.4,530.2z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE38") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE38") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE38") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE38") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE38") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE38") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE38");
        }}
        d="M1446.4,632.2c0.7,0.2,1.5,0.3,2.2,0.5c5.9,3.7,4.2,19.2,4.6,29.1c1,22.8,2.1,45.6,3.1,68.4c0.3,8,0.7,16,1,24
  c1.9,6.5,3.3,14.6,4.6,23.5c0.8,27.2,1.5,54.4,2.3,81.7c0.6,17.4,1.1,34.7,1.7,52.1c0.7,23.3,1.5,46.6,2.2,69.9
  c0.6,23.1,1.2,46.3,1.8,69.4c-1.1,4.8-4.4,11.4-7.9,13.8c-0.4-0.2-0.9-0.3-1.3-0.5c-0.8-6.6-2-13.1-2.8-17.8
  c-0.4-12.9-0.8-25.9-1.1-38.8c-0.4-10.2-0.7-20.4-1.1-30.6c-0.4-10.4-0.7-20.8-1.1-31.1c-0.5-15.3-1.1-30.6-1.6-45.9
  c-0.7-20.4-1.5-40.8-2.2-61.2c-1.1-30.4-2.2-60.9-3.3-91.4c-0.9-27.6-1.8-55.1-2.8-82.7C1444.8,654.1,1442.4,639.2,1446.4,632.2z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE7") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE7") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE7") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE7") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE7") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE7") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE7");
        }}
        d="M1682.7,883.2c-2.5-10.9-8.9-18.8-11.1-28.6c-5.3-23.1-7.8-45.7-13.1-66.9c-1.8-7.2-2.2-21-7-25.5
  c-6,3.6-12,7.2-18.3,10.8c-9.9,7.7-19.8,15.3-29.7,23c-32.5,26.3-51.3,64.7-73,102.1c-10.8,18.5-22.3,38.8-26.7,62.8
  c-1.9,10.6,7.4,17.1,8.6,26.5c-0.8,4.6-1.7,9.2-2.5,13.8c-0.2,21.4-0.3,42.9-0.5,64.3c3.9,19.4,10.2,15.8,8.1,45.9
  c11.9-1.8,29.4-16.4,39.3-22.5c28.1-16.8,56.1-33.7,84.1-50.5c6.9-4.2,37.2-18.7,39.3-24.5c0.7-11.2,1.3-22.5,2-33.7
  c0.5-12.5,1-24.9,1.5-37.3C1686.4,926,1686.2,898.6,1682.7,883.2z M1524.6,948.7c-0.3,0.3-0.7,0.7-1,1c-1.4-2.8-1-7.7-1-11.9
  c0-21.3,7-26.9,14.6-41.3c18.1-34.4,41-68.6,70.5-92c9.8-7.8,21.1-21.3,35-24.3c1.6,28.4,10.1,56,7.7,87.9
  C1608.5,895,1566.5,921.8,1524.6,948.7z M1669.8,918.1c-0.2,8.6-9,19.9-16.5,16c-1.2-0.6-2-1.4-2.6-2.4c-1.4,0.7-2.7,1.4-4.1,2.1
  c-3.2,1.3-6-2.7-3.6-5.1c2.3-1.6,4.6-3.1,6.9-4.7c1.6-8.1,9.4-17,16.1-13.4c0.6,0.3,1.1,0.7,1.6,1.2c0.8-0.5,1.6-1.1,2.4-1.6
  c0.9-0.7,2.3-1.9,3.6-1.8C1678.9,908.7,1673.3,914.7,1669.8,918.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE37") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE37") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE37") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE37") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE37") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE37") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE37");
        }}
        d="M1409.7,870.4c1.9,0.3,3.7,0.7,5.6,1c2.4-6.1,5.9-12.4,8.3-18.5c18.3,0.3,11.6,18.9,14.1,34.3
  c2.8,17.5-4,21-3.6,26.8c0.4,6.2,2.9,4.7,4,8.7c0.7,13.4,1.9,28,2.6,41.5c-1.2,2.4-4.7,3.4-4.1,6.6c2.2,5.1,4.4,10.2,6.6,15.3
  c0.5,12.6,1,25.2,1.5,37.7c8.2,51,0.3,59.9,3.1,64.2c-3.8,7.6-16.6,4.9-26.5,6.6c-18.9,3.2-26.4,2.8-43.8-0.5
  c-7.6,0.2-15.3,0.3-22.9,0.5c-6.2-1.2-10.9-6.1-15.3-6.6c-2.5,1.9-5.1,3.7-7.6,5.6c-7.7-32.2-18.1-62.2-27.5-93.3
  c-9.8-32.5-14.6-67.6-21.9-102c-3.2-14.8-11.4-64,3.1-69.9c5.3-1.5,9,1.9,11.7,4.6c0,7.3,0,14.6,0,21.9c0.2,8.3,1.3,16.7,1.5,25
  c2.8,17.2,4,34.5,7.6,50c7.6,32.1,18.9,106.1,39.2,121.3c5.2,3.9,25.4,13.8,34.7,12.2c5.3-0.7,10.5-1.4,15.8-2
  c6.7,0.8,11.3,7,19.9,3.1c7.1-18.9,4.4-50.8,1-70.9C1414.8,952.6,1411.7,911.5,1409.7,870.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE41") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE41") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE41") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE41") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE41") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE41") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE41");
        }}
        d="M1352.3,1099.5c1.3,0,2.7,0,4,0c5.1,9.5,12.3,14.7,20.7,19.8c-0.7,0.7-1.3,1.3-2,2
  c-6.9,8.4-13.8,16.8-20.7,25.3c-23.4,31.5,3.3,31.3-36.9,40.6c-5.8-3.7-12.3-15.6-10.6-29.7c1.9-3.7,8.2-4,12.7-5
  c0.2-0.8,0.3-1.7,0.5-2.5c-1.4-13.4-7.6-21.8-12.5-31c8-1.7,14.1-1,18.6-8.1c0.3,0.2,0.7,0.3,1,0.5c0.7,1.2,1.3,2.3,2,3.5
  c11.8-7.3,4.6,2.8,13.4-4.4C1345.3,1106.5,1348.9,1102.2,1352.3,1099.5z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE5") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE5") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE5") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE5") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE5") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE5") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE5");
        }}
        d="M1412.5,1127.5c9.3,0.5,11.8,7,18.1,10.2c0.5,30.8,16.4,46.9,20.6,80.8c3.3,26.8,3.1,55.1,7.5,79.8
  c0.8,6.8,1.7,15.6,2.5,22.3c2.1-1.2,2.6-2,5.5-2.5c2.6,1.3,7.5,2.8,8.6,4.4c-0.4,9.1-32.6,28.3-41.7,29.2
  c-7.9-2.1-19.1-0.6-25.6-4.6c0-4.2,0-7.5,0-11.7c15.3,7.9,18.6,9.3,34.1-4c2.7-34.3-16.3-55.9-52.6-44.7
  c-22.5,6.9-37.7,23-52.2,38.1c-6.3,6.6-11.8,11.6-19.6,22.9c-7.5-2.1-33-11.6-36.1-16.8c-0.2-0.8-0.3-1.7-0.5-2.5
  c3.7-5.1,7.4-10.2,11-15.2c6-10,10.5-22.4,13.5-35.1c2.3-9.4-1.2-31.4,2.5-37.6c3.8-6.6,13-8.8,19.6-12.7
  c9.5-5.7,19.8-12.2,27.6-19.8c7.8-7.6,14.8-18,18.1-30c0.8-4.6,1.7-9.1,2.5-13.7c6.2-5.1,12.4-10.2,18.6-15.2
  C1400.4,1141.7,1406.4,1134.6,1412.5,1127.5z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE14") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE14") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE14") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE14") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE14") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE14") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE14");
        }}
        d="M569.3,474.3c9,4.7,19.7,8.1,26.9,14.8c-0.3,5.6-2.4,8.1-5.1,11.2c-14.1,16.3-39.6-6.3-56-11.3
  c-18.7,14.8-35.9,67.6-28.4,104.1c10,48.9,28.3,98.6,54.9,132c7.1,8.9,17.2,17.9,26.4,24.5c5.8,3.6,11.5,7.1,17.3,10.7
  c-5.9,7.8-21.6,26.2-30,30.6c-7.3-0.8-12.7-6.2-18.3-9.2c-13.6-7.4-47.7-20.6-54.9-32.6c-3.6-13.6-7.1-27.2-10.7-40.8
  c-6.2-20.1-16.8-36.8-28.5-51.5c-9.3-11.7-23.7-24.3-38.1-30.6c-4-1.8-21.2-3.7-23.4-6.1c-5.4-6.1-10.8-40.8-12.7-52.5
  c-1-6.1-2-15.2,1-18.9c2.4-4,8.6-2.4,13.2-4.1c2.3-1.1,3-2.3,4.1-4.6c-1-14.3-26.9-20.4-22.4-42.3c3.3-16.1,17.7-10.2,31.5-15.8
  c6.5-2.6,8.7-9.4,14.2-12.7c5.3-1,10.5-2,15.8-3.1c16.2-8,47.1-32.1,55.8-25.2C528,453.3,544.3,461.3,569.3,474.3z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE34") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE34") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE34") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE34") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE34") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE34") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE34");
        }}
        d="M364.6,545.7c4.4,16.2,6.4,30.1,11,45.4c1.7,5.6,7.5,13.1,6,19.9c-1.7,7.9-10.5,15.3-14.5,21.4
  c-11.8,18.3-38.5,68.3-20,99.5c14.1-8.5,28.3-17,42.4-25.5c0.2,7,0.3,13.9,0.5,20.9c-0.2,10.5-0.3,21.1-0.5,31.6
  c-2.4,7.8-10.3,13.2-16,17.9c-7.8,6.4-15.3,16.6-20.5,25.5c-12.4,21.4-8.8,63.2-9,96.4c-0.1,12.2-2.9,26.4-0.5,38.8
  c1.1,5.8,3.9,12.2,5.7,16.9c8.7,3.5,27.9-16.2,37.2-18.5c0,20.4,0,39.8,0,60.2c-24.3-10.4-32.8-7.3-52.9,3.6
  c-6.2-0.5-14.6-4.3-18-8.2c-0.2-41.3-0.3-82.7-0.5-124c-0.2-61.1-0.3-122.1-0.5-183.2c0-21.8-9.9-43.1-5.5-63.3
  c2.9-13.4,16.4-20.9,23-31.6c7.1-11.6,13.4-25.1,18.5-38.3c2.7-7.8,5.3-15.6,8-23.5C360.6,533.8,362.6,539.7,364.6,545.7z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE39") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE39") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE39") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE39") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE39") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE39") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE39");
        }}
        d="M273.2,665.9c-0.9,27.6-1.8,55.1-2.8,82.7c-1.1,30.4-2.2,60.9-3.3,91.4c-0.7,20.4-1.5,40.8-2.2,61.2
  c-0.5,15.3-1.1,30.6-1.6,45.9c-0.4,10.4-0.7,20.8-1.1,31.1c-0.4,10.2-0.7,20.4-1.1,30.6c-0.4,12.9-0.8,25.9-1.1,38.8
  c-0.8,4.8-2,11.3-2.8,17.8c-0.4,0.2-0.9,0.3-1.3,0.5c-3.5-2.4-6.8-9.1-7.9-13.8c0.6-23.1,1.2-46.3,1.8-69.4
  c0.7-23.3,1.5-46.6,2.2-69.9c0.6-17.4,1.1-34.7,1.7-52.1c0.8-27.2,1.5-54.4,2.3-81.7c1.3-8.8,2.7-17,4.6-23.5c0.3-8,0.7-16,1-24
  c1-22.8,2.1-45.6,3.1-68.4c0.4-9.9-1.3-25.4,4.6-29.1c0.7-0.2,1.5-0.3,2.2-0.5C275.6,640.7,273.2,655.5,273.2,665.9z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE35") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE35") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE35") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE35") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE35") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE35") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE35");
        }}
        d="M299.2,993.7c-3.4,20.1-6.1,52,1,70.9c8.6,3.9,13.1-2.3,19.9-3.1c5.3,0.7,10.5,1.4,15.8,2
  c9.3,1.6,29.5-8.3,34.7-12.2c20.3-15.3,31.7-89.3,39.2-121.3c3.7-15.5,4.8-32.7,7.6-50c0.2-8.3,1.3-16.7,1.5-25c0-7.3,0-14.6,0-21.9
  c2.7-2.7,6.5-6.1,11.7-4.6c14.5,5.8,6.2,55,3.1,69.9c-7.3,34.4-12.1,69.4-21.9,102c-9.4,31.1-19.8,61.1-27.5,93.3
  c-2.5-1.9-5.1-3.7-7.6-5.6c-4.4,0.6-9.1,5.4-15.3,6.6c-7.6-0.2-15.3-0.3-22.9-0.5c-17.4,3.3-24.9,3.7-43.8,0.5
  c-9.9-1.7-22.7,1-26.5-6.6c2.7-4.4-5.2-13.2,3.1-64.2c0.5-12.6,1-25.2,1.5-37.7c2.2-5.1,4.4-10.2,6.6-15.3c0.6-3.2-2.9-4.2-4.1-6.6
  c0.7-13.4,1.9-28,2.6-41.5c1.1-4,3.6-2.5,4-8.7c0.4-5.8-6.4-9.3-3.6-26.8c2.5-15.4-4.2-34,14.1-34.3c2.4,6.1,5.9,12.4,8.3,18.5
  c1.9-0.3,3.7-0.7,5.6-1C304.3,911.5,301.3,952.6,299.2,993.7z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE42") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE42") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE42") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE42") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE42") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE42") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE42");
        }}
        d="M358.6,1110.4c8.8,7.3,1.6-2.9,13.4,4.4c0.7-1.2,1.3-2.3,2-3.5c0.3-0.2,0.7-0.3,1-0.5
  c4.5,7.2,10.6,6.4,18.6,8.1c-4.9,9.2-11.2,17.6-12.5,31c0.2,0.8,0.3,1.7,0.5,2.5c4.5,1,10.7,1.2,12.7,5c1.7,14.1-4.8,26-10.6,29.7
  c-40.2-9.3-13.5-9.1-36.9-40.6c-6.9-8.4-13.8-16.8-20.7-25.3c-0.7-0.7-1.3-1.3-2-2c8.4-5.1,15.6-10.4,20.7-19.8c1.3,0,2.7,0,4,0
  C352.1,1102.2,355.7,1106.5,358.6,1110.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE6") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE6") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE6") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE6") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE6") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE6") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE6");
        }}
        d="M311.6,1147.8c6.2,5.1,12.4,10.2,18.6,15.2c0.8,4.6,1.7,9.1,2.5,13.7c3.2,12,10.3,22.4,18.1,30
  c7.8,7.6,18.1,14.1,27.6,19.8c6.5,3.9,15.7,6.2,19.6,12.7c3.7,6.2,0.2,28.2,2.5,37.6c3.1,12.6,7.5,25.1,13.5,35.1
  c3.7,5.1,7.4,10.2,11,15.2c-0.2,0.8-0.3,1.7-0.5,2.5c-3.1,5.2-28.6,14.6-36.1,16.8c-7.8-11.3-13.3-16.3-19.6-22.9
  c-14.5-15.2-29.7-31.2-52.2-38.1c-36.4-11.2-55.4,10.5-52.6,44.7c15.5,13.3,18.8,11.9,34.1,4c0,4.2,0,7.5,0,11.7
  c-6.4,4-17.6,2.5-25.6,4.6c-9.1-0.9-41.4-20.1-41.7-29.2c1.1-1.6,6-3.1,8.6-4.4c3,0.5,3.5,1.4,5.5,2.5c0.8-6.8,1.7-15.6,2.5-22.3
  c4.5-24.7,4.2-53,7.5-79.8c4.2-33.9,20.1-49.9,20.6-80.8c6.2-3.2,8.8-9.7,18.1-10.2C299.6,1133.6,305.6,1140.7,311.6,1147.8z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE31") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE31") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE31") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE31") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE31") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE31") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE31");
        }}
        d="M1627.8,551.8c-4.4,4.6-11,7.8-16.4,11.1c-2.5-14.7-5-29.4-7.5-44.1C1612.4,529.6,1627.9,531.8,1627.8,551.8z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE15") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE15") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE15") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE15") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE15") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE15") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE15");
        }}
        d="M1650.1,869.1c-41.9,26.9-83.9,53.7-125.8,80.6c-0.3,0.3-0.7,0.7-1,1c-1.4-2.8-1-7.7-1-11.9
  c0-21.3,7-26.9,14.6-41.3c18.1-34.4,41-68.6,70.5-92c9.8-7.8,21.1-21.3,35-24.3C1644,809.6,1652.5,837.2,1650.1,869.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE16") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE16") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE16") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE16") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE16") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE16") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE16");
        }}
        d="M1604.3,543.4c1.1,5.1,4,12.3,2.6,17.7c-5.1,4.9-22.4,14.6-29.2,18.8c-27.7,16.6-55.3,33.1-83,49.7
  c-0.3,0.3-0.7,0.7-1,1c-3.9-17.2-7.9-34.5-11.8-51.7c-1.6-6-6.4-14.8-4.6-22.3c2.3-9.9,11.4-14.3,19.1-18.9
  c17.5-10.5,38.8-19.4,57.8-28.2c7.7-3.5,9.1-4.9,19.9-7.1C1599,515,1597.4,512.8,1604.3,543.4z"
      />
      <path
        className={`croquis-path st2 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M1647.1,605.6c-1.8-2.6-8.2,0.2-14,3.6c-0.5-0.5-1.2-1-1.9-1.3c-0.4-0.2-0.9-0.4-1.3-0.5
  c-7.6-2.5-14.4,6.4-15.5,14.6c-5.2,4.2-10.4,9.3-8.6,12c1.5,2.2,6.4,0.5,11.4-2.1c0.7,0.7,1.5,1.2,2.5,1.6c7.6,3.2,14.6-5.4,16-13.7
  C1641.7,615.2,1649.2,608.7,1647.1,605.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M1673.3,909.4c-1.3-0.1-2.7,1.1-3.6,1.8c-0.8,0.5-1.6,1.1-2.4,1.6c-0.5-0.5-1-0.9-1.6-1.2
  c-6.7-3.6-14.5,5.3-16.1,13.4c-2.3,1.6-4.6,3.1-6.9,4.7c-2.4,2.4,0.4,6.4,3.6,5.1c1.4-0.7,2.7-1.4,4.1-2.1c0.6,1,1.4,1.8,2.6,2.4
  c7.5,3.9,16.3-7.4,16.5-16C1673,915.7,1678.6,909.7,1673.3,909.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE10") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE10") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE10") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE10") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE10") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE10") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE10");
        }}
        d="M26.7,585.8c6.5,19.9,14.2,36.9,23.9,53.7c10.7,18.4,20.9,37.9,29,58.8c5.1,13.1,6,32.3,13.7,43.4
  c8.1,11.6,26.1,18.5,38.2,26.1c30.4,19.1,60.8,38.2,91.1,57.2c-2.5-5.6-5.1-11.2-7.6-16.9c1.2-4.6,2.4-9.2,3.6-13.8c0-7,0-14,0-21
  c1-6,4.8-13.6,6.1-21.5c-0.5-11.6-1-23.2-1.5-34.8c-2.5-15.4-1.5-35.8,1-48.6c1.3-6.5-1.7-14.1-2.5-19.4c1.2-9.7,2.4-19.4,3.6-29.1
  c3.7-15.2,7.5-30.3,11.2-45.5c1.8-5.2,8-12.9,5.6-21c-2.7-9.2-20.7-14.3-28.5-18.9c-26.8-15.5-57-26-85.5-41.2
  c-17.5-0.1-53.5,36.2-66.7,46c-8.6-2.5-15.2,4.9-20.9,8.7c-5.6,3.7-12.7,6.7-15.8,12.8C20.9,568.3,24.7,579.5,26.7,585.8z
   M98.4,519.3c-2.5,14.7-5,29.4-7.5,44.1c-5.4-3.3-12-6.5-16.4-11.1C74.4,532.3,89.9,530.1,98.4,519.3z M124.6,580.4
  c-6.8-4.2-24.1-13.9-29.2-18.8c-1.4-5.4,1.5-12.6,2.6-17.7c6.9-30.6,5.3-28.4,30.2-41c10.8,2.2,12.2,3.6,19.9,7.1
  c19,8.8,40.3,17.7,57.8,28.2c7.7,4.6,16.8,9,19.1,18.9c1.8,7.5-3,16.3-4.6,22.3c-3.9,17.2-7.9,34.5-11.8,51.7c-0.3-0.3-0.7-0.7-1-1
  C179.9,613.5,152.3,597,124.6,580.4z M55.2,606.1c1.8-2.6,8.2,0.2,14,3.6c0.5-0.5,1.2-1,1.9-1.3c0.4-0.2,0.9-0.4,1.3-0.5
  c7.6-2.5,14.4,6.4,15.5,14.6c5.2,4.2,10.4,9.3,8.6,12c-1.5,2.2-6.4,0.5-11.4-2.1c-0.7,0.7-1.5,1.2-2.5,1.6
  c-7.6,3.2-14.6-5.4-16-13.7C60.6,615.7,53.1,609.2,55.2,606.1z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE9") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE9") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE9") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE9") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE9") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE9") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE9");
        }}
        d="M18.6,942.9c0.5,12.4,1,24.8,1.5,37.3c0.7,11.2,1.3,22.5,2,33.7c2.1,5.8,32.4,20.3,39.3,24.5
  c28,16.8,56,33.7,84.1,50.5c9.9,6.1,27.4,20.7,39.3,22.5c-2.1-30.1,4.2-26.5,8.1-45.9c-0.2-21.4-0.3-42.9-0.5-64.3
  c-0.8-4.6-1.7-9.2-2.5-13.8c1.2-9.4,10.5-15.9,8.6-26.5c-4.4-24-15.9-44.3-26.7-62.8c-21.7-37.4-40.5-75.8-73-102.1
  c-9.9-7.7-19.8-15.3-29.7-23c-6.3-3.6-12.3-7.2-18.3-10.8c-4.8,4.5-5.2,18.3-7,25.5c-5.3,21.2-7.8,43.8-13.1,66.9
  c-2.2,9.8-8.6,17.7-11.1,28.6C16.1,898.6,15.9,926,18.6,942.9z M51.9,868.1c-2.4-31.9,6.1-59.5,7.7-87.9c13.9,3,25.2,16.5,35,24.3
  c29.5,23.4,52.4,57.6,70.5,92c7.6,14.4,14.6,20,14.6,41.3c0,4.2,0.4,9.1-1,11.9c-0.3-0.3-0.7-0.7-1-1
  C135.8,921.8,93.8,895,51.9,868.1z M28.7,908.4c1.3-0.1,2.7,1.1,3.6,1.8c0.8,0.5,1.6,1.1,2.4,1.6c0.5-0.5,1-0.9,1.6-1.2
  c6.7-3.6,14.5,5.3,16.1,13.4c2.3,1.6,4.6,3.1,6.9,4.7c2.4,2.4-0.4,6.4-3.6,5.1c-1.4-0.7-2.7-1.4-4.1-2.1c-0.6,1-1.4,1.8-2.6,2.4
  c-7.5,3.9-16.3-7.4-16.5-16C29,914.7,23.4,908.7,28.7,908.4z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE30") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE30") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE30") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE30") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE30") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE30") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE30");
        }}
        d="M97.7,518.8c-2.5,14.7-5,29.4-7.5,44.1c-5.5-3.3-12.1-6.6-16.4-11.1C73.6,531.8,89.1,529.6,97.7,518.8z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE17") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE17") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE17") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE17") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE17") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE17") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE17");
        }}
        d="M59.3,781.3c13.9,2.9,25.2,16.5,35,24.3c29.4,23.3,52.4,57.5,70.5,92c7.6,14.5,14.6,20,14.6,41.3
  c0,4.2,0.4,9.1-1,11.9c-0.3-0.3-0.7-0.7-1-1c-41.9-26.9-83.9-53.7-125.8-80.6C49.1,837.2,57.5,809.6,59.3,781.3z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("CE18") ? "active" : ""
        }
        ${
          props.globalContext.selectedParts.indexOf("CE18") == 0 &&
          "fill-cyan-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE18") == 1 &&
          "fill-purple-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE18") == 2 &&
          "fill-orange-500"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE18") == 3 &&
          "fill-red-600"
        }
        ${
          props.globalContext.selectedParts.indexOf("CE18") == 4 &&
          "fill-green-300"
        }
        `}
        onClick={() => {
          props.globalContext.selectPart("CE18");
        }}
        d="M127.5,502.3c10.8,2.2,12.2,3.6,19.9,7.1c19,8.7,40.3,17.6,57.8,28.2c7.7,4.6,16.8,9.1,19.1,18.9
  c1.8,7.5-3,16.3-4.6,22.3c-3.9,17.2-7.9,34.5-11.8,51.7c-0.3-0.3-0.7-0.7-1-1c-27.7-16.6-55.3-33.1-83-49.7
  c-6.8-4.1-24.1-13.9-29.2-18.8c-1.4-5.4,1.4-12.6,2.6-17.7C104.1,512.8,102.5,515,127.5,502.3z"
      />
      <path
        className={`croquis-path st2 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M54.5,605.6c1.8-2.6,8.2,0.2,14,3.6c0.5-0.5,1.2-1,1.9-1.3c0.4-0.2,0.9-0.4,1.3-0.5c7.6-2.5,14.4,6.4,15.5,14.6
  c5.2,4.2,10.4,9.3,8.6,12c-1.5,2.2-6.4,0.5-11.4-2.1c-0.7,0.7-1.5,1.2-2.5,1.6c-7.6,3.2-14.6-5.4-16-13.7
  C59.9,615.2,52.3,608.7,54.5,605.6z"
      />
      <path
        className={`croquis-path st1 ${
          props.globalContext.selectedParts.includes("") ? "active" : ""
        }`}
        onClick={() => {
          props.globalContext.selectPart("");
        }}
        d="M28.2,909.4c1.3-0.1,2.7,1.1,3.6,1.8c0.8,0.5,1.6,1.1,2.4,1.6c0.5-0.5,1-0.9,1.6-1.2
  c6.7-3.6,14.5,5.3,16.1,13.4c2.3,1.6,4.6,3.1,6.9,4.7c2.4,2.4-0.4,6.4-3.6,5.1c-1.4-0.7-2.7-1.4-4.1-2.1c-0.6,1-1.4,1.8-2.6,2.4
  C41,939,32.2,927.6,32,919C28.5,915.7,22.9,909.7,28.2,909.4z"
      />
    </svg>
    // </div>
  );
}
