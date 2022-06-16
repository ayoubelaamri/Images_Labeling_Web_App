import React, { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import MultiCrops from "./multi-crops/";

export default function Image_process_area(props: any) {
  const _width = useRef(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth - 20);
  const [height, setHeight] = useState(window.innerHeight - 20);

  useEffect(() => {
    // window.onresize = () => {
    //   const ratio = window.innerWidth / _width.current;
    //   console.log(ratio, coordinates[0]);
    //   _width.current = window.innerWidth;
    //   setWidth(window.innerWidth - 20);
    //   setCoordinates(
    //     coordinates.map((c: any) => ({
    //       ...c,
    //       x: c.x * ratio,
    //       y: c.y * ratio,
    //       width: c.width * ratio,
    //       height: c.height * ratio
    //     }))
    //   );
    // };
  }, []);

  const changeCoordinate = (coordinate: any, index: any, coordinates: any) => {

    coordinates.map((c: any) => {
      if (c.x < 0) {
        c.x = 0;
      } else if (c.x + c.width > props.globalContext.img_width) {
        c.x = props.globalContext.img_width - c.width;
      }

      if (c.y < 0) {
        c.y = 0;
      } else if (c.y + c.height > props.globalContext.img_height) {
        c.y = props.globalContext.img_height - c.height;
      }

      if (c.width > props.globalContext.img_width) {
        c.width = props.globalContext.img_width;
      }

      if (c.height > props.globalContext.img_height) {
        c.height = props.globalContext.img_height;
      }
    });

    props.globalContext.setCoordinates(coordinates);
  };
  const deleteCoordinate = (coordinate: any, index: any, coordinates: any) => {
    props.globalContext.setCoordinates(coordinates);
    props.globalContext.setSelectedParts(props.globalContext.selectedParts.filter((codeCroquis: any, i: number) => i != index ));
    props.globalContext.setSelectedPieces(props.globalContext.selectedPieces.filter((codeArticle: any, i: number) => i != index ));
  };

  return (
    <div className="relative grid place-items-center w-full h-[calc(63vh+23px)] border-4 border-dashed border-sky-900 rounded-2xl p-2">
      {props.globalContext.loading_fullSizeImage ? (
        <div className="">
          <svg
            role="status"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : !props.globalContext.fullSizeImage ? (
        <div className="">Sélectionner une image ci dessous !</div>
      ) : props.globalContext.end_of_images ? (
        <div className="">END !</div>
      ) : props.globalContext.cropActive ? (
        <>
          <MultiCrops
            globalContext={props.globalContext}
            src={`data:image/png;base64,${props.globalContext.fullSizeImage.fullsize}`}
            width={width}
            height={height}
            coordinates={props.globalContext.coordinates}
            // onDrag={this.changeCoordinate}
            // onResize={this.changeCoordinate}
            // onDraw={this.changeCoordinate}
            onChange={changeCoordinate}
            onDelete={deleteCoordinate}
            // onLoad={e => console.log(e.target.height, e.target.width)}
          />
          {/* <div className="grid absolute bottom-5 w-5/6 gap-1">
            {props.globalContext.coordinates.length > 0 &&
              props.globalContext.coordinates.map((c: any) => {
                return (
                  <div key={c.id} className="bg-white rounded-xl shadow px-3 py-1 text-center text-sm font-semibold">
                    X : {((c.x+c.width/2) / props.globalContext.img_width).toFixed(2)} || Y
                    : {((c.y+c.height/2) / props.globalContext.img_height).toFixed(2)} || W :{" "}
                    {(c.width / props.globalContext.img_width).toFixed(2)} || H
                    : {(c.height / props.globalContext.img_height).toFixed(2)}
                  </div>
                );
              })}
          </div> */}

          {/* <ReactCrop
            className="h-full w-full"
            style={{maxHeight: "450px"}}
            crop={props.globalContext.crop}
            // onChange={(c) => props.globalContext.setCrop(c)}
            onChange={(_: any, percentCrop:any) => props.globalContext.setCrop(percentCrop)}
            // onImageLoaded={onImageLoaded}
            // ruleOfThirds
          >
            <img
              src={`data:image/png;base64,${props.globalContext.fullSizeImage.fullsize}`}
              className="h-full w-full noselect"
              style={{
                // transform: "rotate(" + props.globalContext.rotate + "deg) scale(" + props.globalContext.zoom + ")",
                transform: "scale(" + props.globalContext.zoom + ")",
              }}
            />
          </ReactCrop> */}
          {/* {props.globalContext.crop.width != 0 && (
            <div className="absolute bg-white rounded-xl shadow bottom-5 w-5/6 px-3 py-1 text-center text-sm font-semibold">
              || x = {((props.globalContext.crop.x+(props.globalContext.crop.width/2))/100).toFixed(2)} || y ={" "}
              {((props.globalContext.crop.y+(props.globalContext.crop.height/2))/100).toFixed(2)} || width ={" "}
              {(props.globalContext.crop.width/100).toFixed(2)} || height ={" "}
              {(props.globalContext.crop.height/100).toFixed(2)} ||
            </div>
          )} */}
        </>
      ) : (
        <MultiCrops
          globalContext={props.globalContext}
          src={`data:image/png;base64,${props.globalContext.fullSizeImage.fullsize}`}
          width={width}
          height={height}
          // coordinates={props.globalContext.coordinates}
          // onDrag={this.changeCoordinate}
          // onResize={this.changeCoordinate}
          // onDraw={this.changeCoordinate}
          // onChange={changeCoordinate}
          // onDelete={deleteCoordinate}
          // onLoad={e => console.log(e.target.height, e.target.width)}
        />
        // <ReactCrop
        //   className="h-full w-full"
        //   // style={{ height: "60vh" }}
        //   // crop={crop}
        //   onChange={(c) => {}}
        //   // ruleOfThirds
        // >
        //   <img
        //     src={`data:image/png;base64,${props.globalContext.fullSizeImage.fullsize}`}
        //     className="h-full w-full cursor-default noselect"
        //     style={{
        //       // transform: "rotate(" + props.globalContext.rotate + "deg) scale(" + props.globalContext.zoom + ")",
        //       transform: "scale(" + props.globalContext.zoom + ")",
        //     }}
        //   />
        // </ReactCrop>
      )}
    </div>
  );
}
