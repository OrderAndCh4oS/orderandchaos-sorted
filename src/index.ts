export type ISortColumns<T> = {
    [property in keyof T]: boolean;
};

const sortOnColumn = <T>(name: keyof T, isAsc: boolean = true) => {
    return (objA: T, objB: T) => {
        let result;
        const a = objA[name];
        const b = objB[name];
        if (typeof a === 'string' && typeof b === 'string') {
            const strA = a.toLowerCase();
            const strB = b.toLowerCase();
            result = strA < strB ? -1 : strA > strB ? 1 : 0;
        } else if (typeof a === 'number' && typeof b === 'number') {
            result = a < b ? -1 : a > b ? 1 : 0;
        } else {
            const aAsStr = String(a).toLowerCase();
            const bAsStr = String(b).toLowerCase();
            result = aAsStr < bAsStr ? -1 : aAsStr > bAsStr ? 1 : 0;
        }

        return isAsc ? result : -result;
    };
};

export const makeSortColumns = <T>(obj: T[]): ISortColumns<T> => {
    const result: any = {};
    if (!obj.length) return result;
    for (const key of Object.keys(obj[0])) {
        result[key] = true;
    }
    return result as ISortColumns<T>;
};

export default sortOnColumn;
