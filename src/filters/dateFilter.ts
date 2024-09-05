import { timeStamp } from "console";

export const dateFilter = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp);
    return date.toLocaleDateString('en-GB',{
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year:'numeric'
    });
    
}