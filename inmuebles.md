---
layout: page
title: Inmuebles
head-includes:
  - buscar.html
---

## {{ page.title }}

<div id="listado-inmuebles" class="flex">

{% for inmueble in site.inmuebles %}
{% include inmueble-excerpt.html item=inmueble %}
{% endfor %}


</div>
