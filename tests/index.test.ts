import sortOnColumn, {ISortColumns, makeSortColumns} from "../src";

interface IObj {
    name: string;
    value: number;
    misc: any;
}

let arr: IObj[];

let sortColumns: ISortColumns<IObj>;

beforeEach(() => {
    arr = [
        { name: 'd', value: 0, misc: '' },
        { name: 'b', value: 2, misc: undefined },
        { name: 'e', value: 4, misc: NaN },
        { name: 'a', value: 3, misc: null },
        { name: 'c', value: 1, misc: 0 }
    ];
    sortColumns = makeSortColumns<IObj>(arr)
})

describe('Test sorting', () => {
    test('Sort on name', () => {
        arr.sort(sortOnColumn<IObj>('name', sortColumns['name']));
        const order = ['a', 'b', 'c', 'd', 'e'];
        for (let i = 0; i < order.length; i++) {
            expect(arr[i].name).toBe(order[i]);
        }
        const reverseOrder = order.reverse();
        sortColumns['name'] = !sortColumns['name'];
        arr.sort(sortOnColumn<IObj>('name', sortColumns['name']));
        for (let i = 0; i < reverseOrder.length; i++) {
            expect(arr[i].name).toBe(reverseOrder[i]);
        }
    });
    test('Sort on value', () => {
        arr.sort(sortOnColumn<IObj>('value', sortColumns['value']));
        const order = [0, 1, 2, 3, 4];
        for (let i = 0; i < order.length; i++) {
            expect(arr[i].value).toBe(order[i]);
        }
        const reverseOrder = order.reverse();
        sortColumns['value'] = !sortColumns['value'];
        arr.sort(sortOnColumn<IObj>('value', sortColumns['value']));
        for (let i = 0; i < reverseOrder.length; i++) {
            expect(arr[i].value).toBe(reverseOrder[i]);
        }
    });
});
