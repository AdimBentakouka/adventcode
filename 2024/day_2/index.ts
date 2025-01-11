const MAX_DISTANCE = 3;
const MIN_DISTANCE = 1;


export const main = async (input: string): Promise<{ p1: number, p2: number }> => {
    const data = await Bun.file(input).text();
    const lines = data.trim().split('\n');

    const p1 = lines.reduce((acc, line) => acc + Number(isRowSafe(line.split(' ').map(Number))), 0);
    const p2 = lines.reduce((acc, line) => {
        const row = line.split(' ').map(Number);
         if(isRowSafe(row))
         {
             return acc + 1;
         }

        for(let i = 0; i < row.length; i++)
        {
            const newRow = [...row.slice(0, i), ...row.slice(i + 1)];
            if (isRowSafe(newRow)) {
                return acc + 1;
            }
        }

        return acc;
    }, 0);


    return {p1, p2}
}


const isRowSafe = (row: number[]) => {

    const rowSortedByAsc = [...row].sort((a, b) => a - b);
    const rowSortedByDesc = [...row].sort((a, b) => b - a);

    const isSorted =
        row.every((value, index) => value === rowSortedByAsc[index]) ||
        row.every((value, index) => value === rowSortedByDesc[index]);


    for (let i = 1; i < row.length; i++) {
        const previousValue = row[i - 1];
        const currentValue = row[i];

        const distance = Math.abs(currentValue - previousValue);

        if (distance < MIN_DISTANCE || distance > MAX_DISTANCE) {
            return false
        }
    }

    return isSorted;
}
