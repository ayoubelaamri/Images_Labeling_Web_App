import { AnyARecord } from "dns";
import React from "react";

export default function Others_labels(props: any) {
  const labels = [
    { id: "tableau_de_bord", name: "Tab de bord" },
    { id: "numero_de_chassis", name: "N Chassis" },
    { id: "carte_grise", name: "Carte grise" },
    { id: "constat_amiable", name: "Cst amiable" },
    { id: "contrat_assurance", name: "Ctr assurance" },
    { id: "vehicule_avec_matricule", name: "Avec matricule" },
    { id: "avant_gauche", name: "Av gauche" },
    { id: "avant_droite", name: "Av droite" },
    { id: "arriere_gauche", name: "Arr gauche" },
    { id: "arriere_droite", name: "Arr droite" },
    { id: "matricule_avant", name: "Matricule Av" },
    { id: "matricule_arriere", name: "Matricule Arr" },
  ];

  return (
    <div className="flex">
      <div className="scaled2">
        <div className="flex gap-3 w-60">
          <div className="grid grid-cols-2 w-full">
            {labels.map((label) => {
              return (
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value={label.id}
                    id={label.id}
                    onChange={(e)=> props.globalContext.selectOtherLabel(e.target.value)}
                    checked={props.globalContext.selectedOtherLabels.includes(label.id)}
                  />
                  <label
                    className="form-check-label text-xs inline-block text-gray-800"
                    htmlFor={label.id}
                  >
                    {label.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
