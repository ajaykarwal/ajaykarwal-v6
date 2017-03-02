---
  layout: page
  title: "Influences"
  permalink: "/influences/"
  comments: false
---

Like a dwarf standing on the shoulders of giants, I wouldn't be where I am today if it wasn't for the influence of some of the best in the industry.

This is a list of people who have taught me new skills, new techniques or simply just inspired me to aim a little higher.

## People I'd like to meet

<ul class="influences">
{% for person in site.data.influences %}
  <li>
  {% if person.m %}<strike>{%endif%}
    <a href="https://twitter.com/{{ person.t }}" target="_blank">
      {{ person.n }}
    </a>
    {% if person.m %}</strike>{%endif%}
  </li>
{% endfor %}
</ul>

If you're on the list and fancy grabbing a coffee some day, [Get in touch](/contact/).
