import mainArray from './array';

export const values = mainArray(5).map((obj) => {
    const column = {}
    column.Col1 = `<h1>Display img from ${obj.val6} img path</h1>`,
        column.Col2 = obj.val1,
        column.Col3 = obj.val2 + "кг",
        column.Col4 = obj.val4 + obj.val5,
        column.Col5 = obj.val7,
        column.Col6 = obj.val8;
    return column
});

