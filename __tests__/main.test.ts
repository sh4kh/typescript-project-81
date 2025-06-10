import { describe, expect, test } from "vitest";
import FormGenerator from "../src/index";
import { simpleTextareaForm, formWithMultipleInputs } from "../__fixtures__/forms";

describe("FormGenerator", () => {
    const template = { name: "rob", job: "hexlet", gender: "m" };

    test("should return empty form", () => {
        const form = FormGenerator.formFor(template, {}, (f) => {});
        expect(form).toBe("<form action=\"#\" method=\"post\"></form>");
    });

    test("should return empty form with non empty action", () => {
        const form = FormGenerator.formFor(template, { action: "/users" }, (f) => {});
        expect(form).toBe("<form action=\"/users\" method=\"post\"></form>");
    });

    test("should return form with textarea", () => {
        const form = FormGenerator.formFor(template, {}, f => f.input("job", { as: "textarea" }));

        expect(form).toBe(simpleTextareaForm);
    });

    test("should return form with multiply inputs", () => {
        const form = FormGenerator.formFor(template, {}, (f) => {
            f.input("name", { class: "user-input" });
            f.input("job");
        });

        expect(form).toBe(formWithMultipleInputs);
    });
});
