import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faBan,
  faCloudUpload,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

export default function Tools_bar(props: any) {
  return (
    <div className="grid my-auto " style={{ zIndex: "9" }}>
      <div className="mb-3 grid h-100 w-14 rounded-2xl bg-sky-100 border-sky-900 border-2 shadow-xl text-center items-center my-auto">
        <div className="text-xs font-bold my-2">Tools</div>
        <div className="grid">
          {props.globalContext.cropActive ? (
            <div
              className="bg-sky-900 text-white rounded-xl mx-2 pt-1 pb-[2px] text-center cursor-pointer"
              onClick={() => {
                props.globalContext.setCropActive(
                  !props.globalContext.cropActive
                );
              }}
            >
              <i className="fa fa-crop pb-2" />
            </div>
          ) : (
            <div className="rounded-xl mx-2 pt-1 pb-[2px] text-center cursor-pointer" onClick={() => {
              props.globalContext.setCropActive(
                !props.globalContext.cropActive
              );
            }}>
              <i
                className="fa fa-crop pb-2"
                
              />
            </div>
          )}
        </div>
        <div className="grid my-2">
          <i
            className="fa fa-repeat mb-2 cursor-pointer"
            onClick={() => {
              props.globalContext.setRotate(props.globalContext.rotate + 90);
              props.globalContext.rotateImage(
                props.globalContext.fullSizeImage.fullsize,
                "right"
              );
            }}
          />
          <i
            className="fa fa-undo mb-2 cursor-pointer"
            onClick={() => {
              props.globalContext.setRotate(props.globalContext.rotate - 90);
              props.globalContext.rotateImage(
                props.globalContext.fullSizeImage.fullsize,
                "left"
              );
            }}
          />
        </div>
        <div className="grid place-items-center mb-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlassPlus}
            className="mb-2 text-gray-400"
            onClick={() => {
              // props.globalContext.setZoom(props.globalContext.zoom + 0.5);
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlassMinus}
            className="mb-2 text-gray-400"
            onClick={() => {
              // props.globalContext.setZoom(props.globalContext.zoom - 0.5);
            }}
          />
        </div>
      </div>
      <div className="grid h-16 w-14 rounded-2xl bg-sky-100 border-sky-900 border-2 shadow-xl text-center items-center my-2">
        <div
          className="grid place-items-center cursor-pointer"
          onClick={() => {
            props.globalContext.resetAll();
          }}
        >
          <div className="text-xs font-bold pb-2 noselect">Reset</div>
          <FontAwesomeIcon icon={faRotate} className="" />
        </div>
      </div>
      <div className="grid h-16 w-14 rounded-2xl bg-sky-100 border-sky-900 border-2 shadow-xl text-center items-center">
        <button
          disabled={
            props.globalContext.coordinates.length == 0 &&
            props.globalContext.selectedOtherLabels.length == 0
          }
          className="btn grid place-items-center cursor-pointer"
          onClick={() => {
            props.globalContext.encodeImage();
          }}
        >
          <div className="text-xs font-bold pb-2 noselect">Save</div>
          <FontAwesomeIcon icon={faCloudUpload} className="" />
        </button>
      </div>
    </div>
  );
}
