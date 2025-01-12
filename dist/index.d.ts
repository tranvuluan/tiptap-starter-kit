import * as _tiptap_core from '@tiptap/core';
import { Node, NodeViewRendererProps, Editor, Extension, Range, AnyExtension, Mark as Mark$1 } from '@tiptap/core';
import { SubscriptExtensionOptions } from '@tiptap/extension-subscript';
import { SuperscriptExtensionOptions } from '@tiptap/extension-superscript';
import { BoldOptions as BoldOptions$1 } from '@tiptap/extension-bold';
import { CodeOptions as CodeOptions$1 } from '@tiptap/extension-code';
import { LinkOptions as LinkOptions$1 } from '@tiptap/extension-link';
import { ItalicOptions as ItalicOptions$1 } from '@tiptap/extension-italic';
import { StrikeOptions as StrikeOptions$1 } from '@tiptap/extension-strike';
import { HighlightOptions as HighlightOptions$1 } from '@tiptap/extension-highlight';
import { UnderlineOptions as UnderlineOptions$1 } from '@tiptap/extension-underline';
import { HeadingOptions as HeadingOptions$1 } from '@tiptap/extension-heading';
import { ParagraphOptions as ParagraphOptions$1 } from '@tiptap/extension-paragraph';
import { BlockquoteOptions as BlockquoteOptions$1 } from '@tiptap/extension-blockquote';
import { HardBreakOptions as HardBreakOptions$1 } from '@tiptap/extension-hard-break';
import { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';
import { HorizontalRuleOptions as HorizontalRuleOptions$1 } from '@tiptap/extension-horizontal-rule';
import { BulletListOptions as BulletListOptions$1 } from '@tiptap/extension-bullet-list';
import { OrderedListOptions as OrderedListOptions$1 } from '@tiptap/extension-ordered-list';
import { ListItemOptions as ListItemOptions$1 } from '@tiptap/extension-list-item';
import { TaskListOptions as TaskListOptions$1 } from '@tiptap/extension-task-list';
import { TaskItemOptions as TaskItemOptions$1 } from '@tiptap/extension-task-item';
import { TableOptions as TableOptions$1 } from '@tiptap/extension-table';
import { TableRowOptions as TableRowOptions$1 } from '@tiptap/extension-table-row';
import { TableCellOptions as TableCellOptions$1 } from '@tiptap/extension-table-cell';
import { TableHeaderOptions as TableHeaderOptions$1 } from '@tiptap/extension-table-header';
import { Node as Node$1, NodeType, MarkType, Fragment, Mark, ResolvedPos } from '@tiptap/pm/model';
import { NodeView, EditorView } from '@tiptap/pm/view';
import { ImageOptions as ImageOptions$1 } from '@tiptap/extension-image';
import { HistoryOptions } from '@tiptap/extension-history';
export * from '@tiptap/extension-history';
import { DropcursorOptions } from '@tiptap/extension-dropcursor';
export * from '@tiptap/extension-dropcursor';
import { Processor } from 'unified';
import { Node as Node$2 } from 'unist';
import { Data, Parent, PhrasingContent } from 'mdast';
import { Props, Instance } from 'tippy.js';
import { SuggestionProps, SuggestionKeyDownProps } from '@tiptap/suggestion';
import { EditorState, PluginView, Selection, Transaction } from '@tiptap/pm/state';
export * from '@tiptap/extension-gapcursor';
import { Rect, CellSelection } from '@tiptap/pm/tables';

interface SubscriptOptions extends SubscriptExtensionOptions {
    dictionary: {
        name: string;
    };
}
declare const Subscript: _tiptap_core.Mark<SubscriptOptions, any>;

interface SuperscriptOptions extends SuperscriptExtensionOptions {
    dictionary: {
        name: string;
    };
}
declare const Superscript: _tiptap_core.Mark<SuperscriptOptions, any>;

interface BoldOptions extends BoldOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Bold: _tiptap_core.Mark<BoldOptions, any>;

interface CodeOptions extends CodeOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Code: _tiptap_core.Mark<CodeOptions, any>;

interface LinkOptions extends LinkOptions$1 {
    dictionary: {
        name: string;
        inputLink: string;
        openLink: string;
        deleteLink: string;
    };
}
declare const Link: _tiptap_core.Mark<LinkOptions, any>;

interface ItalicOptions extends ItalicOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Italic: _tiptap_core.Mark<ItalicOptions, any>;

interface StrikeOptions extends StrikeOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Strike: _tiptap_core.Mark<StrikeOptions, any>;

declare const colors: readonly [readonly ["gray", "z"], readonly ["slate", "s"], readonly ["tomato", "e"], readonly ["red", "r"], readonly ["ruby", "f"], readonly ["crimson", "w"], readonly ["pink", "q"], readonly ["plum", "u"], readonly ["purple", "p"], readonly ["violet", "v"], readonly ["iris", "h"], readonly ["indigo", "i"], readonly ["blue", "b"], readonly ["cyan", "c"], readonly ["teal", "t"], readonly ["jade", "j"], readonly ["green", "g"], readonly ["bronze", "n"], readonly ["gold", "x"], readonly ["brown", "d"], readonly ["orange", "o"], readonly ["amber", "a"], readonly ["yellow", "y"], readonly ["lime", "l"], readonly ["mint", "m"], readonly ["sky", "k"]];

interface HighlightOptions extends Omit<HighlightOptions$1, "multicolor"> {
    dictionary: Record<typeof colors[number][0], string> & {
        name: string;
    };
}
declare const Highlight: _tiptap_core.Mark<HighlightOptions, any>;

interface UnderlineOptions extends UnderlineOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Underline: _tiptap_core.Mark<UnderlineOptions, any>;

declare const Text: _tiptap_core.Node<any, any>;

declare const Document: _tiptap_core.Node<any, any>;

interface HeadingOptions extends HeadingOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Heading: _tiptap_core.Node<HeadingOptions, any>;

interface ParagraphOptions extends ParagraphOptions$1 {
}
declare const Paragraph: _tiptap_core.Node<ParagraphOptions, any>;

interface BlockquoteOptions extends BlockquoteOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const Blockquote: _tiptap_core.Node<BlockquoteOptions, any>;

interface HardBreakOptions extends HardBreakOptions$1 {
}
declare const HardBreak: _tiptap_core.Node<HardBreakOptions, any>;

interface CodeBlockOptions extends CodeBlockLowlightOptions {
    dictionary: Record<string, string>;
}
declare const CodeBlock: _tiptap_core.Node<CodeBlockOptions, any>;

interface HorizontalRuleOptions extends HorizontalRuleOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const HorizontalRule: _tiptap_core.Node<HorizontalRuleOptions, any>;

interface BulletListOptions extends BulletListOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const BulletList: _tiptap_core.Node<BulletListOptions, any>;

interface OrderedListOptions extends OrderedListOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const OrderedList: _tiptap_core.Node<OrderedListOptions, any>;

interface ListItemOptions extends ListItemOptions$1 {
}
declare const ListItem: _tiptap_core.Node<ListItemOptions, any>;

interface TaskListOptions extends TaskListOptions$1 {
    dictionary: {
        name: string;
    };
}
declare const TaskList: _tiptap_core.Node<TaskListOptions, any>;

interface TaskItemOptions extends TaskItemOptions$1 {
}
declare const TaskItem: _tiptap_core.Node<TaskItemOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        details: {
            setDetails: () => ReturnType;
            unsetDetails: () => ReturnType;
            toggleDetails: () => ReturnType;
        };
    }
}
interface DetailsOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
    };
}
declare const Details: Node<DetailsOptions, any>;

interface DetailsContentOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
    };
}
declare const DetailsContent: Node<DetailsContentOptions, any>;

interface DetailsSummaryOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
    };
}
declare const DetailsSummary: Node<DetailsSummaryOptions, any>;

interface TableOptions extends TableOptions$1 {
    dictionary: {
        name: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        toggleHeaderRow: string;
        toggleHeaderCol: string;
        deleteTable: string;
    };
}
declare const Table: _tiptap_core.Node<TableOptions, any>;

interface TableRowOptions extends TableRowOptions$1 {
    dictionary: {
        insertTop: string;
        insertBottom: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        deleteRow: string;
    };
}
declare const TableRow: _tiptap_core.Node<TableRowOptions, any>;

interface TableCellOptions extends TableCellOptions$1 {
    dictionary: {
        mergeCells: string;
        splitCells: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
    };
}
declare const TableCell: _tiptap_core.Node<TableCellOptions, any>;

interface TableHeaderOptions extends TableHeaderOptions$1 {
    dictionary: {
        insertLeft: string;
        insertRight: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        deleteCol: string;
    };
}
declare const TableHeader: _tiptap_core.Node<TableHeaderOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        emoji: {
            setEmoji: (name: string) => ReturnType;
        };
    }
}
interface EmojiOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        queryEmpty: string;
    };
}
declare const Emoji: Node<EmojiOptions, any>;

interface InnerResizerViewOptions extends NodeViewRendererProps {
    id?: string;
    tag?: keyof HTMLElementTagNameMap;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    resize?: Array<"width" | "height">;
    onRender?: (props: {
        view: InnerResizerView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onInit?: (props: {
        view: InnerResizerView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        view: InnerResizerView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        view: InnerResizerView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
}
declare class InnerResizerView implements NodeView {
    private readonly editor;
    private readonly options;
    private _node;
    private _root;
    static create(options: Partial<Omit<InnerResizerViewOptions, keyof Omit<NodeViewRendererProps, "HTMLAttributes">>>): (_options: NodeViewRendererProps) => InnerResizerView;
    constructor(options: InnerResizerViewOptions);
    get dom(): HTMLElement;
    get node(): Node$1;
    get getPos(): () => number;
    get HTMLAttributes(): Record<string, any>;
    get $root(): HTMLElement;
    update(node: Node$1): boolean;
    destroy(): void;
    private _resizer;
}

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        embed: {
            setEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
interface EmbedItem {
    name: string;
    match: (props: {
        editor: Editor;
        view: InnerResizerView;
        node: Node$1;
        element: HTMLIFrameElement;
    }) => string | boolean | undefined | null;
    render: (props: {
        editor: Editor;
        view: InnerResizerView;
        node: Node$1;
        element: HTMLIFrameElement;
    }) => void;
}
interface EmbedOptions {
    items: Array<EmbedItem>;
    inline: boolean;
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputEmbed: string;
        openEmbed: string;
        deleteEmbed: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
    };
}
declare const Embed: Node<EmbedOptions, any>;

interface ImageOptions extends ImageOptions$1 {
    dictionary: {
        name: string;
        empty: string;
        error: string;
        loading: string;
        inputSrc: string;
        inputAlt: string;
        inputTitle: string;
        imageOpen: string;
        imageUpload: string;
        imageDelete: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
    };
}
declare const Image: _tiptap_core.Node<ImageOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        audio: {
            setAudio: (options: {
                src: string;
                alt?: string;
                title?: string;
            }) => ReturnType;
        };
    }
}
interface AudioOptions {
    inline: boolean;
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputSrc: string;
        inputAlt: string;
        inputTitle: string;
        audioOpen: string;
        audioUpload: string;
        audioDelete: string;
    };
}
declare const Audio: Node<AudioOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        video: {
            setVideo: (options: {
                src: string;
                alt?: string;
                title?: string;
            }) => ReturnType;
        };
    }
}
interface VideoOptions {
    inline: boolean;
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputSrc: string;
        inputAlt: string;
        inputTitle: string;
        videoOpen: string;
        videoUpload: string;
        videoDelete: string;
    };
}
declare const Video: Node<VideoOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        diagram: {
            setMermaid: (code: string) => ReturnType;
        };
    }
}
interface MermaidOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputHelp: string;
        inputGraph: string;
    };
}
declare const Mermaid: Node<MermaidOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        mathBlock: {
            setMathBlock: (code: string) => ReturnType;
        };
    }
}
interface MathBlockOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputMath: string;
        inputHelp: string;
    };
}
declare const MathBlock: Node<MathBlockOptions, any>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        mathInline: {
            setMathInline: (code: string) => ReturnType;
        };
    }
}
interface MathInlineOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        emptyMath: string;
        inputMath: string;
        inputHelp: string;
    };
}
declare const MathInline: Node<MathInlineOptions, any>;

declare class ParserState {
    readonly editor: Editor;
    readonly processor: Processor;
    private readonly stack;
    constructor(editor: Editor, processor: Processor);
    parse(markdown: string): Node$1 | null;
    next(nodes?: MarkdownNode | MarkdownNode[]): this;
    addText(value?: string): this;
    addNode(type: NodeType, attrs?: Attrs, content?: Node$1[]): this;
    openNode(type: NodeType, attrs?: Attrs): this;
    closeNode(): this;
    openMark(type: MarkType, attrs?: Attrs): this;
    closeMark(type: MarkType): this;
    private runNode;
    private matchNode;
}

declare class SerializerState {
    readonly editor: Editor;
    readonly processor: Processor;
    private readonly stack;
    constructor(editor: Editor, processor: Processor);
    serialize(document: Node$1): string;
    next(nodes: Node$1 | Fragment): this;
    addNode(node: MarkdownNode): this;
    openNode(node: MarkdownNode): this;
    closeNode(): this;
    withMark(mark: Mark, node: MarkdownNode): this;
    private isFragment;
    private runNode;
    private matchNode;
}

interface Attrs {
    [key: string]: any;
}
interface MarkdownNode extends Node$2 {
    data?: Data & Record<string, any>;
    children?: Array<MarkdownNode>;
    [key: string]: any;
}
interface MarkMarkdownStorage {
    markdown?: {
        parser?: {
            match: (node: MarkdownNode) => boolean;
            apply: (state: ParserState, node: MarkdownNode, type: MarkType) => void;
        };
        serializer?: {
            match: (mark: Mark) => boolean;
            apply: (state: SerializerState, mark: Mark, node: Node$1) => void | boolean;
        };
        hooks?: {
            beforeInit?: (processor: Processor) => Processor;
            afterInit?: (processor: Processor) => Processor;
            beforeParse?: (markdown: string) => string;
            afterParse?: (root: MarkdownNode) => MarkdownNode;
            beforeSerialize?: (root: MarkdownNode) => MarkdownNode;
            afterSerialize?: (markdown: string) => string;
        };
    };
}
interface NodeMarkdownStorage {
    markdown?: {
        parser?: {
            match: (node: MarkdownNode) => boolean;
            apply: (state: ParserState, node: MarkdownNode, type: NodeType) => void;
        };
        serializer?: {
            match: (node: Node$1) => boolean;
            apply: (state: SerializerState, node: Node$1) => void;
        };
        hooks?: {
            beforeInit?: (processor: Processor) => Processor;
            afterInit?: (processor: Processor) => Processor;
            beforeParse?: (markdown: string) => string;
            afterParse?: (root: MarkdownNode) => MarkdownNode;
            beforeSerialize?: (root: MarkdownNode) => MarkdownNode;
            afterSerialize?: (markdown: string) => string;
        };
    };
}
declare module "unist" {
    interface Data {
        hName?: string;
        hProperties?: {
            className?: string[];
        };
    }
}

interface MarkdownOptions {
}
interface MarkdownStorage {
    get: () => string;
    set: (markdown: string, emit?: boolean) => void;
    parse: (markdown: string) => Node$1 | null;
    serialize: (document: Node$1) => string;
    processor: Processor;
}
declare const Markdown: Extension<MarkdownOptions, MarkdownStorage>;

interface UploaderData {
    name: string;
    type: string;
    size: number;
    url: string;
}
interface UploaderItem {
    match: (editor: Editor, data: UploaderData) => boolean;
    apply: (editor: Editor, data: UploaderData) => void;
}
interface UploaderItemStorage {
    uploader: UploaderItem | Array<UploaderItem>;
}
interface UploaderOptions {
    upload: (files: FileList) => Promise<Array<UploaderData>>;
}
interface UploaderStorage {
    upload: (files: FileList) => Promise<Array<UploaderData>>;
}
declare const Uploader: Extension<UploaderOptions, UploaderStorage>;

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        plantuml: {
            setPlantuml: (code: string) => ReturnType;
        };
    }
}
interface PlantumlOptions {
    HTMLAttributes: Record<string, any>;
    dictionary: {
        name: string;
        inputHelp: string;
        inputGraph: string;
    };
}

type BlockMenuViewItem = "|" | {
    action: (props: {
        editor: Editor;
        view: BlockMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    render: (props: {
        editor: Editor;
        view: BlockMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    [key: string]: any;
};
interface BlockMenuButtonViewOptions {
    id?: string;
    name: string;
    icon?: string;
    shortcut?: string;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
}
interface BlockMenuViewOptions {
    editor: Editor;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    tippy?: (props: {
        editor: Editor;
        view: BlockMenuView;
        options: Partial<Props>;
    }) => Partial<Props>;
    onInit?: (props: {
        editor: Editor;
        view: BlockMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        editor: Editor;
        view: BlockMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        editor: Editor;
        view: BlockMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    dictionary: {
        empty: string;
    };
}
declare class BlockMenuView {
    private readonly editor;
    private readonly options;
    private _popover;
    private _element;
    private _index;
    private _items;
    static create(options: BlockMenuViewOptions): () => BlockMenuView;
    constructor(options: BlockMenuViewOptions);
    onStart(props: SuggestionProps): void;
    onUpdate(props: SuggestionProps): void;
    onKeyDown(props: SuggestionKeyDownProps): boolean;
    onExit(props: SuggestionProps): void;
    createButton(element: HTMLElement, options: BlockMenuButtonViewOptions): void;
    private _render;
}

interface BlockMenuItem {
    id: string;
    name: string;
    icon: string;
    keywords: string;
    shortcut?: string;
    action: (editor: Editor, view: BlockMenuView) => void;
}
interface BlockMenuItemStorage {
    blockMenu: {
        hide?: boolean;
        items: BlockMenuItem | Array<BlockMenuItem>;
    };
}
interface BlockMenuOptions {
    items: Array<string>;
    dictionary: {
        lineEmpty: string;
        lineSlash: string;
        queryEmpty: string;
    };
}
declare const BlockMenu: Extension<BlockMenuOptions, any>;

interface ClickMenuItemStorage {
    clickMenu: {
        hide?: boolean;
        items: Array<unknown>;
    };
}
interface ClickMenuOptions {
}
declare const ClickMenu: Extension<ClickMenuOptions, any>;

interface ClipboardOptions {
}
declare function isInCode(state: EditorState): boolean;
declare function isMarkdown(value: string): boolean;
declare const Clipboard: Extension<ClipboardOptions, any>;

interface StarterKitOptions {
    sub?: Partial<SubscriptOptions> | boolean;
    sup?: Partial<SuperscriptOptions> | boolean;
    bold?: Partial<BoldOptions> | boolean;
    code?: Partial<CodeOptions> | boolean;
    link?: Partial<LinkOptions> | boolean;
    italic?: Partial<ItalicOptions> | boolean;
    strike?: Partial<StrikeOptions> | boolean;
    highlight?: Partial<HighlightOptions> | boolean;
    underline?: Partial<UnderlineOptions> | boolean;
    text?: boolean;
    document?: boolean;
    heading?: Partial<HeadingOptions> | boolean;
    paragraph?: Partial<ParagraphOptions> | boolean;
    blockquote?: Partial<BlockquoteOptions> | boolean;
    hardBreak?: Partial<HardBreakOptions> | boolean;
    codeBlock?: Partial<CodeBlockOptions> | boolean;
    horizontalRule?: Partial<HorizontalRuleOptions> | boolean;
    bulletList?: Partial<BulletListOptions> | boolean;
    orderedList?: Partial<OrderedListOptions> | boolean;
    listItem?: Partial<ListItemOptions> | boolean;
    taskList?: Partial<TaskListOptions> | boolean;
    taskItem?: Partial<TaskItemOptions> | boolean;
    details?: Partial<DetailsOptions> | boolean;
    detailsContent?: Partial<DetailsContentOptions> | boolean;
    detailsSummary?: Partial<DetailsSummaryOptions> | boolean;
    table?: Partial<TableOptions> | boolean;
    tableRow?: Partial<TableRowOptions> | boolean;
    tableCell?: Partial<TableCellOptions> | boolean;
    tableHeader?: Partial<TableHeaderOptions> | boolean;
    emoji?: Partial<EmojiOptions> | boolean;
    embed?: Partial<EmbedOptions> | boolean;
    image?: Partial<ImageOptions> | boolean;
    audio?: Partial<AudioOptions> | boolean;
    video?: Partial<VideoOptions> | boolean;
    mermaid?: Partial<MermaidOptions> | boolean;
    plantuml?: Partial<PlantumlOptions> | boolean;
    mathBlock?: Partial<MathBlockOptions> | boolean;
    mathInline?: Partial<MathInlineOptions> | boolean;
    uploader?: Partial<UploaderOptions> | boolean;
    markdown?: Partial<MarkdownOptions> | boolean;
    clipboard?: Partial<ClipboardOptions> | boolean;
    blockMenu?: Partial<BlockMenuOptions> | boolean;
    clickMenu?: Partial<ClickMenuOptions> | boolean;
    history?: Partial<HistoryOptions> | boolean;
    gapCursor?: Partial<any> | boolean;
    dropCursor?: Partial<DropcursorOptions> | boolean;
}
declare const StarterKit: Extension<StarterKitOptions, any>;

interface FloatMenuInputViewOptions {
    id?: string;
    name: string;
    type?: string;
    value?: string;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    onEnter?: (value: string, element: HTMLInputElement) => void;
    onInput?: (value: string, element: HTMLInputElement) => void;
    onChange?: (value: string, element: HTMLInputElement) => void;
    onKey?: (key: Pick<KeyboardEvent, "key" | "ctrlKey" | "altKey" | "metaKey" | "shiftKey">, value: string, element: HTMLInputElement) => void;
    onBoundary?: (boundary: "left" | "right", value: string, element: HTMLInputElement) => void;
}
interface FloatMenuButtonViewOptions {
    id?: string;
    name: string;
    view: string;
    shortcut?: string;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    onClick?: (element: HTMLButtonElement) => void;
}
interface FloatMenuUploadViewOptions extends Omit<FloatMenuButtonViewOptions, "onClick"> {
    accept?: string;
    onUpload?: (element: HTMLInputElement) => void;
}
interface FloatMenuViewOptions {
    editor: Editor;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    rect?: (props: {
        view: FloatMenuView;
        editor: Editor;
    }) => DOMRect;
    show?: (props: {
        view: FloatMenuView;
        editor: Editor;
    }) => boolean;
    tippy?: (props: {
        view: FloatMenuView;
        editor: Editor;
        options: Partial<Props>;
    }) => Partial<Props>;
    onInit?: (props: {
        view: FloatMenuView;
        editor: Editor;
        range: Range;
        element: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        view: FloatMenuView;
        editor: Editor;
        range: Range;
        element: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        view: FloatMenuView;
        editor: Editor;
        range: Range;
        element: HTMLElement;
    }) => void;
}
declare class FloatMenuView implements PluginView {
    private readonly editor;
    private readonly popover;
    private readonly element;
    private readonly options;
    static create(options: FloatMenuViewOptions): () => FloatMenuView;
    constructor(options: FloatMenuViewOptions);
    show(): void;
    hide(): void;
    update(view: EditorView, prevState?: EditorState): void;
    destroy(): void;
    createInput(options: FloatMenuInputViewOptions): {
        input: HTMLInputElement;
    };
    createButton(options: FloatMenuButtonViewOptions): {
        button: HTMLButtonElement;
        popover: HTMLDivElement;
        instance: Instance<Props>;
    };
    createUpload(options: FloatMenuUploadViewOptions): {
        file: HTMLInputElement;
        button: HTMLButtonElement;
        popover: HTMLDivElement;
        instance: Instance<Props>;
    };
    createGroup(direction: "column" | "row"): HTMLDivElement;
    createDivider(): {
        divider: HTMLSpanElement;
    };
    private _rect;
    private _element;
    private _popover;
}

interface FloatMenuItem {
    id: string;
    name: string;
    view: string;
    shortcut?: string;
    active: (props: {
        editor: Editor;
        view: FloatMenuView;
        range: Range;
        element: HTMLElement;
    }) => boolean;
    action: (props: {
        editor: Editor;
        view: FloatMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    onInit?: (props: {
        editor: Editor;
        view: FloatMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        editor: Editor;
        view: FloatMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        editor: Editor;
        view: FloatMenuView;
        range: Range;
        element: HTMLElement;
    }) => void;
}
interface FloatMenuItemStorage {
    floatMenu?: {
        hide?: boolean;
        items?: FloatMenuItem | Array<FloatMenuItem>;
    };
}
interface FloatMenuOptions {
    items: Array<string>;
}
declare const FloatMenu: Extension<FloatMenuOptions, any>;

interface ClickMenuViewOptions {
    editor: Editor;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    tippy?: (props: {
        view: ClickMenuView;
        editor: Editor;
        options: Partial<Props>;
    }) => Partial<Props>;
}
interface ClickMenuActiveOptions {
    node: Node$1;
    pos: ResolvedPos;
    dom: HTMLElement;
}
declare class ClickMenuView {
    private readonly editor;
    private readonly popover;
    private readonly element;
    private readonly options;
    private _timer;
    private _active;
    private _dragging;
    private _selection;
    constructor(options: ClickMenuViewOptions);
    show(active: ClickMenuActiveOptions): void;
    hide(): void;
    keydown(_event: HTMLElementEventMap["keydown"]): void;
    drop(_event: HTMLElementEventMap["drop"]): void;
    dragstart(event: HTMLElementEventMap["dragstart"]): void;
    dragover(event: HTMLElementEventMap["dragover"]): void;
    dragenter(_event: HTMLElementEventMap["dragenter"]): void;
    dragleave(_event: HTMLElementEventMap["dragleave"]): void;
    mouseup(_event: HTMLElementEventMap["mouseup"]): void;
    mousedown(_event: HTMLElementEventMap["mousedown"]): void;
    mousemove(event: HTMLElementEventMap["mousemove"]): boolean;
    plus(): void;
    destroy(): void;
    private _element;
    private _popover;
    private _find;
    private _nodeIsDisabled;
    private _nodeIsNotBlock;
    private _nodeIsFirstChild;
}

interface InnerEditorViewOptions extends NodeViewRendererProps {
    id?: string;
    tag?: keyof HTMLElementTagNameMap;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    onRender?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
    onOpen?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
    onClose?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
    onInit?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        view: InnerEditorView;
        editor: Editor;
        $root: HTMLElement;
        $editor: HTMLElement;
        $preview: HTMLElement;
    }) => void;
}
declare class InnerEditorView implements NodeView {
    private readonly editor;
    private readonly options;
    private _node;
    private _view;
    private _root;
    private _editor;
    private _preview;
    static create(options: Partial<Omit<InnerEditorViewOptions, keyof Omit<NodeViewRendererProps, "HTMLAttributes">>>): (_options: NodeViewRendererProps) => InnerEditorView;
    constructor(options: InnerEditorViewOptions);
    get dom(): HTMLElement;
    get view(): EditorView | undefined;
    get node(): Node$1;
    get getPos(): () => number;
    get HTMLAttributes(): Record<string, any>;
    get $root(): HTMLElement;
    get $editor(): HTMLElement;
    get $preview(): HTMLElement;
    update(node: Node$1): boolean;
    selectNode(): void;
    deselectNode(): void;
    stopEvent(event: Event): boolean;
    ignoreMutation(): boolean;
    destroy(): void;
}

interface InnerRenderViewOptions extends NodeViewRendererProps {
    id?: string;
    tag?: keyof HTMLElementTagNameMap;
    class?: string | string[];
    style?: Partial<CSSStyleDeclaration> | Array<Partial<CSSStyleDeclaration>>;
    onRender?: (props: {
        view: InnerRenderView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onInit?: (props: {
        view: InnerRenderView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onUpdate?: (props: {
        view: InnerRenderView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
    onDestroy?: (props: {
        view: InnerRenderView;
        editor: Editor;
        $root: HTMLElement;
    }) => void;
}
declare class InnerRenderView implements NodeView {
    private readonly editor;
    private readonly options;
    private _node;
    private _root;
    static create(options: Partial<Omit<InnerRenderViewOptions, keyof Omit<NodeViewRendererProps, "HTMLAttributes">>>): (_options: NodeViewRendererProps) => InnerRenderView;
    constructor(options: InnerRenderViewOptions);
    get dom(): HTMLElement;
    get node(): Node$1;
    get getPos(): () => number;
    get HTMLAttributes(): Record<string, any>;
    get $root(): HTMLElement;
    update(node: Node$1): boolean;
    destroy(): void;
}

declare function wrap(root: MarkdownNode, match: (node: MarkdownNode) => boolean): MarkdownNode;
declare function unwrap(root: MarkdownNode, match: (node: MarkdownNode) => boolean): MarkdownNode;

interface DecorationData extends Data {
    flags: string;
}
interface Decoration extends Parent {
    type: string;
    data?: DecorationData;
    children: PhrasingContent[];
}
declare function remarkDecoration(type: string, marker: string, flags?: boolean): (this: Processor) => void;

declare function icon(name: string): string;

declare function isRectSelected(selection: Selection, rect: Rect): selection is CellSelection;
declare function isCellSelection(selection: Selection): selection is CellSelection;
declare function isColumnSelected(selection: Selection, index: number): selection is CellSelection;
declare function isRowSelected(selection: Selection, index: number): selection is CellSelection;
declare function isTableSelected(selection: Selection): selection is CellSelection;
declare function findTable(selection: Selection): {
    pos: number;
    start: number;
    depth: number;
    node: Node$1;
} | undefined;
declare function getCellsInColumn(selection: Selection, index: number | number[]): {
    pos: number;
    start: number;
    node: Node$1 | null | undefined;
}[] | undefined;
declare function getCellsInRow(selection: Selection, index: number | number[]): {
    pos: number;
    start: number;
    node: Node$1 | null | undefined;
}[] | undefined;
declare function getCellInTable(selection: Selection, row: number, col: number): {
    pos: number;
    node: Node$1 | null;
    start: number;
} | undefined;
declare function selectRowOrColumn(type: "row" | "column", tr: Transaction, index: number): Transaction;
declare function selectRow(tr: Transaction, index: number): Transaction;
declare function selectColumn(tr: Transaction, index: number): Transaction;
declare function selectTable(tr: Transaction): Transaction;
declare function parseAttributes(value: string): Record<string, string>;
declare function setAttributes(editor: Editor, getPos: (() => number) | boolean, attrs: Record<string, any>): void;

declare function debounce<A extends any[]>(delay: number, apply: (...args: A) => void): (...args: A) => void;
declare function configure<O = any>(extensions: Array<AnyExtension>, node: Extension<O> | Node<O> | Mark$1<O>, options?: Partial<O> | boolean, overwrite?: Partial<O>): void;

export { type Attrs, Audio, type AudioOptions, BlockMenu, type BlockMenuButtonViewOptions, type BlockMenuItem, type BlockMenuItemStorage, type BlockMenuOptions, BlockMenuView, type BlockMenuViewItem, type BlockMenuViewOptions, Blockquote, type BlockquoteOptions, Bold, type BoldOptions, BulletList, type BulletListOptions, ClickMenu, type ClickMenuActiveOptions, type ClickMenuItemStorage, type ClickMenuOptions, ClickMenuView, type ClickMenuViewOptions, Clipboard, type ClipboardOptions, Code, CodeBlock, type CodeBlockOptions, type CodeOptions, type Decoration, type DecorationData, Details, DetailsContent, type DetailsContentOptions, type DetailsOptions, DetailsSummary, type DetailsSummaryOptions, Document, Embed, type EmbedItem, type EmbedOptions, Emoji, type EmojiOptions, FloatMenu, type FloatMenuButtonViewOptions, type FloatMenuInputViewOptions, type FloatMenuItem, type FloatMenuItemStorage, type FloatMenuOptions, type FloatMenuUploadViewOptions, FloatMenuView, type FloatMenuViewOptions, HardBreak, type HardBreakOptions, Heading, type HeadingOptions, Highlight, type HighlightOptions, HorizontalRule, type HorizontalRuleOptions, Image, type ImageOptions, InnerEditorView, type InnerEditorViewOptions, InnerRenderView, type InnerRenderViewOptions, InnerResizerView, type InnerResizerViewOptions, Italic, type ItalicOptions, Link, type LinkOptions, ListItem, type ListItemOptions, type MarkMarkdownStorage, Markdown, type MarkdownNode, type MarkdownOptions, type MarkdownStorage, MathBlock, type MathBlockOptions, MathInline, type MathInlineOptions, Mermaid, type MermaidOptions, type NodeMarkdownStorage, OrderedList, type OrderedListOptions, Paragraph, type ParagraphOptions, StarterKit, type StarterKitOptions, Strike, type StrikeOptions, Subscript, type SubscriptOptions, Superscript, type SuperscriptOptions, Table, TableCell, type TableCellOptions, TableHeader, type TableHeaderOptions, type TableOptions, TableRow, type TableRowOptions, TaskItem, type TaskItemOptions, TaskList, type TaskListOptions, Text, Underline, type UnderlineOptions, Uploader, type UploaderData, type UploaderItem, type UploaderItemStorage, type UploaderOptions, type UploaderStorage, Video, type VideoOptions, colors, configure, debounce, findTable, getCellInTable, getCellsInColumn, getCellsInRow, icon, isCellSelection, isColumnSelected, isInCode, isMarkdown, isRectSelected, isRowSelected, isTableSelected, parseAttributes, remarkDecoration, selectColumn, selectRow, selectRowOrColumn, selectTable, setAttributes, unwrap, wrap };
