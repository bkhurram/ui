const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const dts = require("rollup-plugin-dts").default;

//NEW
const terser = require("rollup-plugin-terser").terser;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

// NEW

const packageJson = require("./package.json");

module.exports = [
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
			// NEW
			peerDepsExternal(),

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
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],

		// NEW
		external: [/\.css$/],
	},
];
