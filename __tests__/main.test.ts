import { describe, expect, test } from "vitest";
import FormGenerator from "../src/index"

describe("FormGenerator", () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };

    test("should return empty form", () => {
        const form = FormGenerator.formFor(template, {}, (f) => {});
        expect(form).toBe("<form action=\"#\" method=\"post\"></form>")
    })

    test("should return empty form with non empty action", () => {
        const form = FormGenerator.formFor(template, {url: "/users"}, (f) => {});
        expect(form).toBe("<form action=\"/users\" method=\"post\"></form>")
    })
});

