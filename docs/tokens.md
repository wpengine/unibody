---
title: "Design tokens"
label: "Design tokens"
---
[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) are named entities that store visual design information. These are used in place of hard-coded values (such as hex values for color or pixels for spacing) in order to maintain a scalable, consistent system for UI development.

## Color Swatches

### Primaries
<div class="palette">
  <div>
    <span>#40bac8</span>
    <code>$color-pelorous</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#162a33</span>
    <code>$color-gable</code>
  </div>
</div>

### Secondaries

<div class="palette">
  <div>
    <span>#eb6126</span>
    <code>$color-flamingo</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#f6c443</span>
    <code>$color-saffron</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#72c5a1</span>
    <code>$color-deyork</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#a0a3a5</span>
    <code>$color-chateau</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#d8dad6</span>
    <code>$color-quill</code>
  </div>
</div>

### Tertiaries

<div class="palette">
  <div>
    <span>#de8073</span>
    <code>$color-copperfield</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#9e859e</span>
    <code>$color-venus</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#8cd6d3</span>
    <code>$color-montecarlo</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#4a82ba</span>
    <code>$color-steel</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#abc261</span>
    <code>$color-celery</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#738085</span>
    <code>$color-rollingstone</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#5c6467</span>
    <code>$color-riverbed</code>
  </div>
</div>

### Text Colors

<div class="palette">
  <div>
    <span>#4a4d4e</span>
    <code>$color-thunder</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#3a3c3d</span>
    <code>$color-baltic-sea</code>
  </div>
</div>

### Grayscale

<div class="palette">
  <div>
    <span>#f1f1f1</span>
    <code>$color-grayscale-1</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#e8e8e8</span>
    <code>$color-grayscale-2</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#e3e3e3</span>
    <code>$color-grayscale-3</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#dcdcdc</span>
    <code>$color-grayscale-4</code>
  </div>
</div>

<div class="palette">
  <div>
    <span>#d3d3d3</span>
    <code>$color-grayscale-5</code>
  </div>
</div>


## Borders
Width and radii tokens are used to style element borders. Accessed via `map(borders, <key>)`.

Key         | Value
------------|------------
{% for key, value in borders -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Breakpoints
Breakpoint tokens are used within `@media` queries. Accessed via `map(breakpoints, <key>)`.

Key         | Value
------------|------------
{% for key, value in breakpoints -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Font families
Font family tokens are used for typographic styling. Accessed via `map(fonts, <key>)`.

Key         | Value
------------|------------
{% for key, value in fonts -%}
`{{ key }}` | <span style="font: 1.25em/1 {{ value }}">{{ value }}</span>
{% endfor -%}

## Layers
Layering tokens set the `z-index` layer value for elements. Accessed via `map(layers, <key>)`.

Key         | Value
------------|------------
{% for key, value in layers -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Sizes
Sizing tokens describe the dimensions of elements. Accessed via `map(sizes, <key>)`.

Key         | Value
------------|------------
{% for key, value in sizes -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Spacing
Spacing tokens describe the distance between elements. Accessed via `map(spaces, <key>)`.

Key         | Value
------------|------------
{% for key, value in spaces -%}
`{{ key }}` | {{ value }}
{% endfor -%}
