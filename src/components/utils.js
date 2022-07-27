// common utils functions
import format from 'date-fns/format';

/**
 * 
 * @param {string} dateFrom 
 * @param {string} dateTo 
 * @returns array
 */
export function getAllDatesBetween(dateFrom, dateTo){
    const dates = [];
    for (let d = new Date(dateFrom); d < dateTo; d.setDate(d.getDate() + 1)) {
        dates.push(format(new Date(d), 'd LLL, Y'));
    }

    return dates;
}