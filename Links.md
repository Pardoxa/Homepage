---
title: Links
subtitle:
layout: "page"
order: 2
cover-photo: assets/images/banner.jpg
cover-photo-alt: example cover photo
auto-header: none
---

<div>
  <ul>
{% for item in site.data.usefulLinks %}
    <li style="float: none;"> <a class="blue" href="{{ item.link }}"> {{ item.name }} </a> </li>
{% endfor %}
  </ul>
</div>
