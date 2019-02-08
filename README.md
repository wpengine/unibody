# Unibody

Component library for WP Engine

Built on [Fractal](http://fractal.build)

## Setup locally

* Clone project

```bash
git clone https://github.com/hello-jason/unibody unibody && cd unibody
```

* Install dependencies

```bash
npm install
```

* Global gulp (if you don't already have it)

```bash
npm install -g gulp
```

* Run server (with browsersync and file watching)

```bash
gulp serve
```

## Gulp tasks

* Build assets and run web server (with browsersync and file watching)

```bash
gulp serve

```

* Deploy to GitHub Pages

```bash
gulp deploy

```

## Symlink Package to Project
* Create symlink between unibody repo and main project build process
(so yarn run build will compile + load updated unibody files)

In unibody, run
```bash
yarn link
```

In main project root, run
```bash
yarn link unibody
```
Once linked, you can now run
```bash
yarn run build
```
