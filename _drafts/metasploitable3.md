---
layout: post
title: How to setup Metasploitable 3
featured-img: metasploitable3header
mathjax: true
---

Metasploitable3 is a virtual machine that is built from the ground up with a large amount of security vulnerabilities. For detailed information, [click here to view its repository.](https://github.com/rapid7/metasploitable3)

Configuring the virtual machine is a little tricky so I've documented the fastest way I was able to get it running on VMware Workstation. 
# Prereqs 


**Download and install Vagrant:**   

[https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html) - Vagrant is an open-source software product for building and maintaining portable virtual software development environments.. [More Info...](https://en.wikipedia.org/wiki/Vagrant_(software))


**Download and install VirtualBox:**

<a href="https://www.virtualbox.org/" target="_blank">https://www.virtualbox.org/</a> - VirtualBox is an open-source hypervisor from Oracle that can be used to host virtual machines. Vagrant uses it to create the virtual machine and run all the necessary scripts.  


**Download the Vagrantfile**

1.  Create an empty folder. You can name it metasploitable3.
2.  [Right-click (control-click on a Mac) this link and choose “Save Link As” to save the "Vagrantfile"](https://raw.githubusercontent.com/rapid7/metasploitable3/master/Vagrantfile).

**Note** that you might have to adjust some CSS depending on the width and height of your logo. You can find Header / Navigation related SCSS in `_sass/layout/nav.scss`.

## Writing content

### Posts

Create a new Markdown file such as `2017-01-13-my-post.md` in `_post` folder. Configure YAML Front Matter (stuff between `---`):

```yaml

---
layout: post # needs to be post
title: Getting Started with Sleek # title of your post
featured-img: sleek #optional - if you want you can include hero image
---

```

#### Images

In case you want to add a hero image to the post, apart from changing `featured-img` in YAML, you also need to add the image file to the project. To do so, just upload an image in `.jpg` format to `_img` folder. The name must before the `.jpg` file extension has to match with `featured-img` in YAML. Next, run `gulp img` from command line to generate optimized version of the image and all the thumbnails. You have to restart  the jekyll server to see the changes. Sleek uses [Lazy Sizes](https://github.com/aFarkas/lazysizes) Lazy Loader for loading images. Check the link for more info. Lazy Sizes doesnt't require any configuration and it's going to be included in your bundled js file.

### Pages

The home page is located under `index.md` file. To change the content or design you have to edit the `default.html` file in `_layouts` folder.

In order to add a new page, create a new html or markdown file under root directory or inside `_pages` folder. To add a link to the page, edit `navigation` setting in `_config.yml`.

### Images TODO

Introduce gulp optimization

Breakpoint | Image Type | Width | Retina
------------ | ------------ | ------------- | -------------
xs |Post Thumb | 535px | 1070px
sm |Post Thumb | 500px| 1000px
md |Post Thumb | 329.375px | 658.75px
lg |Post Thumb | 445.625px | 891.25px
xl |Post Thumb | 353.125px | 706.25px

Breakpoint | Image Type | Width | Retina
------------ | ------------ | ------------- | -------------
xs |Post Hero | 535px | 1070px
sm |Post Hero | 500px| 1000px
md |Post Hero | 329.375px | 658.75px
lg |Post Hero | 445.625px | 891.25px
xl |Post Hero | 353.125px | 706.25px

### MathJax

If you want to use [MathJax](https://www.mathjax.org/) in your posts, add `mathjax: true` in [YAML front matter](https://jekyllrb.com/docs/frontmatter/) of your post:

```yaml
---
layout: post
title: Blog Post with MathJax
featured-img: sleek # optional - if you want you can include name of hero image
mathjax: true # add this line in order to enable MathJax in the post
---
```

#### Example

In N-dimensional simplex noise, the squared kernel summation radius $r^2$ is $\frac 1 2$
for all values of N. This is because the edge length of the N-simplex $s = \sqrt {\frac {N} {N + 1}}$
divides out of the N-simplex height $h = s \sqrt {\frac {N + 1} {2N}}$.
The kerel summation radius $r$ is equal to the N-simplex height $h$.

$$ r = h = \sqrt{\frac {1} {2}} = \sqrt{\frac {N} {N+1}} \sqrt{\frac {N+1} {2N}} $$
Happy hacking!
