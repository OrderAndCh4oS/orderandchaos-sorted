import React, { useState } from 'react';

import 'sort-array-by-object-key/dist/index.css';
import { Column, Container, Row, styles } from '@orderandchaos/react-components-typescript';
import sortOnColumn, { ISortColumns, makeSortColumns } from '@orderandchaos/sorted';

interface IObj {
    name: string,
    value: number,
    misc: any
}

const arr: IObj[] = [
    { name: 'a', value: 3, misc: null },
    { name: 'b', value: 2, misc: undefined },
    { name: 'c', value: 1, misc: 0 },
    { name: 'd', value: 0, misc: '' }
];

const App = () => {
    const [dataArr, setDataArr] = useState<IObj[]>(arr);
    const [sortColumns, setSortColumns] = useState<ISortColumns<IObj>>(makeSortColumns(arr));

    const sortBy = (name: keyof IObj, isAsc: boolean) => {
        const sortedOils = dataArr.sort(sortOnColumn<IObj>(name, isAsc));
        setDataArr([...sortedOils]);
    };

    const sortColumn = (name: keyof IObj) => () => {
        if (sortColumns === null) return;
        sortBy(name, sortColumns[name]);
        setSortColumns((prevState: ISortColumns<IObj>) => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <Container>
            <Row>
                <Column columnClass={styles.col12}>
                    <table className={`${styles.table_alternatingRows}`}>
                        <thead>
                        <tr>
                            <th>
                                <button onClick={sortColumn('name')}>
                                    Name
                                </button>
                            </th>
                            <th>
                                <button onClick={sortColumn('value')}>
                                    Value
                                </button>
                            </th>
                            <th>
                                <button onClick={sortColumn('misc')}>
                                    Misc
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataArr.map((o: IObj) =>
                            <tr>
                                <td>{o.name}</td>
                                <td>{o.value}</td>
                                <td>{String(o.misc)}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </Column>
            </Row>
        </Container>
    );
};

export default App;
