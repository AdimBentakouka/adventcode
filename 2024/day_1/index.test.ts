import {expect, test, describe} from "bun:test";
import {main} from "./index.ts";

describe("p1", () => {
    test("it should work for test data", async() => {
        expect((await main('./input/example.txt')).p1).toBe(11);
    })

    test("it should work for real data", async() => {
      expect((await main('./input/source.txt')).p1).toBe(3574690);
    })
})

describe("p2", () => {
    test("it should work for test data", async() => {
        expect((await main('./input/example.txt')).p2).toBe(31);
    })

    test("it should work for real data", async() => {
        expect((await main('./input/source.txt')).p2).toBe(22565391);
    })
})
