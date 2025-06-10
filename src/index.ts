import Builder from "./builder";
import Tag from "./tag";

interface FormAttrs {
    action?: string
    method?: "post" | "put"
}

interface FormBuilder {
    input: (name: string, opts?: Record<string, string>) => void
}

export default class FormGenerator {
    static formFor(template: Record<string, string>, attrs: FormAttrs = {}, builder: (f: FormBuilder) => void): string {
        const { action = "#", method = "post" } = attrs;

        const formBuilder = new Builder(template);

        builder(formBuilder);

        const fields = formBuilder.getFields();

        const fieldsHtml = fields.length > 0 ? "\n" + fields.join("\n") + "\n" : "";

        return new Tag("form", { action, method }, fieldsHtml).toString();
    }
}
