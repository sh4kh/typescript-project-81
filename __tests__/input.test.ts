import { describe, expect, test } from "vitest";
import InputTag from "../src/input-tag";

describe("InputTag class", () => {
    test("should create an default input tag", () => {
        const inputTag = new InputTag();
        expect(inputTag.toString()).toBe("<input type=\"text\">");
    });

    test("should create an input tag with type number", () => {
        const inputTag = new InputTag({ type: "number" });
        expect(inputTag.toString()).toBe("<input type=\"number\">");
    });

    test("should create an input tag with class attribute", () => {
        const inputTag = new InputTag({ class: "user-input" });
        expect(inputTag.toString()).toBe("<input type=\"text\" class=\"user-input\">");
    });
});
