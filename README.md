# Rosalyn Spencer's Personal Website

This is the source code for [rosalynspencer.co.uk](https://rosalynspencer.co.uk), a personal academic website built using [Hugo](https://gohugo.io/) and the Hugo Academic theme.

## Site Overview

The site contains:
- Biography and background information
- Published works, including:
  - "Why I Started a Small School" (Book)
  - Various articles on alternative education
  - Research findings and case studies
- Contact information

## Local Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (v0.119.0 or later)
- [Go](https://golang.org/doc/install) (v1.19 or later)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/danrspencer/rosalynspencer.git
cd rosalynspencer
```

2. Install dependencies:
```bash
go mod download
```

3. Start the development server:
```bash
hugo server
```

The site will be available at [http://localhost:1313](http://localhost:1313)

## Site Structure

```
content/
├── _index.md              # Homepage
├── about.md               # About page
├── authors/              
│   └── admin/            # Author profile
└── publication/          # Published works
    ├── why-i-started-a-small-school/
    ├── earth-matters/
    ├── keeping-calm/
    └── ...
```

## Deployment

The site is automatically deployed via Netlify when changes are pushed to the main branch.

## Content Updates

To update the site content:

1. Edit the relevant markdown files in the `content/` directory
2. Commit and push your changes
3. Netlify will automatically deploy the updates

## License

© 2024 Rosalyn Spencer. All rights reserved.
