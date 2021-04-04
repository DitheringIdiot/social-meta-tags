import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from "rollup-plugin-terser"

export default [
    // browser-friendly UMD build
    {
        input: 'src/_page-scripts/link-preview-tester.js',
        output: {
            name: 'linkpreviewtester',
            file: "public/scripts/link-preview-tester.js",
            format: 'iife'
        },
        plugins: [
            // resolve(), // so Rollup can find `ms`
            commonjs(), terser() // so Rollup can convert `ms` to an ES module
        ]
    }
]
