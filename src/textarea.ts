import Tag from "./tag";

export default class TextareaTag extends Tag {
    constructor(attributes: Record<string, string | number> = {}, value: string) {
        super("textarea", {
            cols: 20,
            rows: 40,
            ...attributes,
        },
        value);
    }
}
