<img class="logo" src="https://user-images.githubusercontent.com/29161635/97246503-e4da9280-17d3-11eb-82b1-923cc13d2fd2.png" width="100px" height="100px">

# GitHub Actions

GitHub Actions is GitHub's brand for their dev-ops platform. Development operations, or "dev-ops" is the practice of compressing or combining developmental and operational responsibilities of IT. Generally, in the past, development teams were responsible for creating new features and operations teams were responsible for deploying software and keeping it alive.  Deploying for example, would require someone to get the latest source code on a build machine, run the build and get it to production.  Now, in the dev-ops world, these steps can all be done with code.

Note that concepts used in GitHub Actions and even some of the GUI elements are very similiar to Azure Pipelines platform. This is  undoubtedly due to the fact that these platforms are both developed in Redmond.

## Official resources

- [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions)
- [Workflow Syntax](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)
- [Metadata Syntax](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions)


## Notes

**Using Docker Environment Variables**

Refer to this documentation on GitHub...

> When you specify an input to an action in a workflow file or use a default input value, GitHub creates an environment variable for the input with the name INPUT_<VARIABLE_NAME>. The environment variable created converts input names to uppercase letters and replaces spaces with _ characters.
> 
> For example, if a workflow defined the numOctocats and octocatEyeColor inputs, the action code could read the values of the inputs using the INPUT_NUMOCTOCATS and INPUT_OCTOCATEYECOLOR environment variables.
> 
> -- [docs.github.com](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

... and this for Docker

> Additionally, the operator can set any environment variable in the container by using one or more -e flags, even overriding those mentioned above, or already defined by the developer with a Dockerfile ENV. If the operator names an environment variable without specifying a value, then the current value of the named variable is propagated into the container’s environment.
>
> -- [docs.docker.com](https://docs.docker.com/engine/reference/run/#env-environment-variables)