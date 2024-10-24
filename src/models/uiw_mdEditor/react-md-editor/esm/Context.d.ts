import React from 'react';
import { ICommand, TextAreaCommandOrchestrator } from './commands';
import { MDEditorProps } from './Types';
export type PreviewType = 'live' | 'edit' | 'preview';
export interface ContextStore {
    components?: MDEditorProps['components'];
    commands?: ICommand<string>[];
    extraCommands?: ICommand<string>[];
    markdown?: string;
    preview?: PreviewType;
    height?: React.CSSProperties['height'];
    fullscreen?: boolean;
    highlightEnable?: boolean;
    autoFocus?: boolean;
    textarea?: HTMLTextAreaElement;
    commandOrchestrator?: TextAreaCommandOrchestrator;
    textareaWarp?: HTMLDivElement;
    textareaPre?: HTMLPreElement;
    container?: HTMLDivElement | null;
    dispatch?: React.Dispatch<ContextStore>;
    barPopup?: Record<string, boolean>;
    scrollTop?: number;
    scrollTopPreview?: number;
    tabSize?: number;
    defaultTabEnable?: boolean;
    [key: string]: any;
}
export type ExecuteCommandState = Pick<ContextStore, 'fullscreen' | 'preview' | 'highlightEnable'>;
export declare function reducer(state: ContextStore, action: ContextStore): {
    [x: string]: any;
    components?: {
        textarea?: ((props: React.HTMLAttributes<HTMLDivElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>, opts: {
            dispatch: React.Dispatch<ContextStore> | undefined;
            onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
            useContext?: {
                commands: ICommand<string>[] | undefined;
                extraCommands: ICommand<string>[] | undefined;
                commandOrchestrator?: TextAreaCommandOrchestrator | undefined;
            } | undefined;
            shortcuts?: ((e: KeyboardEvent | React.KeyboardEvent<HTMLTextAreaElement>, commands: ICommand[], commandOrchestrator?: TextAreaCommandOrchestrator | undefined, dispatch?: React.Dispatch<ContextStore> | undefined, state?: ExecuteCommandState | undefined) => void) | undefined;
        }) => JSX.Element) | undefined;
        toolbar?: ((command: ICommand<string>, disabled: boolean, executeCommand: (command: ICommand<string>, name?: string | undefined) => void, index: number) => void | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined) | undefined;
        preview?: ((source: string, state: ContextStore, dispath: React.Dispatch<ContextStore>) => JSX.Element) | undefined;
    } | undefined;
    commands?: ICommand<string>[] | undefined;
    extraCommands?: ICommand<string>[] | undefined;
    markdown?: string | undefined;
    preview?: PreviewType | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
    fullscreen?: boolean | undefined;
    highlightEnable?: boolean | undefined;
    autoFocus?: boolean | undefined;
    textarea?: HTMLTextAreaElement | undefined;
    commandOrchestrator?: TextAreaCommandOrchestrator | undefined;
    textareaWarp?: HTMLDivElement | undefined;
    textareaPre?: HTMLPreElement | undefined;
    container?: HTMLDivElement | null | undefined;
    dispatch?: React.Dispatch<ContextStore> | undefined;
    barPopup?: Record<string, boolean> | undefined;
    scrollTop?: number | undefined;
    scrollTopPreview?: number | undefined;
    tabSize?: number | undefined;
    defaultTabEnable?: boolean | undefined;
};
export declare const EditorContext: React.Context<ContextStore>;
