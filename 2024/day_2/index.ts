const MAX_DISTANCE = 3;
const MIN_DISTANCE = 1;

export const main = async (input: string) : Promise<number> => {
    const data = await Bun.file(input).text();

    return data.split("\n").reduce((tmp, line) => {
        return tmp + Number(isRowSafe(line.split(" ")));
    }, 0);
}

const isRowSafe = (row : string[]) : boolean => {

    const isAscending = parseInt(row[1]) > parseInt(row[0]);


    for(let i = 1; i < row.length; i++) {
        const previousValue = parseInt(row[i - 1]);
        const currentValue = parseInt(row[i]);

        if((isAscending && currentValue < previousValue )|| (!isAscending && previousValue < currentValue))
            return false;

        const distance = Math.abs(currentValue - previousValue);
        
        if(distance > MAX_DISTANCE || distance < MIN_DISTANCE) return false;
    }

    return true;
}