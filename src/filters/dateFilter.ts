export const dateFilter = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed in JavaScript
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};
