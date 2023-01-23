// кількість літр
function makeString(length) {
    const randomString = (Math.random() + 1).toString(36).substring(2);
    return randomString.slice(0, length);
}

// max - максимальне число, dec - кількість цифр після коми
export function makeInt(max = 1, dec = 0) {
    const decimal = Math.pow(10, dec);
    const randomInt = Math.floor(Math.random() * max * decimal + 1) / decimal;
    return randomInt;
}

const randomStringArray = (n = 5) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        arr.push(makeString(randomNum));
    }
    return arr;
};

const takeString = (array) => {
    const rand = Math.floor(Math.random() * (array.length - 1))
    return array[rand];
}
export const randomObj = () => {
    const obj = {
        val1: makeString(10), //random string, length 10,
        val2: makeInt(100, 2), //random float 2 decimal,
        val3: makeInt(100, 4), //random float 4 decimal,
        val4: makeInt(100), //random int,
        val5: makeInt(100), //random int,
        val6: "https://picsum.photos/120/50?random=" + makeInt(50), //random img path,
        val7: makeString(10), //random string, length 10,
        val8: takeString(randomStringArray(5)), //одно из 5ти значений строк [str1, str2, str3, str4, str5]
    }
    return obj
}

export default function mainArray(n = 5) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(randomObj());
    }
    return arr;
}
