import { defineConfig } from 'vite'

export  default defineConfig({
    appType: 'mpa', 
    base: ' process.envDEPLOY_BASE:URL',
    })

