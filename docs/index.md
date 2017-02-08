---
title: "Design tokens"
label: "Design tokens"
---

<style>
.swatch {
  background-color: #000; 
  padding: 20px; 
  border-radius: 4px; 
  color: #fff; 
  position: relative; 
  font-family: Hack, Consolas, Monaco, "Andale Mono", monospace;
}
.swatch__value {
  position: absolute; 
  top: 0; right: 0; 
  padding: 20px; 
  background-color: rgba(255,255,255,0.2); 
  color: #fff; 
  height: 100%; 
  min-width: 150px; 
  text-align: center;
}

.swatch.swatch--light,
.swatch.swatch--light .swatch__value  {
  color: #4a4d4e;
}
</style>

[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) are named entities that store visual design information. These are used in place of hard-spand values (such as hex values for color or pixels for spacing) in order to maintain a scalable, consistent system for UI development.

## Color Swatches

### Primaries
<div class="swatch" style="background-color: #40bac8;">
  <div>
    <span class="swatch__value">#40BAC8</span>
    <span class="swatch__key">$color-pelorous</span>
  </div>
</div>

<div class="swatch" style="background-color: #162A33;">
  <div>
    <span class="swatch__value">#162A33</span>
    <span class="swatch__key">$color-gable</span>
  </div>
</div>

### Secondaries

<div class="swatch" style="background-color: #EB6126;">
  <div>
    <span class="swatch__value">#EB6126</span>
    <span class="swatch__key">$color-flamingo</span>
  </div>
</div>

<div class="swatch" style="background-color: #F6C443;">
  <div>
    <span class="swatch__value">#F6C443</span>
    <span class="swatch__key">$color-saffron</span>
  </div>
</div>

<div class="swatch" style="background-color: #72C5A1;">
  <div>
    <span class="swatch__value">#72C5A1</span>
    <span class="swatch__key">$color-deyork</span>
  </div>
</div>

<div class="swatch" style="background-color: #A0A3A5;">
  <div>
    <span class="swatch__value">#A0A3A5</span>
    <span class="swatch__key">$color-chateau</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D8DAD6;">
  <div>
    <span class="swatch__value">#D8DAD6</span>
    <span class="swatch__key">$color-quill</span>
  </div>
</div>

### Tertiaries

<div class="swatch" style="background-color: #DE8073;">
  <div>
    <span class="swatch__value">#DE8073</span>
    <span class="swatch__key">$color-copperfield</span>
  </div>
</div>

<div class="swatch" style="background-color: #9E859E;">
  <div>
    <span class="swatch__value">#9E859E</span>
    <span class="swatch__key">$color-venus</span>
  </div>
</div>

<div class="swatch" style="background-color: #8CD6D3;">
  <div>
    <span class="swatch__value">#8CD6D3</span>
    <span class="swatch__key">$color-montecarlo</span>
  </div>
</div>

<div class="swatch" style="background-color: #4A82BA;">
  <div>
    <span class="swatch__value">#4A82BA</span>
    <span class="swatch__key">$color-steel</span>
  </div>
</div>

<div class="swatch" style="background-color: #ABC261;">
  <div>
    <span class="swatch__value">#ABC261</span>
    <span class="swatch__key">$color-celery</span>
  </div>
</div>

<div class="swatch" style="background-color: #738085;">
  <div>
    <span class="swatch__value">#738085</span>
    <span class="swatch__key">$color-rollingstone</span>
  </div>
</div>

<div class="swatch" style="background-color: #5C6467;">
  <div>
    <span class="swatch__value">#5C6467</span>
    <span class="swatch__key">$color-riverbed</span>
  </div>
</div>

### Text Colors

<div class="swatch" style="background-color: #4A4D4E;">
  <div>
    <span class="swatch__value">#4A4D4E</span>
    <span class="swatch__key">$color-thunder</span>
  </div>
</div>

<div class="swatch" style="background-color: #3A3C3D;">
  <div>
    <span class="swatch__value">#3A3C3D</span>
    <span class="swatch__key">$color-baltic-sea</span>
  </div>
</div>

### Grayscale

<div class="swatch swatch--light" style="background-color: #F1F1F1;">
  <div>
    <span class="swatch__value">#F1F1F1</span>
    <span class="swatch__key">$color-grayscale-1</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #E8E8E8;">
  <div>
    <span class="swatch__value">#E8E8E8</span>
    <span class="swatch__key">$color-grayscale-2</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #E3E3E3;">
  <div>
    <span class="swatch__value">#E3E3E3</span>
    <span class="swatch__key">$color-grayscale-3</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #DCDCDC;">
  <div>
    <span class="swatch__value">#DCDCDC</span>
    <span class="swatch__key">$color-grayscale-4</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D3D3D3;">
  <div>
    <span class="swatch__value">#D3D3D3</span>
    <span class="swatch__key">$color-grayscale-5</span>
  </div>
</div>

### Bluescale

<div class="swatch swatch--light" style="background-color: #C5D4E0;">
  <div>
    <span class="swatch__value">#C5D4E0</span>
    <span class="swatch__key">$color-bluescale-1</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D0DBE5;">
  <div>
    <span class="swatch__value">#D0DBE5</span>
    <span class="swatch__key">$color-bluescale-2</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D8E1E8;">
  <div>
    <span class="swatch__value">#D8E1E8</span>
    <span class="swatch__key">$color-bluescale-3</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D0DBE5;">
  <div>
    <span class="swatch__value">#D0DBE5</span>
    <span class="swatch__key">$color-bluescale-4</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #C5D4E0;">
  <div>
    <span class="swatch__value">#C5D4E0</span>
    <span class="swatch__key">$color-bluescale-5</span>
  </div>
</div>

### Miscellaneous Colors

<div class="swatch" style="background-color: #C72525;">
  <div>
    <span class="swatch__value">#C72525</span>
    <span class="swatch__key">$color-error</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #FFFFFF;">
  <div>
    <span class="swatch__value">#FFFFFF</span>
    <span class="swatch__key">$color-white</span>
  </div>
</div>

<div class="swatch" style="background-color: #000000;">
  <div>
    <span class="swatch__value">#000000</span>
    <span class="swatch__key">$color-black</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: transparent;">
  <div>
    <span class="swatch__value">transparent</span>
    <span class="swatch__key">$color-transparent</span>
  </div>
</div>

<div class="swatch" style="background-color: #3C5A99;">
  <div>
    <span class="swatch__value">#3C5A99</span>
    <span class="swatch__key">$color-facebook</span>
  </div>
</div>

<div class="swatch" style="background-color: #54ABED;">
  <div>
    <span class="swatch__value">#54ABED</span>
    <span class="swatch__key">$color-twitter</span>
  </div>
</div>

<div class="swatch" style="background-color: #1177B4;">
  <div>
    <span class="swatch__value">#1177B4</span>
    <span class="swatch__key">$color-linkedin</span>
  </div>
</div>

<div class="swatch" style="background-color: #DB4C3F;">
  <div>
    <span class="swatch__value">#DB4C3F</span>
    <span class="swatch__key">$color-google-plus</span>
  </div>
</div>

### Bootstrap Grayscale

<div class="swatch" style="background-color: #686868;">
  <div>
    <span class="swatch__value">#686868</span>
    <span class="swatch__key">$gray-dark</span>
  </div>
</div>

<div class="swatch" style="background-color: #55595C;">
  <div>
    <span class="swatch__value">#55595C</span>
    <span class="swatch__key">$gray</span>
  </div>
</div>

<div class="swatch" style="background-color: #818A91;">
  <div>
    <span class="swatch__value">#818A91</span>
    <span class="swatch__key">$gray-light</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #D7D7D7;">
  <div>
    <span class="swatch__value">#D7D7D7</span>
    <span class="swatch__key">$gray-lightish</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #ECEEEF;">
  <div>
    <span class="swatch__value">#ECEEEF</span>
    <span class="swatch__key">$gray-lighter</span>
  </div>
</div>

<div class="swatch swatch--light" style="background-color: #F7F7F9;">
  <div>
    <span class="swatch__value">#F7F7F9</span>
    <span class="swatch__key">$gray-lightest</span>
  </div>
</div>

## Breakpoints

| Key | Value |
| --- | ----- |
| $xs | 480px |
| $sm | 768px |
| $md | 940px |
| $lg | 1300px |

