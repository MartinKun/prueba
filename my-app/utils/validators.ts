/** 
 * Esta clase contiene funciones para validar tipos de datos.
**/

/**
 * Verifica si un string es un número decimal (positivo o negativo, 
 * con punto decimal opcional).
 * @param value - El valor a verificar.
 * @returns true si el valor es un número decimal válido, false en caso contrario.
 */
export const isDecimal = (value: string) => {
    const decimalRegex = /^-?\d*\.?\d*$/;
    return decimalRegex.test(value);
};

/**
 * Verifica si un string es un número positivo entero.
 * @param value - El valor a verificar.
 * @returns true si el valor es un número positivo entero válido, false en caso contrario.
 */
export const isPositiveInteger = (value: string) => {
    const positiveIntegerRegex = /^\d*$/;
    return positiveIntegerRegex.test(value);
};