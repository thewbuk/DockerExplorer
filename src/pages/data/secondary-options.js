export const secondaryOptions = {
  attach: [
    {
      value: ' attach-container',
      label: 'to a running container',
      usage: 'docker attach [OPTIONS] CONTAINER',
      nb: '[--detach-keys] - Override the key sequence for detaching a container [--no-stdin] - Do not attach STDIN [--sig-proxy] - Proxy all received signals to the process'

    }
  ],

  build: [
    {
      value: 'build-docker',
      label: 'from a Dockerfile',
      usage:
        'docker build [OPTIONS] PATH | URL | -',
      nb:
        '<>'
    },
  ],

  revert: [
    {
      value: 'builder-build',
      label: 'from a Dockerfile',
      usage: 'docker builder build [OPTIONS] PATH | URL | -',
    },
    {
      value: 'builder-prune',
      label: 'remove build cache',
      usage: 'docker builder prune',
    },
  ],

  buildx: [
    {
      value: 'buildx-bake',
      label: 'Build from file',
      usage: 'docker buildx bake [OPTIONS] [TARGET...]'
    },
    {
      value: 'buildx-build',
      label: 'Start a build',
      usage: 'docker buildx build [OPTIONS] PATH | URL | -'
    },
    {
      value: 'buildx-create',
      label: 'Create a new builder instance',
      usage: 'docker buildx create [OPTIONS] [CONTEXT|ENDPOINT]'
    },
    {
      value: 'buildx-du',
      label: 'Disk usage',
      usage: 'docker buildx du'
    },
    {
      value: 'buildx-imagetools',
      label: 'Commands to work on images in registry',
    },
    {
      value: 'buildx-inspect',
      label: 'Inspect current builder instance',
      usage: 'docker buildx inspect [NAME]'
    },
    {
      value: 'buildx-ls',
      label: 'List builder instances',
      usage: 'docker buildx ls'
    },
    {
      value: 'buildx-prune',
      label: 'Remove build cache',
      usage: 'docker buildx prune'
    },
    {
      value: 'buildx-rm',
      label: 'Remove a builder instance',
      usage: 'docker buildx rm [NAME]'
    },
    {
      value: 'buildx-stop',
      label: 'Stop builder instance',
      usage: 'docker buildx stop [NAME]'
    },
    {
      value: 'buildx-uninstall',
      label: 'Uninstall the ‘docker builder’ alias',
      usage: 'docker buildx uninstall'
    },
    {
      value: 'buildx-set',
      label: 'Set the current builder instance',
      usage: 'docker buildx use [OPTIONS] NAME'
    },
    {
      value: 'buildx-uninstall',
      label: 'Show buildx version information',
      usage: 'docker buildx version'
    },
  ],

  checkpoint: [
    {
      value: 'checkpoint-create',
      label: 'Create a checkpoint from a running container',
      usage: 'docker checkpoint create [OPTIONS] CONTAINER CHECKPOINT'
    },
    {
      value: 'checkpoint-ls',
      label: 'List checkpoints for a container',
      usage: 'docker checkpoint ls [OPTIONS] CONTAINER'
    },
    {
      value: 'checkpoint-remove',
      label: 'Remove a checkpoint',
      usage: 'docker checkpoint rm [OPTIONS] CONTAINER CHECKPOINT'
    },

  ],

  commit: [
    {
      value: 'commit',
      label: 'Create a new image from a container’s changes',
      usage: 'docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]'
    },
  ],

  compose: [
    {
      value: 'compose-compose',
      label: 'Docker Compose',
      usage: 'docker compose COMMAND',
      nb: 'Use -f to specify name and path of Compose files \n docker compose -f docker-compose.yml -f docker-compose.admin.yml run backup_db'
    },
    {
      value: 'compose-build',
      label: 'Build or rebuild services',
      usage: 'docker compose build [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-convert',
      label: 'Converts the compose file to platform’s canonical format',
      usage: 'docker compose convert [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-cp',
      label: 'Copy files/folders between a service container and the local filesystem',
      usage: 'docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|',
    },
    {
      value: 'compose-create',
      label: 'Creates containers for a service',
      usage: 'docker compose create [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-down',
      label: 'Stop and remove containers, networks',
      usage: 'docker compose down [OPTIONS]',
    },
    {
      value: 'compose-events',
      label: 'Receive real time events from containers.',
      usage: 'docker compose events [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-exec',
      label: 'Execute a command in a running container.',
      usage: 'docker compose exec [OPTIONS] SERVICE COMMAND [ARGS...]',
    },
    {
      value: 'compose-images',
      label: 'List images used by the created containers',
      usage: 'docker compose images [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-kill',
      label: 'Force stop service containers',
      usage: 'docker compose kill [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-logs',
      label: 'View output from containers',
      usage: 'docker compose logs [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-ls',
      label: 'List running compose projects',
      usage: 'docker compose ls [OPTIONS]',
    },
    {
      value: 'compose-pause',
      label: 'Pause services',
      usage: 'docker compose pause [SERVICE...]',
    },
    {
      value: 'compose-port',
      label: 'Print the public port for a port binding.',
      usage: 'docker compose port [OPTIONS] SERVICE PRIVATE_PORT',
    },
    {
      value: 'compose-ps',
      label: 'List containers',
      usage: 'docker compose ps [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-pull',
      label: 'Pull service images',
      usage: 'docker compose pull [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-push',
      label: 'Push service images',
      usage: 'docker compose push [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-restart',
      label: 'Restart service containers',
      usage: 'docker compose restart [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-rm',
      label: 'Run a one-off command on a service',
      usage: 'docker compose run [OPTIONS] SERVICE [COMMAND] [ARGS...]',
    },
    {
      value: 'compose-run',
      label: 'Stop and remove containers, networks',
      usage: 'docker compose down [OPTIONS]',
      nb: 'Use "docker compose run web bash" to run web bash'
    },
    {
      value: 'compose-start',
      label: 'Start services',
      usage: 'docker compose start [SERVICE...]',
    },
    {
      value: 'compose-stop',
      label: 'Stop services',
      usage: 'docker compose stop [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-top',
      label: 'Display the running processes',
      usage: 'docker compose top [SERVICES...]',
    },
    {
      value: 'compose-unpause',
      label: 'Unpause services',
      usage: 'docker compose unpause [SERVICE...]',
    },
    {
      value: 'compose-up',
      label: 'Create and start containers',
      usage: 'docker compose up [OPTIONS] [SERVICE...]',
    },
    {
      value: 'compose-version',
      label: 'Show the Docker Compose version information',
      usage: 'docker compose version [OPTIONS]',
    },
  ],

  config: [
    {
      value: 'config-create',
      label: 'Create a config from a file or STDIN',
      usage: 'docker config create [OPTIONS] CONFIG file|-',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'
    },
    {
      value: 'config-inspect',
      label: 'Display detailed information on configs',
      usage: 'docker config inspect [OPTIONS] CONFIG [CONFIG...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'config-ls',
      label: 'List configs',
      usage: 'docker config ls [OPTIONS]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'config-rm',
      label: 'Remove configs',
      usage: 'docker config rm CONFIG [CONFIG...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    }
  ],

  container: [
    {
      value: 'container-attach',
      label: 'Attach local standard input, output, and error streams to a running container',
      usage: 'docker container attach [OPTIONS] CONTAINER',
    },
    {
      value: 'container-commit',
      label: 'Create a new image from a container’s changes',
      usage: 'docker container commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]',
    },
    {
      value: 'container-cp',
      label: 'Copy files/folders between a container and the local filesystem',
      usage: 'docker container cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-',
    },
    {
      value: 'container-create',
      label: 'Create a new container',
      usage: 'docker container create [OPTIONS] IMAGE [COMMAND] [ARG...]',
    },
    {
      value: 'container-diff',
      label: 'Inspect changes to files or directories on a container’s filesystem',
      usage: 'docker container diff CONTAINER',
    },
    {
      value: 'container-exec',
      label: 'Run a command in a running container',
      usage: 'docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]',
    },
    {
      value: 'container-export',
      label: 'Export a container’s filesystem as a tar archive',
      usage: 'docker container export [OPTIONS] CONTAINER',
    },
    {
      value: 'container-inspect',
      label: 'Display detailed information on containers',
      usage: 'docker container inspect [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-kill',
      label: 'Kill running containers',
      usage: 'docker container kill [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-logs',
      label: 'Fetch the logs of a container',
      usage: 'docker container logs [OPTIONS] CONTAINER',
    },
    {
      value: 'container-ls',
      label: 'List containers',
      usage: 'docker container ls [OPTIONS]',
    },
    {
      value: 'container-pause',
      label: 'Pause all processes within containers',
      usage: 'docker container pause CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-port',
      label: 'List port mappings or a specific mapping for the container',
      usage: 'docker container port CONTAINER [PRIVATE_PORT[/PROTO]]',
    },
    {
      value: 'container-prune',
      label: 'Remove all stopped containers',
      usage: 'docker container prune [OPTIONS]',
    },
    {
      value: 'container-rename',
      label: 'Rename a container',
      usage: 'docker container rename CONTAINER NEW_NAME',
    },
    {
      value: 'container-restart',
      label: 'Restart containers',
      usage: 'docker container restart [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-rm',
      label: 'Remove containers',
      usage: 'docker container rm [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-run',
      label: 'Run a command in a new container',
      usage: 'docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]',
    },
    {
      value: 'container-start',
      label: 'Start stopped containers',
      usage: 'docker container start [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-stats',
      label: 'Display a live stream of container(s) resource usage statistics',
      usage: 'docker container stats [OPTIONS] [CONTAINER...]',
    },
    {
      value: 'container-stop',
      label: 'Stop running containers',
      usage: 'docker container stop [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-top',
      label: 'Display the running processes of a container',
      usage: 'docker container top CONTAINER [ps OPTIONS]',
    },
    {
      value: 'container-unpause',
      label: 'Unpause all processes within containers',
      usage: 'docker container unpause CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-update',
      label: 'Update configuration of containers',
      usage: 'docker container update [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-wait',
      label: 'Block until containers stop, then print their exit codes',
      usage: 'docker container wait CONTAINER [CONTAINER...]',
    },
  ],

  context: [
    {
      value: 'context-create',
      label: 'Create a context',
      usage: 'docker context create [OPTIONS] CONTEXT',
    },
    {
      value: 'context-export',
      label: 'Export a context to a tar or kubeconfig file',
      usage: 'docker context export [OPTIONS] CONTEXT [FILE|-]',
    },
    {
      value: 'context-import',
      label: 'Import a context from a tar or zip file',
      usage: 'docker context import CONTEXT FILE|-',
    },
    {
      value: 'context-inspect',
      label: 'Display information on contexts',
      usage: 'docker context inspect [OPTIONS] [CONTEXT] [CONTEXT...]',
    },
    {
      value: 'context-ls',
      label: 'List contexts',
      usage: 'docker context ls [OPTIONS]',
    },
    {
      value: 'context-rm',
      label: 'Remove contexts',
      usage: 'docker context rm CONTEXT [CONTEXT...]',
    },
    {
      value: 'context-update',
      label: 'Update a context',
      usage: 'docker context update [OPTIONS] CONTEXT',
    },
    {
      value: 'context-use',
      label: 'Set the current docker context',
      usage: 'docker context use CONTEXT',
    },

  ],

  cp: [
    {
      value: 'cp',
      label: 'Copy files/folders between a container and the local filesystem',
      usage: 'docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-',
    }
  ],
  create: [
    {
      value: 'create',
      label: 'Create a new container',
      usage: 'docker create [OPTIONS] IMAGE [COMMAND] [ARG...]',
    }
  ],
  diff: [
    {
      value: 'diff',
      label: 'Inspect changes to files or directories on a container’s filesystem',
      usage: 'docker diff CONTAINER',
    }
  ],
  events: [
    {
      value: 'events',
      label: 'Get real time events from the server',
      usage: 'docker events [OPTIONS]',
    }
  ],
  exec: [
    {
      value: 'exec',
      label: 'Run a command in a running container',
      usage: 'docker exec [OPTIONS] CONTAINER COMMAND [ARG...]',
    }
  ],
  export: [
    {
      value: 'export',
      label: 'Export a container’s filesystem as a tar archive',
      usage: 'docker export [OPTIONS] CONTAINER',
    }
  ],
  history: [
    {
      value: 'history',
      label: 'Show the history of an image',
      usage: 'docker history [OPTIONS] IMAGE',
    }
  ],

  image: [
    {
      value: 'image-build',
      label: 'Build an image from a Dockerfile',
      usage: 'docker image build [OPTIONS] PATH | URL | -',
    },
    {
      value: 'image-history',
      label: 'Show the history of an image',
      usage: 'docker image history [OPTIONS] IMAGE',
    },
    {
      value: 'image-import',
      label: 'Import the contents from a tarball to create a filesystem image',
      usage: 'docker image import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]',
    },
    {
      value: 'image-inspect',
      label: 'Display detailed information on images',
      usage: 'docker image inspect [OPTIONS] IMAGE [IMAGE...]',
    },
    {
      value: 'image-load',
      label: 'Load an image from a tar archive or STDIN',
      usage: 'docker image load [OPTIONS]',
    },
    {
      value: 'image-ls',
      label: 'List images',
      usage: 'docker image ls [OPTIONS] [REPOSITORY[:TAG]]',
    },
    {
      value: 'image-prune',
      label: 'Remove unused images',
      usage: 'docker image prune [OPTIONS]',
    },
    {
      value: 'image-pull',
      label: 'Pull an image or a repository from a registry',
      usage: 'docker image pull [OPTIONS] NAME[:TAG|@DIGEST]',
    },
    {
      value: 'image-push',
      label: 'Push an image or a repository to a registry',
      usage: 'docker image push [OPTIONS] NAME[:TAG]',
    },
    {
      value: 'image-rm',
      label: 'Remove images',
      usage: 'docker image rm [OPTIONS] IMAGE [IMAGE...]',
    },
    {
      value: 'image-save',
      label: 'Save images to a tar archive (streamed to STDOUT by default)',
      usage: 'docker image save [OPTIONS] IMAGE [IMAGE...]',
    },
    {
      value: 'image-tag',
      label: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
      usage: 'docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]',
    },
  ],

  images: [
    {
      value: 'images',
      label: 'List images',
      usage: 'docker images [OPTIONS] [REPOSITORY[:TAG]]'
    }
  ],
  import: [
    {
      value: 'import',
      label: 'Import the contents from a tarball to create a filesystem image',
      usage: 'docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]'
    }
  ],
  info: [
    {
      value: 'info',
      label: 'Display system-wide information',
      usage: 'docker info [OPTIONS]'
    }
  ],
  inspect: [
    {
      value: 'inspect',
      label: 'Return low-level information on Docker objects',
      usage: 'docker inspect [OPTIONS] NAME|ID [NAME|ID...]'
    }
  ],
  kill: [
    {
      value: 'kill',
      label: 'Kill running containers',
      usage: 'docker kill [OPTIONS] CONTAINER [CONTAINER...]'
    }
  ],
  load: [
    {
      value: 'load',
      label: 'Load an image from a tar archive or STDIN',
      usage: 'docker load [OPTIONS]'
    }
  ],
  login: [
    {
      value: 'login',
      label: 'Log in to a Docker registry',
      usage: ' docker login [OPTIONS] [SERVER]'
    }
  ],
  logout: [
    {
      value: 'logout',
      label: 'Log out from a Docker registry',
      usage: 'docker logout [SERVER]'
    }
  ],
  logs: [
    {
      value: 'logs',
      label: 'Fetch the logs of a container',
      usage: 'docker logs [OPTIONS] CONTAINER',
      nb: 'This command is only functional for containers that are started with the json-file or journald logging driver'
    }
  ],
  manifest: [
    {
      value: 'manifest-annotate',
      label: 'Add additional information to a local image manifest',
      usage: 'docker manifest annotate [OPTIONS] MANIFEST_LIST MANIFEST',
      nb: 'This command is experimental'
    },
    {
      value: 'manifest-create',
      label: 'Create a local manifest list for annotating and pushing to a registry',
      usage: 'docker manifest create MANIFEST_LIST MANIFEST [MANIFEST...]',
      nb: 'This command is experimental'
    },
    {
      value: 'manifest-inspect',
      label: 'Display an image manifest, or manifest list',
      usage: 'docker manifest inspect [OPTIONS] [MANIFEST_LIST] MANIFEST',
      nb: 'This command is experimental'
    },
    {
      value: 'manifest-push',
      label: 'Push a manifest list to a repository',
      usage: 'docker manifest push [OPTIONS] MANIFEST_LIST',
      nb: 'This command is experimental'
    },
    {
      value: 'manifest-rm',
      label: 'Delete manifest lists from local storage',
      usage: 'docker manifest rm MANIFEST_LIST [MANIFEST_LIST...]',
      nb: 'This command is experimental'
    },
  ],

  network: [
    {
      value: 'network-connect',
      label: 'Connect a container to a network',
      usage: 'docker network connect [OPTIONS] NETWORK CONTAINER'
    },
    {
      value: 'network-create',
      label: 'Create a network',
      usage: 'docker network create [OPTIONS] NETWORK'
    },
    {
      value: 'network-disconnect',
      label: 'Disconnect a container from a network',
      usage: 'docker network disconnect [OPTIONS] NETWORK CONTAINER'
    },
    {
      value: 'network-inspect',
      label: 'Display detailed information on networks',
      usage: 'docker network inspect [OPTIONS] NETWORK [NETWORK...]'
    },
    {
      value: 'network-ls',
      label: 'List networks',
      usage: 'docker network ls [OPTIONS]'
    },
    {
      value: 'network-prune',
      label: 'Remove all unused networks',
      usage: 'docker network prune [OPTIONS]'
    },
    {
      value: 'network-rm',
      label: 'Remove networks',
      usage: 'docker network rm NETWORK [NETWORK...]'
    },

  ],

  node: [
    {
      value: 'node-demote',
      label: 'Demote nodes from manager in the swarm',
      usage: 'docker node demote NODE [NODE...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'
    },
    {
      value: 'node-inspect',
      label: 'Display detailed information on nodes',
      usage: 'docker node inspect [OPTIONS] self|NODE [NODE...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'node-ls',
      label: 'List nodes in the swarm',
      usage: 'docker node ls [OPTIONS]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'node-promote',
      label: 'Promote nodes to manager in the swarm',
      usage: 'docker node promote NODE [NODE...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'node-ps',
      label: 'List tasks running on nodes, defaults to current node',
      usage: 'docker node ps [OPTIONS] [NODE...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'

    },
    {
      value: 'node-rm',
      label: 'Remove nodes from the swarm',
      usage: 'docker node rm [OPTIONS] NODE [NODE...]',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'
    },
    {
      value: 'node-update',
      label: 'Update a node',
      usage: 'docker node update [OPTIONS] NODE',
      nb: 'This is a cluster management command, and must be executed on a swarm manager node.'
    },
  ],

  pause: [
    {
      value: 'pause',
      label: 'Pause all processes within containers',
      usage: 'docker pause CONTAINER [CONTAINER...]'
    },
  ],

  plugin: [
    {
      value: 'plugin-create',
      label: 'Create a plugin from a rootfs and configuration',
      usage: 'docker plugin create [OPTIONS] PLUGIN PLUGIN-DATA-DIR',
      nb: 'Plugin data directory must contain config.json and rootfs directory.'
    },
    {
      value: 'plugin-disable',
      label: 'Disable a plugin',
      usage: 'docker plugin disable [OPTIONS] PLUGIN',
    },
    {
      value: 'plugin-enable',
      label: 'Enable a plugin',
      usage: 'docker plugin enable [OPTIONS] PLUGIN',
    },
    {
      value: 'plugin-inspect',
      label: 'Display detailed information on plugins',
      usage: 'docker plugin inspect [OPTIONS] PLUGIN [PLUGIN...]',
    },
    {
      value: 'plugin-install',
      label: 'Install a plugin',
      usage: 'docker plugin install [OPTIONS] PLUGIN [KEY=VALUE...]',
    },
    {
      value: 'plugin-ls',
      label: 'List plugins',
      usage: 'docker plugin ls [OPTIONS]',
    },
    {
      value: 'plugin-rm',
      label: 'Remove plugins',
      usage: 'docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]',
    },
    {
      value: 'plugin-set',
      label: 'Change settings for a plugin',
      usage: ' docker plugin set PLUGIN KEY=VALUE [KEY=VALUE...]',
    },
    {
      value: 'plugin-upgrade',
      label: 'Upgrade an existing plugin',
      usage: 'docker plugin upgrade [OPTIONS] PLUGIN [REMOTE]',
    },
  ],

  port: [
    {
      value: 'port',
      label: 'List port mappings or a specific mapping for the container',
      usage: 'docker port CONTAINER [PRIVATE_PORT[/PROTO]]',
    },
  ],

  ps: [
    {
      value: 'ps',
      label: 'List containers',
      usage: 'docker ps [OPTIONS]',
    },
  ],

  pull: [
    {
      value: 'pull',
      label: 'Pull an image or a repository from a registry',
      usage: 'docker pull [OPTIONS] NAME[:TAG|@DIGEST]',
    },
  ],

  push: [
    {
      value: 'push',
      label: 'Push an image or a repository to a registry',
      usage: 'docker push [OPTIONS] NAME[:TAG]',
    },
  ],

  rename: [
    {
      value: 'rename',
      label: 'Rename a container',
      usage: 'docker rename CONTAINER NEW_NAME',
    },
  ],

  restart: [
    {
      value: 'restart',
      label: 'Restart containers',
      usage: 'docker restart [OPTIONS] CONTAINER [CONTAINER...]',
    },
  ],

  rm: [
    {
      value: 'rm',
      label: 'Remove containers',
      usage: 'docker rm [OPTIONS] CONTAINER [CONTAINER...]',
    },
  ],

  rmi: [
    {
      value: 'rmi',
      label: 'Remove images',
      usage: 'docker rmi [OPTIONS] IMAGE [IMAGE...]',
    },
  ],

  run: [
    {
      value: 'run',
      label: 'Run a command in a new container',
      usage: 'docker run [OPTIONS] IMAGE [COMMAND] [ARG...]',
    },

  ],

  save: [
    {
      value: 'save',
      label: 'Save images to a tar archive (streamed to STDOUT by default)',
      usage: 'docker save [OPTIONS] IMAGE [IMAGE...]',
    },

  ],

  search: [
    {
      value: 'search',
      label: 'Search the Docker Hub for images',
      usage: 'docker search [OPTIONS] TERM',
    },

  ],

  secret: [
    {
      value: 'secret-create',
      label: 'Create a secret from a file or STDIN as content',
      usage: 'docker secret create [OPTIONS] SECRET [file|-]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'secret-inspect',
      label: 'Display detailed information on secrets',
      usage: 'docker secret inspect [OPTIONS] SECRET [SECRET...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'

    },
    {
      value: 'secret-ls',
      label: 'List secrets',
      usage: 'docker secret ls [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'

    },
    {
      value: 'secret-rm',
      label: 'Remove secrets',
      usage: 'docker secret rm SECRET [SECRET...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
  ],

  service: [
    {
      value: 'service-create',
      label: 'Create a new service',
      usage: 'docker service create [OPTIONS] IMAGE [COMMAND] [ARG...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-inspect',
      label: 'Display detailed information on services',
      usage: 'docker service inspect [OPTIONS] SERVICE [SERVICE...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-logs',
      label: 'Fetch the logs of a service or task',
      usage: 'docker service logs [OPTIONS] SERVICE|TASK',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-ls',
      label: 'List services',
      usage: 'docker service ls [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-ps',
      label: 'List the tasks of services',
      usage: 'docker service ps [OPTIONS] SERVICE [SERVICE...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-rollback',
      label: 'Revert changes to a service’s configuration',
      usage: 'docker service rollback [OPTIONS] SERVICE',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-rm',
      label: 'Remove services',
      usage: 'docker service rm SERVICE [SERVICE...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-scale',
      label: 'Scale one or multiple replicated services',
      usage: 'docker service scale SERVICE=REPLICAS [SERVICE=REPLICAS...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'service-update',
      label: 'Update a service',
      usage: 'docker service update [OPTIONS] SERVICE',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
  ],

  stack: [
    {
      value: 'stack-deploy',
      label: 'Deploy a new stack or update an existing stack',
      usage: 'docker stack deploy [OPTIONS] STACK',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'stack-ls',
      label: 'List stacks',
      usage: 'docker stack ls [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'stack-ps',
      label: 'List the tasks in the stack',
      usage: 'docker stack ps [OPTIONS] STACK',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'stack-rm',
      label: 'Remove stacks',
      usage: 'docker stack rm [OPTIONS] STACK [STACK...]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'stack-services',
      label: 'List the services in the stack',
      usage: 'docker stack services [OPTIONS] STACK',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
  ],

  start: [
    {
      value: 'start',
      label: 'Start stopped containers',
      usage: 'docker start [OPTIONS] CONTAINER [CONTAINER...]',
    },
  ],

  stats: [
    {
      value: 'stats',
      label: 'Display a live stream of container(s) resource usage statistics',
      usage: 'docker stats [OPTIONS] [CONTAINER...]',
      nb: 'On Linux, the Docker CLI reports memory usage by subtracting cache usage from the total memory usage. \n The PIDS column contains the number of processes and kernel threads created by that container. '
    },
  ],

  stop: [
    {
      value: 'stop',
      label: 'Stop running containers',
      usage: 'docker stop [OPTIONS] CONTAINER [CONTAINER...]',
    },
  ],

  swarm: [
    {
      value: 'swarm-ca',
      label: 'Display and rotate the root CA',
      usage: 'docker swarm ca [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-init',
      label: 'Initialize a swarm',
      usage: 'docker swarm init [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-join-token',
      label: 'Manage join tokens',
      usage: 'docker swarm join-token [OPTIONS] (worker|manager)',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-join',
      label: 'Join a swarm as a node and/or manager',
      usage: 'docker swarm join [OPTIONS] HOST:PORT',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-leave',
      label: 'Leave the swarm',
      usage: 'docker swarm leave [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-unlock-key',
      label: 'Manage the unlock key',
      usage: 'docker swarm unlock-key [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-unlock',
      label: 'Unlock swarm',
      usage: 'docker swarm unlock',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
    {
      value: 'swarm-update',
      label: 'Update the swarm',
      usage: 'docker swarm update [OPTIONS]',
      nb: 'This is cluster management command, and must be executed on a swarm manager node'
    },
  ],

  system: [
    {
      value: 'system-df',
      label: 'Show docker disk usage',
      usage: 'docker system df [OPTIONS]',
    },
    {
      value: 'system-events',
      label: 'Get real time events from the server',
      usage: 'docker system events [OPTIONS]',
    },
    {
      value: 'system-info',
      label: 'Display system-wide information',
      usage: 'docker system info [OPTIONS]',
    },
    {
      value: 'system-prune',
      label: 'Remove unused data',
      usage: 'docker system prune [OPTIONS]',
    },
  ],

  tag: [
    {
      value: 'tag',
      label: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
      usage: 'docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]',
    },
  ],

  top: [
    {
      value: 'top',
      label: 'Display the running processes of a container',
      usage: 'docker top CONTAINER [ps OPTIONS]',
    },
  ],

  trust: [
    {
      value: 'trust-inspect',
      label: 'Return low-level information about keys and signatures',
      usage: 'docker trust inspect IMAGE[:TAG] [IMAGE[:TAG]...]',
    },
    {
      value: 'trust-key',
      label: 'Manage keys for signing Docker images',
    },
    {
      value: 'trust-revoke',
      label: 'Remove trust for an image',
      usage: 'docker trust revoke [OPTIONS] IMAGE[:TAG]',
    },
    {
      value: 'trust-sign',
      label: 'Sign an image',
      usage: 'docker trust sign IMAGE:TAG',
    },
    {
      value: 'trust-signer',
      label: 'Manage entities who can sign Docker images',
    },
  ],

  unpause: [
    {
      value: 'unpause',
      label: 'Unpause all processes within containers',
      usage: 'docker unpause CONTAINER [CONTAINER...]',
    },
  ],

  update: [
    {
      value: 'update',
      label: 'Update configuration of containers',
      usage: 'docker update [OPTIONS] CONTAINER [CONTAINER...]',
      nb: 'The docker update and docker container update commands are not supported for Windows containers'
    },
  ],

  version: [
    {
      value: 'version',
      label: 'Show the Docker version information',
      usage: 'docker version [OPTIONS]',
    },
  ],

  volume: [
    {
      value: 'volume-create',
      label: 'Create a volume',
      usage: 'docker volume create [OPTIONS] [VOLUME]',
    },
    {
      value: 'volume-inspect',
      label: 'Display detailed information on volumes',
      usage: 'docker volume inspect [OPTIONS] VOLUME [VOLUME...]'
    },
    {
      value: 'volume-ls',
      label: 'List volumes',
      usage: 'docker volume ls [OPTIONS]',
    },
    {
      value: 'volume-prune',
      label: 'Remove all unused local volumes',
      usage: 'docker volume prune [OPTIONS]',
    },
    {
      value: 'volume-rm',
      label: 'Remove volumes',
      usage: 'docker volume rm [OPTIONS] VOLUME [VOLUME...]',
    },
  ],

  wait: [
    {
      value: 'wait',
      label: 'Block until containers stop, then print their exit codes',
      usage: 'docker wait CONTAINER [CONTAINER...]',
    },
  ],
};
