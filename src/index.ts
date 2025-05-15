import Tag from "./tag";

export default class FormGenerator {
    static formFor(template: Record<string, string>, urlObj: { url?: string }, callback: (f: unknown) => void): string {
        console.log(template);
        console.log(urlObj);
        callback("form");

        const { url } = urlObj;

        return new Tag("form", { action: url ?? "#", method: "post" }).toString();
    }
}
