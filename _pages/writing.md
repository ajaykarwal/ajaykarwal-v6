---
layout: page
title: "Writing"
permalink: "/writing/"
comments: false
---

{% for post in site.posts %}
{% if post.hidden != true %}
<article class="article-list-item clearfix">
  <p class="date">
    <time datetime="{{ post.date }}" itemprop="datePublished">
      {{ post.date | date: "%B %Y" }}
    </time>
  </p>
  <h2 class="title">
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h2>
  <p>
    {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
  </p>
</article>

{% endif %}
{% endfor %}
