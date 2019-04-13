# Puebelo Unido PDX

¡Bienvenido! Welcome!

## Contributing

### Configuring your local development environment

We use [Jekyll](https://jekyllrb.com) to build the site. To get started as a contributor the first step is to get a local environment set up where you can preview your changes. You can do that by following the steps below.

1. **Download the source code** for the website from [our GitHub repo](https://github.com/jbentley10/Pueblo-Unido). From a command line prompt (e.g., in Terminal.app on macOS), you could run the following command: `git clone git@github.com:jbentley10/Pueblo-Unido.git`. It’s also fine to use an application such as [GitHub Desktop](https://desktop.github.com) to download the source.
2. From a command line prompt, **navigate into the** `Pueblo-Unido` **directory** you created when you cloned the repo in step 1.
4. From the command line, **ensure you’re running a recent version of Ruby** (2.3 or above) by running the following command: `ruby --version`. If necessary, upgrade Ruby on your system. E.g., on macOS, if you have [Homebrew](https://brew.sh) installed, you could run `brew upgrade ruby` from a command line prompt.
4. **Install the Jekyll Ruby gem** (“gem” is the Ruby community’s name for a software library) by running the following command, again from a command line prompt: `gem install bundler jekyll`.
5. **Start your local environment** by running the following command: `jekyll serve`.
6. **Confirm things are working** by navigating to the website, which should now be running at [localhost:4000](http://localhost:4000). In development, the site’s home page is served at [localhost:4000/home.html.en](http://localhost:4000/home.html.en)

### Making contributions

We manage changes to the website using GitHub’s “pull request” (aka PR) feature. To submit a PR for review, follow the steps below.

1. **Create a branch for your work** [from our repo page on GitHub.com](https://help.github.com/en/articles/creating-and-deleting-branches-within-your-repository). It’s good practice to give your branch a name that gives reviewers a clue about who is doing the work (by prefixing the branch name with your GitHub username) and what the work consists of, e.g., `segdeha-about-page-updates`.
2. **Check out the remote branch on your local machine.** To do this, you first run `git fetch` to update your local environment’s understanding of what branches are on the server. You then run `git checkout -b [branch-name] origin/[branch-name]` from a command line prompt.
3. **Make your changes** and [test them locally](http://localhost:4000).
4. **Commit your changes to your branch.** If you’re using GitHub Desktop, here are instructions for [staging and committing files](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project). If you’re working from the command line, the process will look something like the following:
    5. `git add .` to stage your files
    6. `git commit -m "[Your descriptive commit message]"` to commit your files
7. **Push your files to the remote branch** by running `git push origin [branch-name]`.
8. **Create your PR** [from our repo page on GitHub.com](https://help.github.com/en/articles/creating-a-pull-request).
9. Ask in [#technology](https://pueblo-unido-pdx.slack.com/messages/C6JLJED5G) for someone to review your PR. (If you’re not already in there, ask Cam to have you added to our Slack team.)
