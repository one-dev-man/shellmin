/// <reference types="node" />
import { EventEmitter } from "events";
export declare class Environment {
    #private;
    static getFragmentedArgumentValue(_array: Array<string>, _i: number, start?: number): {
        i: number;
        content: string | null;
    };
    ARG_FIRST_COMMAND_LABEL_KEY: string;
    constructor(...toConvert_parts: Array<any>);
    reinit(...toConvert_parts: Array<any>): void;
    get(key: string | number | void): string | number | bigint | boolean | object | undefined;
    set(key: string | number, value: any): void;
    remove(key: string | number, value: any): void;
    has(key: string | number): string | number | bigint | boolean | object | undefined;
    keys(): string[];
    indexes(): number;
    get firstCommandLabel(): import("nodtilus/dist/utils/jsontypechecker").TYPES;
    parse(content: string): string;
}
export declare type SHELLMINCOMMAND_CALLBACK_TYPE = (label: string, args: Array<any>, shellmin: Shellmin | any) => Promise<any>;
export declare type SHELLMINCOMMAND_CONSTRUCTOR_TYPE = {
    label: string;
    help?: string;
    callback: SHELLMINCOMMAND_CALLBACK_TYPE;
};
export declare class Command {
    #private;
    static parseRawInput(input: string): {
        label: string | null;
        args: Array<any>;
    };
    shellmin: Shellmin | null;
    constructor(options: SHELLMINCOMMAND_CONSTRUCTOR_TYPE);
    get label(): string;
    get help(): string;
    get callback(): SHELLMINCOMMAND_CALLBACK_TYPE;
}
export declare class Shellmin extends EventEmitter {
    #private;
    input: any;
    output: any;
    constructor(options?: {
        env?: any;
        argv?: any;
        prefix?: string;
        suffix?: string;
        input?: any;
        output?: any;
    });
    get env(): Environment;
    get argv(): Environment;
    get prefix(): string;
    set prefix(prefix: string);
    get suffix(): string;
    set suffix(suffix: string);
    get history(): string[];
    get live_stdin_data_callback(): (d: any, key: {
        sequence?: string | undefined;
        name?: string | undefined;
        ctrl?: boolean | undefined;
        meta?: boolean | undefined;
        shift?: boolean | undefined;
        code?: string | undefined;
    }) => Promise<void>;
    setStartupMessage(message: string): void;
    first(options?: {
        bindConsole: boolean;
    }): Promise<void>;
    live(): void;
    close(): void;
    registerCommand(command: Command | SHELLMINCOMMAND_CONSTRUCTOR_TYPE): this;
    unregisterCommand(command: Command | string): this;
    getCommand(command: Command | string): Command | null;
    hasCommand(command: Command | string): boolean;
    getCommands(): Command[];
    runCommand(label: string, ...args: Array<any>): Promise<any>;
    log: (...args: Array<any>) => void;
    info: (...args: Array<any>) => void;
    warn: (...args: Array<any>) => void;
    error: (...args: Array<any>) => void;
    print(options: {
        prefix?: string | null;
        suffix?: string | null;
        args: Array<any>;
    }): void;
    bindConsole(): this;
    unbindConsole(): this;
}
