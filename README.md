# next-on-pages R2 local demo

The app contains two routes:
 - `/` which displays the content of `MY_R2` only using server components
 - `/with-client-component` which also simply displays the content of `MY_R2` but it does so by passing the `R2Object`s to a client component (thus causing the objects to be serialized)

(There's also an api route used to populate/initialize `MY_R2`)

## Steps to run the app

Install dependencies:
```
$ npm i
```

Then to run the app using `next dev` (with the [cf-bindings-proxy](https://github.com/james-elicx/cf-bindings-proxy)), run in two separate terminals:
```
$ npx run pages:proxy
```
and
```
$ npm run dev
```

To instead run the application using `wrangler`, start by building the worker:
```
$ npm run pages:build
```
(or `pages:build:watch` for building in watch mode)
abd then run:
```
$ npm run pages:dev
```
