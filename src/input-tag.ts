import Tag from "./tag";

export default class InputTag extends Tag {
    constructor(attributes: Record<string, string> = {}) {
        super("input", {
            type: "text",
            ...attributes,
        });
    }
}
