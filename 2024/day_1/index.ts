export const main = async (input: string) : Promise<number> => {
    const data = await Bun.file(input).text();

    const grid = data.split("\n").map(line => line.split("   "));

    const leftCol = grid.map(row => parseInt(row[0])).sort((a, b) => a - b);
    const rightCol = grid.map(row => parseInt(row[1])).sort((a, b) => a - b);

    return leftCol.reduce((tmp, leftValue, i) => {
        const distance = Math.abs(leftValue - rightCol[i]);
        return tmp + distance;
    }, 0);
}