import { Color as TColor, ColorOptions as TColorOptions } from '@tiptap/extension-color'


export interface ColorOptions extends TColorOptions {
  dictionary: {
    name: string;
  };
}

export const Color = TColor.extend<ColorOptions>({
  name: "color",
  addOptions() {
    return {
      ...this.parent?.(),
      dictionary: {
        name: "Text color",
      },
    };
  },
  addStorage() {
    return {
      ...this.parent?.(),
      floatMenu: {
        items: [
          {
            id: this.name,
            name: this.options.dictionary.name,
            view: `<input type="color" />`,
            // shortcut: "Mod-B",
            active: ({ editor }:any) => editor.isActive(this.name),
            action: ({ editor }: any) => {},
            onInit: ({ editor, element }) => {
              const [inputElement] = element.children;
              if (!inputElement) return;
              inputElement.addEventListener('input', (e) => {
                const color = e.target.value;
                editor.chain().setColor(color).focus().run();
              });
            },
          },
        ],
      },
    };
  },
});
