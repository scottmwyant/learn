<img class="logo" src="https://user-images.githubusercontent.com/29161635/97249090-8f08e900-17d9-11eb-80ae-ccf6e8ed5dc9.png" width="100px">

# Docker

> Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. 
> 
> [docs.docker.com/get-started/overview](https://docs.docker.com/get-started/overview/)

Docker is one implementation of a the industry's concept of "containers".  That is: Docker is to container as Git is to source control.

## Official resources

- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
- [Docker engine](https://docs.docker.com/engine/)

## Getting started

Docker can be installed by leveraging `curl`.  Retrieve an install script from https://get.docker.com, save the response as a shell script (get_docker.sh) and run that script.

- Use `docker` to get some help, a list of commands that can be used.
- Use `docker version` to get full version info, use `docker --version` for less verbose output.
- Use `docker images` to list all images on the host.
- Use `docker ps` to list containers running on the host.
- Use `docker ps -a` to list all containers on the host, running or stopped.

## Basic workflows

- Download an image from the registry: `docker pull`
- Create a container from the image: `docker container create -p host:container -v host:container -n mycontainer some/image`
- Start the container: `docker container start <container-name>`

## Restart policies

- [Start containers automatically](https://docs.docker.com/config/containers/start-containers-automatically/)

## Third party resources

**Videos**

- [Tim Corey - Intro to Docker](https://youtu.be/WcQ3-M4-jik)

**Podcasts**

- [CodingBlocks - Docker for Developers](https://www.codingblocks.net/podcast/docker-for-developers/)
