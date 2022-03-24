# Pleasantest Site Sandbox

A simple sandbox for prototyping the new Pleasantest site

## Getting started

Once you've cloned this project, run the following commands to get up and running:

1. `npm ci` — Install dependencies
1. `npm start` — Compile project, start local server, and watch for file updates

## Development

You can put any [Eleventy-compatible templates](https://www.11ty.dev/docs/templates/), JS or static files anywhere within the `src/` directory.

JavaScript files are processed by Rollup. SCSS files are processed with Sass.

## Front Matter

Example template:

```
---
title: Example B
author: Art Vandelay
date: 2022-01-03
status: archived
layout: blank
description: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit ipsum,
  malesuada eget molestie a, fringilla sed erat.
css:
  - /group/example-b.css
scripts:
  - /group/example-b.js
---

<p>Example B</p>
```

### `title`

The prototype title

### `layout`

See [Eleventy Layout docs](https://www.11ty.dev/docs/layouts/)

### `author`

The prototype author

### `date`

Represents the date the prototype was last updated

### `status`

Used to label the state of the prototype (`wip` | `review` | `approved` | `archived`, defaults to `wip` if not set)

### `css` (optional)

Path to the prototype CSS file(s)

### `scripts` (optional)

Path to the prototype JavaScript file(s)

### `description` (optional)

A short description of the prototype
