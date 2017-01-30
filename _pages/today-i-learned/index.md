---
layout: page
title: "Today I learned"
subheading: "Stuff I learned and when I learned it"
permalink: "/today-i-learned/"
order: 5
comments: false
---


{% for post in site.categories.today-i-learned %}
<article class="blog-item clearfix">
  <h2 class="title">
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h2>
  {% if post.subheading %}
  <p>{{ post.subheading }}</p>
  {% endif %}

  <p class="date">
    {{ post.date | date: "%b %-d, %Y" }}
  </p>

</article>
{% endfor %}
