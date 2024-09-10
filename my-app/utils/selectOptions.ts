export const mainCropOptions = [
    { value: "", label: "Cultivo Principal" },
    { value: "Soja", label: "Soja" },
    { value: "Maiz", label: "Maiz" },
    { value: "Trigo", label: "Trigo" },
    { value: "Girasol", label: "Girasol" },
    { value: "Sorgo", label: "Sorgo" },
    { value: "Otro", label: "Otro" },
];

export const weatherTypeOptions = [
    { value: "", label: "Tipo de Clima" },
    { value: "Cálido y Húmedo", label: "Cálido y Húmedo" },
    { value: "Cálido y Seco", label: "Cálido y Seco" },
    { value: "Templado", label: "Templado" },
    { value: "Frío y Seco", label: "Frío y Seco" },
    { value: "Frío y Húmedo", label: "Frío y Húmedo" },
    { value: "Montañoso", label: "Montañoso" },
    { value: "Mediterráneo", label: "Mediterráneo" },
    { value: "Otro", label: "Otro" },
];

export const administrationOptions = [
    { value: "", label: "Administración" },
    { value: "Propietario", label: "Propietario" },
    { value: "Alquilado", label: "Alquilado" },
]

const currentYear = new Date().getFullYear();
export const seasonOptions = [
    { value: "", label: "Temporada" },
    { value: `${currentYear - 1}-${currentYear}`, label: `${currentYear - 1}-${currentYear}` },
    { value: `${currentYear}-${currentYear + 1}`, label: `${currentYear}-${currentYear + 1}` },
];