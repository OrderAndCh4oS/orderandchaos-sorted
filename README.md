# @orderandchaos/sorted

> Sort an array of objects by it&#x27;s keys

[![NPM](https://img.shields.io/npm/v/@orderandchaos/sorted.svg)](https://www.npmjs.com/package/@orderandchaos/sorted) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @orderandchaos/sorted
```

## Usage

```tsx
import sortOnColumn, { ISortColumns, makeSortColumns } from '@orderandchaos/sorted';

interface IObj {
    name: string,
    value: number,
    misc: any
}

const arr: IObj[] = [
    {name: 'a', value: 3, misc: null},
    {name: 'b', value: 2, misc: undefined},
    {name: 'c', value: 1, misc: 0},
    {name: 'd', value: 0, misc: ''},
]


const sortColumns: ISortColumns = makeSortColumns<IObj>(arr);

// Sort on 'name'
const sortedByNameAsc = arr.sort(sortOnColumn<IObj>('name', sortColumns.name));
console.log('Name Asc', sortedByNameAsc);

sortColumns.name = !sortColumns.name;

const sortedByNameDesc = arr.sort(sortOnColumn<IObj>('name', sortColumns.name));
console.log('Name Desc', sortedByNameDesc);

// Sort on 'value'
const sortedByValueAsc = arr.sort(sortOnColumn<IObj>('value', sortColumns.value));
console.log('Value Asc', sortedByValueAsc);

sortColumns.value = !sortColumns.value;

const sortedByValueDesc = arr.sort(sortOnColumn<IObj>('value', sortColumns.value));
console.log('Value Desc', sortedByValueDesc);
```

## License

MIT © [sarcoma](https://github.com/sarcoma)
