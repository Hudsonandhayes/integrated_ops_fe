module.exports = {
	root: true,
	env: {
		es2017: true,
		node: true,
		browser: true,
	},
	extends: [
		// "plugin:vue/essential",
		// "eslint:recommended",
		"plugin:prettier/recommended",
	],
	settings: {
		"prettier-vue": {
			// ignoring template tag
			SFCBlocks: {
				template: false,
			},
		},
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

		// Best Practices
		eqeqeq: "error",
		"no-invalid-this": "error",
		"no-return-assign": "error",
		"no-unused-expressions": ["error", { allowTernary: true }],
		"no-useless-concat": "error",
		"no-useless-return": "error",

		"max-len": ["error", { code: 120, tabWidth: 4 }],
		// Variable
		"init-declarations": "error",
		"no-use-before-define": "error",

		// Stylistic Issues
		"array-bracket-newline": ["error", "consistent"],
		"array-element-newline": ["warn", { multiline: true, minItems: null }],
		"array-bracket-spacing": "error",
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		"block-spacing": "error",
		"comma-dangle": "off",
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"func-call-spacing": "error",
		"implicit-arrow-linebreak": ["error", "beside"],
		indent: ["error", "tab"],
		"keyword-spacing": "error",
		"multiline-ternary": ["error", "never"],
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": "error",
		"object-property-newline": [
			"error",
			{ allowAllPropertiesOnSameLine: true },
		],
		"quote-props": ["off", "consistent"],
		quotes: ["off", "single"],
		semi: ["warn", "always"],
		"semi-spacing": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": "error",
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",

		// ES6
		"arrow-spacing": "error",
		"no-confusing-arrow": "error",
		"no-duplicate-imports": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-template": "error",

		// Vue
		"vue/html-quotes": ["error", "double"],
		"max-len": [
			"error",
			140,
			2,
			{
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
			},
		],
		"vue/max-attributes-per-line": "off",
	},
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},
};
