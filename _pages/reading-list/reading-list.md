---
  layout: page
  title: Reading List
  permalink: /reading-list/
---

Just a few books I like which I felt deserved a mention. You can find more on <a href="https://www.goodreads.com/ajaykarwal" target="_blank" title="My Goodreads profile">my Goodreads profile</a>.


<div class="book-list">
{% assign sortedbooks = (site.books | sort: 'date') | reverse %}
{% for book in sortedbooks %}
  <div class="book-item">
    <a href="{{ book.url | relative_url }}">
      <img class="book-cover" src="/images/books/{{ book.cover }}" alt="{{ book.title }}" />
    </a>
  </div>
{% endfor %}
</div>


{% comment %}
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
</article> 
{% endcomment %}
