# openprinter

## Running
This project uses [docker](https://www.docker.com) (and docker compose) for 
deployment.

To run the server, run

```shell
./run_server.sh
```

This will listen on port 8080 by default, change the `ports:` setting
variable in the `docker-compose.yml` file for the `ping-server:` to override.

e.g. `"8080:9000"` will configure the external port `9000` to be mapped to the
internal port `8080`. This gives the apparent behaviour of actually listening
on port `9000`, even though the server inside the container believes it is
running on port `8080`.

If you wish to change the internal port, you should set the `PORT` environment 
variable in the container's Dockerfile and then update it on the LHS.
