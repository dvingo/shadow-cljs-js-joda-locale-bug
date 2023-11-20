Reproduction of an issue attempting to loading @js-joda/locale using shadow-cljs

Instructions for installing js-joda with locales can be found here

https://github.com/js-joda/js-joda/blob/main/packages/locale/README.md#node-with-prebuilt-locales

# Run the shadow-version

```bash
npm i
npm run watch
```

navigate a browser to localhost:5000

open the devtools and see the error `TypeError: Cldr.load is not a function`

# Run the Vite version

```bash
cd vite-version
npm i
npm run dev
```

navigate a browser to URL indicated in the terminal
view the app working
