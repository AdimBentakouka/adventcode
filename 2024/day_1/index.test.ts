import {expect, test} from "bun:test";
import {main} from "./index.ts";

test("it should work for test data", async() => {
    expect(await main('./input/example.txt')).toBe(11);
})

test("it should work for real data", async() => {
    expect(await main('./input/source.txt')).toBe(3574690);
})