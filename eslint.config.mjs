import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  { files: ["**/*.ts"] },
  { ignores: ["**/*.js", "**/*.d.ts"] },
  { plugins: { "@typescript-eslint": tseslint.plugin } },
  { languageOptions: { parser: tseslint.parser } },
  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^[A-Z]' }],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/typedef": ["error", {
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
        memberVariableDeclaration: true,
      }],
      "@typescript-eslint/naming-convention": ["error",
        {
          selector: ["classProperty", "classMethod", "accessor"],
          format: ["camelCase"],
        }, {
          selector: ["classProperty", "classMethod"],
          modifiers: ["static"],
          format: ["camelCase", "UPPER_CASE"],
        }, {
          selector: ["variable"],
          format: ["camelCase"],
        }, {
          selector: ["function"],
          format: ["camelCase", "UPPER_CASE"],
        }, {
          selector: "parameter",
          format: ["camelCase"],

          filter: {
            regex: "^this$",
            match: false,
          },

          leadingUnderscore: "require",
        }, {
          selector: ["enum", "enumMember"],
          format: ["UPPER_CASE"],
        }, {
          selector: ["interface", "class", "typeLike"],
          format: ["PascalCase"],
        }
      ],
//      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/member-ordering": ["warn", {
        classes: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "#private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "#private-instance-field",
          "public-abstract-field",
          "protected-abstract-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          ["public-static-get", "public-static-set"],
          ["protected-static-get", "protected-static-set"],
          ["private-static-get", "private-static-set"],
          ["#private-static-get", "#private-static-set"],
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "#private-static-method",
          ["public-instance-get", "public-instance-set"],
          ["protected-instance-get", "protected-instance-set"],
          ["private-instance-get", "private-instance-set"],
          ["#private-instance-get", "#private-instance-set"],
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "#private-instance-method",
          "public-abstract-method",
          "protected-abstract-method",
        ],
      }],
      "@typescript-eslint/no-explicit-any": "warn",
    }
  },
];