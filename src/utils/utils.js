export const stripCharacters = (str) => {
    return str.replace(/[^a-zA-Z ]/g, "").toLowerCase();
};