/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_ANON_MESSAGE_API_URL: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}