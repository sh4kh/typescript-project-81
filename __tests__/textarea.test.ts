import { describe, expect, test } from "vitest";
import TextareaTag from "../src/textarea";

describe("TextareaTag class", () => {
    test("should create an default textarea tag", () => {
        const tag = new TextareaTag();
        expect(tag.toString()).toBe("<textarea rows=\"2\" cols=\"20\"></textarea>");
    });

    test("should create an textarea tag with custom rows and cols", () => {
        const tag = new TextareaTag({ rows: 3, cols: 25 });
        expect(tag.toString()).toBe("<textarea rows=\"3\" cols=\"25\"></textarea>");
    });
});
