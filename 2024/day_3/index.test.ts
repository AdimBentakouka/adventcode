import {expect, test, describe} from "bun:test";
import {main} from "./index.ts";

describe("p1", () => {
    test("it should work for test data", async() => {
        expect((await main('./input/example.txt')).p1).toBe(161);
    })

    test("it should work for real data", async() => {
        expect((await main('./input/source.txt')).p1).toBe(155955228);
    })
})

