export const main = async (input: string): Promise<{p1:number, p2: number}> => {
    const data = await Bun.file(input).text();
    const lines = data.trim().split('\n');

    const p1 = lines.reduce((acc, line) => acc + calc(line), 0);
    const p2 = 0;

    return {
        p1,
        p2
    }
};

const calc = (text: string) : number => {
     const regex = /mul\((\d+),\s*(\d+)\)/g;

    const matches : {
        firstNumber: number,
        secondNumber: number
    }[] = [];
    let match;

    while((match = regex.exec(text)) !== null) {
        matches.push({
            firstNumber: parseInt(match[1]),
            secondNumber: parseInt(match[2])
        })
    }


    return matches.reduce((acc, match) => acc + match.firstNumber * match.secondNumber, 0);
}