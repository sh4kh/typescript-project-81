import { describe, expect, test } from "vitest";
import Tag from "../src/tag"; // Путь к вашему классу

describe("Tag class", () => {
    // 1. Тест для одиночного тега (например, <img>)
    test("should create a self-closing tag", () => {
        const imgTag = new Tag("img", { src: "image.jpg" });
        expect(imgTag.toString()).toBe("<img src=\"image.jpg\">");
        expect(imgTag.isSelfClosing).toBe(true);
    });

    // 2. Тест для парного тега без содержимого (например, <div></div>)
    test("should create a paired tag without content", () => {
        const divTag = new Tag("div", { class: "container" });
        expect(divTag.toString()).toBe("<div class=\"container\"></div>");
        expect(divTag.isSelfClosing).toBe(false);
    });

    // 3. Тест для парного тега с содержимым (например, <p>Hello</p>)
    test("should create a paired tag with content", () => {
        const pTag = new Tag("p", {}, "Hello, world!");
        expect(pTag.toString()).toBe("<p>Hello, world!</p>");
    });

    // 4. Тест для тега с несколькими атрибутами
    test("should handle multiple attributes", () => {
        const inputTag = new Tag("input", {
            type: "text",
            id: "username",
            placeholder: "Enter your name",
        });
        expect(inputTag.toString()).toBe(
            "<input type=\"text\" id=\"username\" placeholder=\"Enter your name\">",
        );
    });
});
