---
layout: page
title: "Blog"
permalink: "/blog/"
comments: false
---

<div class="article-list">
{% for post in site.posts %}
{% if post.hidden != true %}
  <article class="article-list__item clearfix">
    {% if post.artwork %}
    {% endif %}
    <h2 class="title">
      <a href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </h2>
    <p class="date">
      <time datetime="{{ post.date }}" itemprop="datePublished">
        {{ post.date | date: "%B %Y" }}
      </time>
    </p>
    <figure>
      <a href="{{ post.url | relative_url }}">
        <img src="/images/posts/{{ post.artwork }}" alt="{{ post.title | escape }}">
      </a>
    </figure>
    <p>
      {{ post.excerpt | strip_html | truncatewords:25 }}
    </p>
  </article>
{% endif %}
{% endfor %}
</div>