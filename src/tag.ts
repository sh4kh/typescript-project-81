export default class Tag {
    private static SELF_CLOSING_TAGS = [
        "img", "input", "br", "hr", "meta", "link", "area",
        "base", "col", "embed", "param", "source", "track", "wbr",
    ];

    constructor(private tagName: string, private attributes: Record<string, string | number> = {}, private content = "") {}

    get isSelfClosing(): boolean {
        return Tag.SELF_CLOSING_TAGS.includes(this.tagName);
    }

    toString(): string {
        const attrs = Object.entries(this.attributes)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join("");

        if (this.isSelfClosing) {
            return `<${this.tagName}${attrs}>`;
        }

        return `<${this.tagName}${attrs}>${this.content}</${this.tagName}>`;
    }
}
