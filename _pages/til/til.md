---
  layout: page
  title: "Today I learned"
  subheading: "Stuff I learned and when I learned it"
  permalink: "/til/"
  comments: false
---


{% for post in site.categories.til %}
<article>
  <h2 class="title">
    <span>{{ post.date | date: "%b %-d, %Y" }}:</span>
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h2>
</article>
{% endfor %}
