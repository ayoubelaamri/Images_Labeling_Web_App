import React from "react";
import { Divider } from "@mui/material";

import logo from "../assets/images/exp.png";

export default function Sidebar(props: any) {
  function handleInput(e: any) {
    // this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "selectedDossier") {
      props.globalContext.setSelectedDossier(e.target.value);
    }
    if (e.target.name === "selectedExpert") {
      props.globalContext.setSelectedExpert(e.target.value);
    }
    if (e.target.name === "selectedPieces") {
      props.globalContext.selectPiece(e.target.value);
    }
    if (e.target.name === "selectedMarque") {
      props.globalContext.setSelectedMarque(e.target.value);
    }
    if (e.target.name === "selectedModel") {
      props.globalContext.setSelectedModel(e.target.value);
    }
    // if (e.target.name === "selectedNumMission") {
    //   // props.globalContext.setSelectedModel(e.target.value);
    // }
  }

  return (
    <div className="flex flex-col w-1/6 h-100 rounded-2xl px-3 bg-gradient-to-r to-sky-900 from-blue-900 ">
      <div className="grid place-items-center py-6">
        <img className="w-36 mx-auto mb-2" src={logo} alt="" />
        <h3 className="text-white font-semibold">
          DATAEX | <span className="font-medium">dLabeler</span>
        </h3>
      </div>
      <Divider className="mx-4 text-white" />
      <div className="max-w-md py-2 px-4 bg-sky-100 shadow-lg rounded-lg my-3 text-center h-40">
        <h2 className="text-gray-800 text-xl font-semibold mb-1">N° Dossier</h2>
        {props.globalContext.loading_dossiers ? (
          <div className="grid place-items-center">
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
        ) : (
          <div className="grid place-items-center">
            <div className="flex items-center">
              <i
                className={`fa fa-arrow-left ${
                  props.globalContext.dossiers.data.indexOf(
                    props.globalContext.selectedDossier
                  ) === 0
                    ? "text-gray-400"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  const index = props.globalContext.dossiers.data.indexOf(
                    props.globalContext.selectedDossier
                  );
                  if (
                    index >= 1 &&
                    index <= props.globalContext.dossiers.data.length - 1
                  ) {
                    const nextItem =
                      props.globalContext.dossiers.data[index - 1];
                    props.globalContext.setSelectedDossier(nextItem);
                  }
                }}
              ></i>
              <input
                type="text"
                name="selectedDossier"
                value={props.globalContext.selectedDossier.numRequete}
                onChange={handleInput}
                className="w-100 h-6 mx-2 text-gray-600 text-sm font-bold text-sky-900 font-mono text-center"
              />
              <i
                className={`fa fa-arrow-right ${
                  props.globalContext.dossiers.data.indexOf(
                    props.globalContext.selectedDossier
                  ) ===
                  props.globalContext.dossiers.data.length - 1
                    ? "text-gray-400"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  const index = props.globalContext.dossiers.data.indexOf(
                    props.globalContext.selectedDossier
                  );
                  if (
                    index >= 0 &&
                    index < props.globalContext.dossiers.data.length - 1
                  ) {
                    const nextItem =
                      props.globalContext.dossiers.data[index + 1];
                    props.globalContext.setSelectedDossier(nextItem);
                  }
                }}
              ></i>
            </div>
            <div className="grid mt-1">
              <div className="text-xs">
                Expert : {props.globalContext.selectedDossier.codeExpert}
              </div>
              <div className="text-xs">
                Mission : {props.globalContext.selectedDossier.numMission}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-md py-2 px-3 bg-sky-100 shadow-lg rounded-lg mb-3 text-center h-40">
        <h2 className="text-gray-800 text-xl font-semibold mb-1">
          Filtre Dossiers
        </h2>
        <div className="grid place-items-center">
          <div className="flex items-center w-full">
            <div className="mb-1 w-full">
              <select
                name="selectedMarque"
                onChange={handleInput}
                className="form-select appearance-none
                block
                w-full
                pl-3
                pr-10
                py-0
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="">Select Marque</option>
                {props.globalContext.marques.map((m: any, index: number) => {
                  return (
                    <option key={index} value={m.marque}>
                      {m.marque}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex items-center w-full">
            <div className="mb-0 w-full">
              <select
                name="selectedModel"
                onChange={handleInput}
                className="form-select appearance-none
                block
                w-full
                pl-3
                pr-10
                py-0
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="">Select Model</option>
                {props.globalContext.models.map((m: any) => {
                  return <option value={m.model}>{m.model}</option>;
                })}
              </select>
            </div>
          </div>
          {/* <div className="flex mt-1">
            <input
              type="text"
              name="selectedNumMission"
              // value={props.globalContext.selectedDossier.numRequete}
              onChange={handleInput}
              className="w-100 h-6 mx-2 text-gray-600 text-sm font-bold text-sky-900 font-mono text-center"
            />
          </div> */}
        </div>
      </div>
      <Divider className="mx-4 text-white" />
      <div className="h-100 max-w-md py-3 px-3 bg-sky-100 shadow-lg rounded-lg my-3 text-cente overflow-auto">
        <h2 className="text-gray-800 text-xl font-semibold text-center">
          Avis Expert
        </h2>

        <div className="flex flex-col mt-3">
          {props.globalContext.loading_pieces ? (
            <div className="grid place-items-center">
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
          ) : (
            props.globalContext.pieces?.map(
              (
                piece: {
                  codeArticle: string;
                  designation: string;
                  codeCroquis: string;
                },
                index: any
              ) => {
                return (
                  <div
                    key={index}
                    className="flex items-center text-left h-[32px]"
                  >
                    <input
                      type="checkbox"
                      id={"selectedPieces" + index}
                      name="selectedPieces"
                      value={piece.codeArticle}
                      onChange={handleInput}
                      checked={props.globalContext.selectedPieces.includes(
                        piece.codeArticle
                      )}
                      className="mr-2"
                    />
                    <label
                      htmlFor={"selectedPieces" + index}
                      className="w-full text-xs truncate hover:text-clip hover:z-10"
                    >
                      {piece.designation}
                    </label>
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
      <Divider className="mx-4 text-white" />
      <div className="py-2 pb-3 text-center text-white text-sm font-bold ">
        © {new Date().getFullYear()} - Expertis
      </div>
    </div>
  );
}
