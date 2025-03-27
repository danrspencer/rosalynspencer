---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: background.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'About Me'
      subtitle: ''
      text: |-
        With over 25 years teaching experience, my lifetime's work has involved finding ways of helping individuals to succeed. My experience ranges from working with young children struggling in mainstream education and teenagers in care, to setting up and running a children's nursery, and establishing a non-fee paying 'alternative' small school. I have also had the enlightening experience of home educating my own two children.

        My focus is on creating education systems that allow every child to succeed. I've spent years researching alternative approaches to education, with a particular interest in small schools and human-scale learning environments.

        In 1997, I conducted a nationwide study of alternative schools, visiting fifteen small schools affiliated with Human Scale Education across England and Scotland. This transformative ten-week journey, undertaken with my children (then aged 8 and 13), formed the basis of my book, "Why I Started a Small School," and my Master's Degree in Education by Research.

        If you're interested in discussing alternative approaches to education, I'd be delighted to hear from you.
    design:
      columns: '1'
  - block: collection
    id: publications
    content:
      title: Publications
      text: ""
      filters:
        folders:
          - publication
    design:
      view: citation
  - block: about.biography
    id: contact
    content:
      title: Get in Touch
      subtitle: I would love to hear from you.
      text: |-
        Please feel free to contact me:

        Email: [rosalyn@spencer-johnson.co.uk](mailto:rosalyn@spencer-johnson.co.uk)
        Phone: [07979 793677](tel:+447979793677)

        Or connect with me on [Facebook](https://www.facebook.com/rosalyn.spencer.5/)
    design:
      columns: '1'
---
