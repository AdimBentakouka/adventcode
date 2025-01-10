export const main = async (input: string) : Promise<{p1:number, p2:number}> => {
    const data = await Bun.file(input).text();

    const grid = data.split("\n").map(line => line.split("   "));

    const leftCol = grid.map(row => parseInt(row[0])).sort((a, b) => a - b);
    const rightCol = grid.map(row => parseInt(row[1])).sort((a, b) => a - b);

    const p1 = leftCol.reduce((tmp, leftValue, i) => {
        const distance = Math.abs(leftValue - rightCol[i]);
        return tmp + distance;
    }, 0);

    const p2 = leftCol.reduce((tmp, leftValue) => {
        const occ = rightCol.filter((rightValue) =>  leftValue === rightValue).length;
        return tmp + (occ * leftValue);
    }, 0);

    return {p1, p2}
}
