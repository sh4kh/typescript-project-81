import InputTag from "./input-tag";
import TextareaTag from "./textarea";

export default class Builder {
    private fields: string[] = [];

    constructor(private template: Record<string, string>) {}

    input(name: string, attributes: Record<string, string> = {}): void {
        const { as, ...rest } = attributes;

        const value = this.template[name] ?? "";

        if (as === "textarea") {
            this.fields.push(new TextareaTag({ name, ...rest }, value).toString());
        }
        else {
            this.fields.push(new InputTag({ name, value, type: "text", ...rest }).toString());
        }
    }

    getFields(): string[] {
        return this.fields;
    }
}
