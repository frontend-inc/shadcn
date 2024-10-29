# Frontend Shadcn  

An NPM package for the popular [shadcn](https://ui.shadcn.com) components.

## Installation

```shell
yarn add frontend-shadcn
```

Add the frontend-shadcn npm package to your tailwind content paths otherwise css classnames will not compile:

```
module.exports = {
	darkMode: ['class'],
	content: [
    './node_modules/frontend-shadcn/**/*.{ts,jsx,tsx,mdx}',
		'./app/**/*.{ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	]
}
```

## Requirements

Install tailwind
                                                   
## License

The MIT License.

## Author

[Rami Bitar](https://github.com/rbitar)


