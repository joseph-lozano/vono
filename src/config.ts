import { Adaptor } from "./adaptors";
import { Hono } from "hono";
import { type VFS } from "./vfs";

export type Vono = {
	devServer?: Hono;
  root: string;
  vfs: VFS;
  mode?: "build" | "serve" | "dev";
  buildTarget?: "server" | "client";
  adaptor: Adaptor;
  server: {
    directory: string;
    entry: string;
  };
  prerender: {
    routes: Array<string>;
  };
  ssr: boolean;
};

export type UserConfig = {
  adaptor?: Adaptor;
  prerender?: {
    routes: Array<string>;
  };
};

export function createVono(userConfig: UserConfig | undefined, options: {
  root: string;
  mode: "build" | "serve" | "dev";
  ssr: boolean;
	vfs: VFS;
  adaptor: Adaptor;
}): Vono {

  return {
    adaptor: options.adaptor,
    vfs: options.vfs,
    server: {
      directory: "server",
      entry: "index",
    },
    root: options.root,
    prerender: {
      routes: userConfig?.prerender?.routes ?? [],
    },
    ssr: options.ssr,
  }
}