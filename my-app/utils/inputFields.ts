import { administrationOptions, mainCropOptions, seasonOptions, weatherTypeOptions } from "./selectOptions";

/** 
 * Este archivo centraliza la configuración de los campos de entrada (input) 
 * y selección (select) para el formulario ubicado en app/field/new/page.tsx 
 * y otros formularios similares dentro de la aplicación. Permite mantener 
 * un código más reducido, organizado y legible.
 * 
 */

export const newFieldInputFields = [
    {
        label: "Nombre del campo",
        name: "name",
    },
    {
        label: "Latitud",
        name: "latitude",
    },
    {
        label: "Longitud",
        name: "longitude",
    },
    {
        label: "Tamaño (hectáreas)",
        name: "size",
    },
    {
        label: "Cantidad de empleados",
        name: "workersAmount",
    },
];

export const newFieldSelectFields = [
    {
        name: "mainCrop",
        options: mainCropOptions,
    },
    {
        name: "weatherType",
        options: weatherTypeOptions,
    },
    {
        name: "administration",
        options: administrationOptions,
    },
    {
        name: "season",
        options: seasonOptions,
    },
];