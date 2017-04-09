---
layout: page
title: "Writing"
permalink: "/writing/"
comments: false
---

{% for post in site.posts %}
<article class="article-list-item clearfix">
  <h2 class="title">
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h2>
  <p class="date">
    <time datetime="{{ page.date }}" itemprop="datePublished">
      {{ page.date | date: "%b %-d, %Y" }}
    </time>
  </p>
  <p>
    {{ post.excerpt | remove: '<p>' | remove: '</p>' }} <span class="read-more"><a href="{{ post.url | relative_url }}">Read more</a></span>
  </p>
</article>
{% endfor %}