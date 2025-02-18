import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
    input: path.resolve(__dirname, 'src/LeafletMap.ts'), // Adjust the entry point as needed
    output: {
        file: 'dist/leaflet-map.bundle.js',
        format: 'iife', // Immediately Invoked Function Expression, suitable for <script> tags
        name: 'LeafletMap',
    },
    plugins: [
        resolve(), // Helps Rollup find node_modules
        commonjs(), // Converts CommonJS modules to ES6
        typescript(), // Transpiles TypeScript
    ],
};