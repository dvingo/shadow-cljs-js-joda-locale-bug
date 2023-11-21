import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
// options are described here
// https://www.npmjs.com/package/rollup-plugin-visualizer
import { visualizer } from "rollup-plugin-visualizer";

export default {
    // input: 'build/external-index.js', // The file output by shadow
    input: 'src/browser/js-deps.js', // your js dependencies to tree shake and bundle
    output: {
        file: 'build/browser/js/js-deps.js', // Output file
        format: 'umd', // Bundle format, 'es' for ES Modules cjs for commonjs
        // format: 'cjs', // Bundle format, 'es' for ES Modules 'cjs' for commonjs
        name: 'joda_output'
    },
    plugins: [
        resolve(), // Resolves node modules
        commonjs(), // Converts CommonJS modules to ES6
        terser(),
        // visualizer()
    ],
    // if you're using react this will quiet the warning from their custom directive.
    onwarn(warning, warn) {
        if (warning.message.includes('use client')) {
            return;
        }
        warn(warning)
    }
};
