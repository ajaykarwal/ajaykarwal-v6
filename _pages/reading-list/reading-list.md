---
layout: page
title: "Reading List"
permalink: "/reading-list/"
order: 4
comments: false
---

I like to read.

From business and tech leaders to sci-fi and mythology, I try and soak up as much variety as I can. Listed below are a few of my favourites. You can find more on <a href="https://www.goodreads.com/ajaykarwal" target="_blank" title="My Goodreads profile">my Goodreads profile</a>.


<!--
{% for post in site.categories.reading-list %}
<article class="blog-item clearfix">
  <h2 class="title">
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h2>
  <p class="date">
    <time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
      {{ page.date | date: "%b %-d, %Y" }}
    </time>
  </p>
</article> -->
{% endfor %}
