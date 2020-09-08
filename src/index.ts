export type ISortColumns<T> = {
    [property in keyof T]: boolean;
};

const sortOnColumn = <T>(name: keyof T, isAsc: boolean = true) => {
    return (a: T, b: T) => {
        let result;
        const aValue = a[name];
        const bValue = b[name];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            var nameA = aValue.toLowerCase();
            var nameB = bValue.toLowerCase();
            result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
            result = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            const aStr = String(aValue).toLowerCase();
            const bStr = String(bValue).toLowerCase();
            result = aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
        }

        return isAsc ? result : -result;
    };
};

export const makeSortColumns = <T>(obj: T[]): ISortColumns<T> => {
    const result: any = {};
    for (const key of Object.keys(obj[0])) {
        result[key] = true;
    }
    return result as ISortColumns<T>;
};

export default sortOnColumn;
