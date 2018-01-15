---
layout: page
title: Inmuebles
---

## {{ page.title }}

<ul>
{% for inmueble in site.inmuebles %}
<li><a href="{{ inmueble.url | absolute_url }}">{{ inmueble }}</a> {{ inmueble.address.city }} {{ inmueble.price | intcomma: '-' }}€</li>
{% endfor %}
<ul>
