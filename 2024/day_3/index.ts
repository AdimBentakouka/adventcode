export const main = async (input: string): Promise<{ p1: number, p2: number }> => {
    const data = await Bun.file(input).text();


    const p1 = calc(data);
    const p2 = calcP2(data);

    return {
        p1,
        p2
    }
};

const calc = (text: string): number => {
    const regex = /mul\((\d+),\s*(\d+)\)/g;

    const matches: {
        firstNumber: number,
        secondNumber: number
    }[] = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        matches.push({
            firstNumber: parseInt(match[1]),
            secondNumber: parseInt(match[2])
        })
    }


    return matches.reduce((acc, match) => acc + match.firstNumber * match.secondNumber, 0);
}

const calcP2 = (text: string): number => {
    const regex = /(mul\((\d{1,3}),\s*(\d{1,3})\)|don't|do)/g;

    const matches: {
        firstNumber: number,
        secondNumber: number
    }[] = [];

    let match;
    let canCapture = true;

    while ((match = regex.exec(text)) !== null) {

        if (match[0] === `don't`) {
            canCapture = false;
        }
        if (match[0] === `do`) {
            canCapture = true;
        }

        if (canCapture && match[1].startsWith('mul')) {
            matches.push({ firstNumber: parseInt(match[2]), secondNumber: parseInt(match[3])});
        }
    }

    return matches.reduce((acc, match) => acc + match.firstNumber * match.secondNumber, 0);
}