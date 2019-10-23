- [Playing with busybox](#playing-with-busybox)
- [Webapp with docker](#webapp-with-docker)
  - [Docker images](#docker-images)
  - [Dockerfile](#dockerfile)
  - [Docker push](#docker-push)
- [Multi Container Environment](#multi-container-environment)
  - [Docker network](#docker-network)
  - [Docker Compose](#docker-compose)

# Playing with busybox

1. `docker pull busybox` - Get busybox image 
2. `docker images` - See all the installed images 
3. `docker run busybox` - Run busybox
   1. `docker run busybox echo "hello world"` - Starts container, run echo command and exits out of container
4. `docker ps` - See all the running containers
5. `docker ps -a` - See all the containers, also exited containers
6. `docker run -it busybox sh` - Keep container open. Run multiple commands. Use `exit` to exit container
7. `docker rm <container id>` - clean up containers
   1. `docker rm $(docker ps -aq)` - remove all container
8. `docker rmi` - delete images
9. `docker logs <containername(or ID)>` - see log for that container

New way to manage commands
1. `docker container ls` - Manage container, same as **docker ps**
   1. `docker container stop <containername>` - stop container
2. `docker image ls` - Manage image
3. `docker network ls` - Manage network
4. `docker volume ls` - Manage volume
   
# Webapp with docker

1. `docker run --rm prakhar1989/static-site` - Run docker image. If not found, install it. `--rm` flag will auto remove container when exit.
2. `docker run -d -P --name static-site -p 8888:80 -e "deep=purple" prakhar1989/static-site` - Detached mode. terminal stays free(can close terminal). 
   1. `-d` detach, 
   2. `-P` publish all exposed port to random port, 
   3. `--name` random name we want to give
   4. `-e` - set any environment variable in the container
   5. `-p` - run on port 80
   6. `-it` - Is short for --interactive + --tty when you docker run with this command.. it would take you straight inside of the container
   7. `bash` - add bask to the end of the command to run the container in bash mode(you can do **ls** and stuff in it)
   8. `--rm` - auto remove container when exit
3. `docker port static-site` - See the ports it's running on
   
## Docker images
To get a new Docker image you can either get it from a registry (such as the Docker Hub) or create your own. There are tens of thousands of images available on Docker Hub. You can also search for images directly from the command line using `docker search`.
1. Official images are 1 works like `python`, `ubuntu`
2. User images are images created and shared by users like you and me. They build on base images and add additional functionality. Typically, these are formatted as `user/image-name`.

## Dockerfile
A Dockerfile is a simple text-file that contains a list of commands that the Docker client calls while creating an image. The command you write in docker are almost identical to their equivalent Linux command.

Example - 
```bash
# our base image
FROM python:3-onbuild

# specify the port number the container should expose
EXPOSE 5000

# run the command
CMD ["python", "./app.py"]
```
Save the Dockerfile on the root folder of the app. 

1. `docker build -t amitozdeol/<imagename>:<tagname> .` - Build our image. 
   1. `-t` - Name and optionally a tag in the ‘name:tag’ format

## Docker push
1. `docker push amitozdeol/<imagename>:<tagname>` - push your image to dockerhub
2. `docker run -p 8888:5000 amitozdeol/<imagename>` - Anyone can run my docker image by running this command
   
# Multi Container Environment
In production usually apps nowadays are not that simple. There's almost always a database (or any other kind of persistent storage) involved. Systems such as Redis and Memcached have become de riguer of most web application architectures. 

One of the key points of Docker is the way it provide isolation. The idea of bundling a process with its dependencies in a sandbox (called containers) is what makes this so powerful.

Clone this [food truck](https://github.com/prakhar1989/FoodTrucks) repo. Create 2 containers. One for the food truck app and other for [elasticsearch](https://store.docker.com/images/elasticsearch). 
1. `docker search elasticsearch` - search in dockerhub
   
## Docker network
Cannot access another docker container 0.0.0.0 (or localhost) IP address. You can create a new network and launch a container inside this network.
1. `docker network ls` - See all your network. (3 networks are installed by default)
2. `docker network inspect <networkname>` - returns a JSON with details about the network
3. `docker network create <networkname> --driver <drivername>` - create a new network(default driver will be bridge)
   1. `--driver` - Change drivers. Options: bridge, host, overlay, macvlan, none. [More info](https://docs.docker.com/network/#network-drivers)
4. `docker run --net <networkname> <container1name>` - container1 is now running in "networkname" network
5. `docker run --net <networkname> <container2name>` - container2 is now runnning in "netowrkname" network

You can connect with other container like this in python

```python
# In this case our container1 is emasticsearch container. Since it's running on same network, we can conenct to it easily
from elasticsearch import Elasticsearch

# hostname = container name we gave
es = Elasticsearch(host="es")
```

## Docker Compose
Compose is a tool that is used for defining and running multi-container Docker apps in an easy way. It provides a configuration file called `docker-compose.yml` that can be used to bring up an application and the suite of services it depends on with just one command.

docker-composer.yml example - 
```yml
version: "3"
services:
    # es and web - name of our services. For each service, that Docker needs to run, we can add additional parameters out of which image is required
  es:
    image: elasticsearch:6.5.4
    container_name: es
    environment: #environment variable
      - discovery.type=single-node
    ports:
      - 9200:9200
    volumes: 
      - esdata1:/usr/share/elasticsearch/data
  web:
    image: amitozdeol/foodtruck:1.0
    command: python app.py
    depends_on: # tells docker to start the es container before web
      - es
    ports:
      - 5000:5000
    volumes: # The volumes parameter specifies a mount point in our web container where the code will reside.
      - ./flask-app:/opt/flask-app
volumes:
    esdata1:
      driver: local
```
1. `docker-compose up -d` - Create a foodtruck-default network. Link 2 containers to this network. Run the app on port 0.0.0.0:5000.
   1. `-d` - run in detached state. So terminal is free to use
2. `docker-compose down -v` - destroy the cluster of containers
   1. `-v` - destroy data volume
3. `docker-compose ps` - View both container running.
4. `docker-compose run web bash` - To run a single service(for whatever reason). It's running `web` service from docker-composer.yml
   1. `bash` - will take you to terminal for that container. Without bash it will run the container.

Usually docker will reflect any changes made to the app. If not, stop the docker-compose `docker-compose down -v` and start `docker-compose up -d` and this will show the changes.
