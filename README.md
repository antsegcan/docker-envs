# Docker Environment

A simple project to show you how to customize some parameters for different images when you are thinking in CI/CD activities.

## Available scripts

Here you will find all the available scripts you can execute in this project, I will explain each one so do not be afraid about anything :)

### `npm run dev`

This script is not important for this specification, but if you want to start your project from scratch with my configuration feel totally free to do that!

### `npm run build`

This instruction is so important if you want to test this Docker configuration for CI/CD approaches.
For performance reasons I prefer put away the build from the Dockerfile to avoid memory heap issues.

## Let's Docker it

Once you have done the project's build you have 2 remaining steps:

1. #### Build the image
   For this step you will have to write this docker command:

```bash
# -t it is only the tag I want to call it,
# but you can name your container however you want.
$ docker build . -t docker-env
```

2. #### Run the image
   Here it comes the simulation of all the environments you want, I have for this example 3 main environments: dev, uat and prod.
   So, when you have finished building the image you can check the result with the following command:

```bash
# The -e flag is important!
# Here you can see I am running with prod configuration
# The -it instructs Docker to create a bash shell
# --rm : Automatically remove the container when it exits
# -p : Ports configuration (EXPOSE 80).
# For dev
$ docker run -e APP_ENV=dev -it --rm -p 1337:80 docker-env
# For uat
$ docker run -e APP_ENV=uat -it --rm -p 1337:80 docker-env
# For prod
$ docker run -e APP_ENV=prod -it --rm -p 1337:80 docker-env
# For FOO
$ docker run -e APP_ENV=FOO -it --rm -p 1337:80 docker-env
```

## Notes

Please, take a look to the `define-env.js` Node script and `environments.json` file to understand without any problem the project.
