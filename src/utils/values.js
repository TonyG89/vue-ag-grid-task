import mainArray from './array';


export const values = mainArray(6).map((obj) => {
    const column = {}
    column.Col1 = obj.val6,
        column.Col2 = obj.val1,
        column.Col3 = obj.val2+" кг",
        column.Col4 = obj.val4 + obj.val5,
        column.Col5 = obj.val7,
        column.Col6 = obj.val8;
    console.log(column);
    return column
});

console.log(values);
