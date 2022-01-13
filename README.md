# Storyboards

This repository contains the source code for the
[EUCP](https://www.eucp-project.eu/) [Storyboard
website](https://eucp-project.github.io/storyboards/).

The website has been built with [Nuxt](https://nuxtjs.org), using
[nuxt-content](https://content.nuxtjs.org/) for authoring stories and
[tailwindcss](https://tailwindcss.com/docs/installation) + [tailwind
typography](https://tailwindcss.com/docs/typography-plugin) for styling. It is
hosted on [GitHub pages](https://nuxtjs.org/deployments/github-pages/).

## Adding a storyboard

All stories are stored in the `content` folder. To add a story, currently you have to go through the following steps:

- Add a new folder in the `content` folder, which will contain your story
- Make one markdown file for each panel. They will be show up in the storyboard
  sorted alphabetically by filename.
- Each markdown file should include the following yaml frontmatter: a headline
  and an image (or standalone HTML page). That image should be included in the
  same folder, but the path should also include the folder name.
- Find the `index.yaml` file in the `content` directory and add a new entry
  describing your story there. Note that the name of the story in this entry
  should correspond to the directory name that you have chosen for your story.

We are currently investigating several options to make this process (and the
format of the stories) simpler still.

## Making a pull request

If you want your story to be included on the main site, you can make a pull
request. We will review it and if everything is okay, we'll merge the story into
the main branch. Continous deployment will then automatically update the site.

## Serving the site locally

The following instructions are the default instructions from a new nuxt project.
After cloning the repository:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

# Reusing the storyboards format for a different project

The source code (excluding the content) is licenced under Apache 2. You can fork
this repo and add your own content, modify the styling, and do whatever you
want. Don't hesitate to contact us if you're considering to reuse the software.
