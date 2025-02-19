import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
    input: path.resolve(__dirname, 'src/LeafletMap.ts'), // Adjust the entry point as needed
    output: {
        file: 'dist/leaflet-map.bundle.js',
        format: 'iife',
        name: 'LeafletMap',
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ],
};