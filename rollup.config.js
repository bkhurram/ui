/* eslint-disable */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import eslint from '@rollup/plugin-eslint';

import external from 'rollup-plugin-peer-deps-external';

const dts = require('rollup-plugin-dts').default;
const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			eslint(),
			external(),

			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),

			// NEW
			postcss(),

			// NEW
			terser(),
		],
	},
	{
		input: "dist/esm/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm", sourcemap: true }],
		plugins: [dts()],

		// NEW
		external: ['react', 'react-dom', /\.css$/],
	},
];
