# js-data-validator
dataset validator by JavaScript

## Development on ubuntu 18.04

### Install docker

```
sudo apt-get install docker docker.io docker-containerd
sudo groupadd docker
sudo gpasswd -a $USER docker
sudo chmod 666 /var/run/docker.sock
```

### Run docker image

```
sudo systemctl status docker # check status
newgrp docker
docker run
```

