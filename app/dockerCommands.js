export const dockerCommands = [
    {
        command: "docker build",
        description: "Build a Docker image from a Dockerfile.",
        usage: "docker build [options] PATH",
        options: [
            {
                name: "-t, --tag",
                description: "Name and optionally a tag in the name:tag format",
            },
            {
                name: "--no-cache",
                description: "Do not use cache when building the image",
            },
            {
                name: "-f, --file",
                description: 'Name of the Dockerfile (Default is "PATH/Dockerfile")',
            },
            {
                name: "-m, --memory",
                description: "Set memory limit for the build container",
            },
            {
                name: "--shm-size",
                description: "Size of /dev/shm, default value is 64mb",
            },
            {
                name: "--build-arg",
                description: "Set build-time variables",
            },
            {
                name: "-c, --cpu-shares",
                description: "CPU shares (relative weight)",
            },
            {
                name: "--cpuset-cpus",
                description: "CPUs in which to allow execution, e.g. 0-3, 0,1",
            },
            {
                name: "--cpuset-mems",
                description: "MEMs in which to allow execution, e.g. 0-3, 0,1",
            },
        ],
    },
    {
        command: "docker run",
        description: "Run a command in a new container.",
        usage: "docker run [options] IMAGE [command] [args...]",
        options: [
            {
                name: "--rm",
                description: "Automatically remove the container when it exits.",
            },
            {
                name: "-d, --detach",
                description: "Run container in the background, print container ID.",
            },
            {
                name: "-it",
                description: "Run container in interactive mode with a pseudo-TTY.",
            },
            {
                name: "-p, --publish",
                description: "Publish a container's port(s) to the host.",
            },
            {
                name: "--name",
                description: "Assign a name to the container.",
            },
            {
                name: "--user",
                description: "Username or UID (format: <name|uid>[:<group|gid>])",
            },
            {
                name: "-e, --env",
                description: "Set environment variables",
            },
            {
                name: "--env-file",
                description: "Read in a file of environment variables",
            },
            {
                name: "-w, --workdir",
                description: "Working directory inside the container",
            },
            {
                name: "-v, --volume",
                description: "Bind mount a volume",
            },
            {
                name: "--mount",
                description: "Attach a filesystem mount to the container",
            },
            {
                name: "-u, --ulimit",
                description: "Ulimit options (default=[])",
            },
            {
                name: "--network",
                description: "Connect a container to a network",
            },
            {
                name: "--link",
                description: "Add link to another container",
            },
            {
                name: "--add-host",
                description: "Add a custom host-to-IP mapping (host:ip)",
            },
            {
                name: "--security-opt",
                description: "Security Options",
            },
            {
                name: "--init",
                description:
                    "Run an init inside the container that forwards signals and reaps processes",
            },
            {
                name: "--ipc",
                description: "IPC settings for the container",
            },
            {
                name: "--sysctl",
                description: "Sysctl options",
            },
            {
                name: "--oom-kill-disable",
                description: "Disable OOM Killer for the container",
            },
            {
                name: "--cap-add",
                description: "Add Linux capabilities",
            },
            {
                name: "--cap-drop",
                description: "Drop Linux capabilities",
            },
            {
                name: "--cgroup-parent",
                description: "Optional parent cgroup for the container",
            },
            {
                name: "--cpus",
                description: "Number of CPUs",
            },
            {
                name: "--cpu-quota",
                description: "Limit CPU CFS (Completely Fair Scheduler) quota",
            },
            {
                name: "--cpu-period",
                description: "Limit CPU CFS (Completely Fair Scheduler) period",
            },
            {
                name: "--cpu-rt-period",
                description: "Limit CPU real-time period in microseconds",
            },
            {
                name: "--cpu-rt-runtime",
                description: "Limit CPU real-time runtime in microseconds",
            },
            {
                name: "--detach-keys",
                description: "Override the key sequence for detaching a container",
            },
            {
                name: "--device",
                description: "Add a host device to the container",
            },
            {
                name: "--device-read-bps",
                description: "Limit read rate (bytes per second) from a device",
            },
            {
                name: "--device-read-iops",
                description: "Limit read rate (IO per second) from a device",
            },
            {
                name: "--device-write-bps",
                description: "Limit write rate (bytes per second) to a device",
            },
            {
                name: "--device-write-iops",
                description: "Limit write rate (IO per second) to a device",
            },
            {
                name: "--tmpfs",
                description: "Mount a tmpfs directory",
            },
            {
                name: "--shm-size",
                description: "Size of /dev/shm, default value is 64mb",
            },
            {
                name: "--sysctl-file",
                description: "Load sysctl settings from file",
            },
        ],
    },
    {
        command: "docker ps",
        description: "List containers.",
        usage: "docker ps [options]",
        options: [
            {
                name: "-a, --all",
                description: "Show all containers (default shows just running)",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output.",
            },
            {
                name: "-q, --quiet",
                description: "Only display container IDs.",
            },
            {
                name: "--filter",
                description: "Filter output based on conditions provided.",
            },
            {
                name: "--format",
                description: "Pretty-print containers using a Go template.",
            },
            {
                name: "--last",
                description:
                    "Show n last created containers, include non-running ones.",
            },
            {
                name: "--latest, -l",

                description:
                    "Show the latest created container, include non-running ones.",
            },
            {
                name: "--size",
                description: "Display total file sizes if the type is container.",
            },
            {
                name: "--before",
                description:
                    "Show only containers created before Id or Name, include non-running ones.",
            },
            {
                name: "--since",
                description:
                    "Show only containers created after Id or Name, include non-running ones.",
            },
            {
                name: "--limit",
                description:
                    "Show n last created containers, include non-running ones.",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output.",
            },
            {
                name: "--quiet, -q",
                description: "Only display numeric IDs.",
            },
            {
                name: "--size",
                description: "Display total file sizes.",
            },
            // ... add more options for 'docker ps'
        ],
    },
    {
        command: "docker network",
        description: "Manage networks.",
        usage: "docker network COMMAND",
        options: [
            {
                name: "create",
                description: "Create a network",
            },
            {
                name: "connect",
                description: "Connect a container to a network",
            },
            {
                name: "disconnect",
                description: "Disconnect a container from a network",
            },
            {
                name: "inspect",
                description: "Display detailed information on one or more networks",
            },
            {
                name: "ls",
                description: "List networks",
            },
            {
                name: "prune",
                description: "Remove all unused networks",
            },
            {
                name: "rm",
                description: "Remove one or more networks",
            },
            {
                name: "--filter",
                description: "Filter output based on conditions provided.",
            },
            {
                name: "--format",
                description: "Pretty-print networks using a Go template.",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output.",
            },
            // ... add more options for 'docker network'
        ],
    },
    {
        command: "docker volume",
        description: "Manage volumes.",
        usage: "docker volume COMMAND",
        options: [
            {
                name: "create",
                description: "Create a volume",
            },
            {
                name: "inspect",
                description: "Display detailed information on one or more volumes",
            },
            {
                name: "ls",
                description: "List volumes",
            },
            {
                name: "prune",
                description: "Remove all unused volumes",
            },
            {
                name: "rm",
                description: "Remove one or more volumes",
            },
            {
                name: "--filter",
                description: "Filter output based on conditions provided.",
            },
            {
                name: "--format",
                description: "Pretty-print volumes using a Go template.",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output.",
            },
            // ... add more options for 'docker volume'
        ],
    },
    {
        command: "docker-compose",
        description: "Define and run multi-container applications with Docker.",
        usage: "docker-compose [options] [COMMAND] [args...]",
        options: [
            {
                name: "-f, --file",
                description:
                    "Specify an alternate compose file (default: docker-compose.yml)",
            },
            {
                name: "-p, --project-name",
                description:
                    "Specify an alternate project name (default: directory name)",
            },
            {
                name: "--verbose",
                description: "Show more output",
            },
            {
                name: "--version",
                description: "Show version information and exit",
            },
            {
                name: "--help",
                description: "Show help and exit",
            },
            // ... add more options for 'docker-compose'
        ],
    },
    {
        command: "docker cp",
        description:
            "Copy files/folders between a container and the local filesystem.",
        usage: "docker cp [options] CONTAINER:SRC_PATH DEST_PATH|-",
        options: [
            {
                name: "-a, --archive",
                description: "Archive mode (copy all uid/gid information).",
            },
            {
                name: "-L, --follow-link",
                description: "Always follow symbol link in SRC_PATH.",
            },
            {
                name: "--no-follow-link",
                description: "Do not follow symbol links in SRC_PATH.",
            },
            {
                name: "--no-preserve",
                description: "Do not preserve ownership or timestamps.",
            },
            {
                name: "--preserve",
                description: "Preserve ownership and timestamps (default for root).",
            },
            {
                name: "--no-overwrite-dir",
                description: "Do not overwrite destination directory if it exists.",
            },
            {
                name: "--recursive",
                description: "Copy directories recursively.",
            },
            {
                name: "--follow-link",
                description: "Follow symbol links in SRC_PATH (default for non-root).",
            },
            // ... add more options for 'docker cp'
        ],
    },
    {
        command: "docker port",
        description: "List port mappings or a specific mapping for the container.",
        usage: "docker port CONTAINER [PRIVATE_PORT[/PROTO]]",
        options: [],
    },
    {
        command: "docker inspect",
        description: "Return low-level information on Docker objects.",
        usage: "docker inspect [options] NAME|ID [NAME|ID...]",
        options: [
            {
                name: "-f, --format",
                description: "Format the output using the given Go template.",
            },
            {
                name: "--size",
                description: "Display total file sizes if the type is container.",
            },
            {
                name: "--type",
                description: "Return JSON for specified type",
            },
            {
                name: "--format-version",
                description: "Format the output given a specific version of the format",
            },
            // ... add more options for 'docker inspect'
        ],
    },
    {
        command: "docker tag",
        description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE.",
        usage: "docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]",
        options: [],
    },
    {
        command: "docker search",
        description: "Search the Docker Hub for images.",
        usage: "docker search [options] TERM",
        options: [
            {
                name: "--filter, -f",
                description: "Filter output based on conditions provided.",
            },
            {
                name: "--format",
                description: "Pretty-print search using a Go template.",
            },
            {
                name: "--limit",
                description: "Max number of search results (default25).",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output.",
            },
            {
                name: "--stars",
                description: "Filter by minimum stars",
            },
            {
                name: "--automated",
                description: "Only show automated builds",
            },
            {
                name: "--no-automated",
                description: "Only show non-automated builds",
            },
            {
                name: "--no-trunc",
                description: "Don't truncate output",
            },
            {
                name: "--format",
                description: "Pretty-print search using a Go template.",
            },
            // ... add more options for 'docker search'
        ],
    },
    {
        command: "docker stats",
        description:
            "Display a live stream of container(s) resource usage statistics",
        usage: "docker stats [OPTIONS] [CONTAINER...]",
        options: [
            {
                name: "--all",
                description: "Show all containers (default shows just running)",
            },
            {
                name: "--format",
                description: "Pretty-print stats using a Go template",
            },
            {
                name: "--no-stream",
                description: "Disable streaming stats and only pull the first result",
            },
            {
                name: "--no-trunc",
                description: "Do not truncate output",
            },
            // ... add more options for 'docker stats'
        ],
    },
    {
        command: "docker events",
        description: "Get real time events from the server.",
        usage: "docker events [OPTIONS]",
        options: [
            {
                name: "--since",
                description: "Show all events created since timestamp",
            },
            {
                name: "--until",
                description: "Stream events until this timestamp",
            },
            {
                name: "--filter, -f",
                description: "Provide filter values",
            },
            {
                name: "--format",
                description: "Format the output using the given Go template",
            },
            // ... add more options for 'docker events'
        ],
    },
    {
        command: "docker save",
        description:
            "Save one or more images to a tar archive (streamed to STDOUT by default)",
        usage: "docker save [OPTIONS] IMAGE [IMAGE...]",
        options: [
            {
                name: "-o, --output",
                description: "Write to a file, instead of STDOUT",
            },
            {
                name: "--quiet, -q",
                description: "Suppress verbose output",
            },
            {
                name: "--tag, -t",
                description: "Name and optionally a tag in the 'name:tag' format",
            },
            // ... add more options for 'docker save'
        ],
    },
    {
        command: "docker load",
        description: "Load an image from a tar archive or STDIN",
        usage: "docker load [OPTIONS]",
        options: [
            {
                name: "--input, -i",
                description: "Read from tar archive file, instead of STDIN",
            },
            {
                name: "--quiet, -q",
                description: "Suppress verbose output",
            },
            // ... add more options for 'docker load'
        ],
    },
    {
        command: "docker history",
        description: "Show the history of an image",
        usage: "docker history [OPTIONS] IMAGE",
        options: [
            {
                name: "--human, -",
                description: "Display the running processes of a container",
                usage: "docker top CONTAINER [ps OPTIONS]",
                options: [
                    {
                        name: "--no-trunc",
                        description: "Do not truncate output",
                    },
                    // ... add more options for 'docker history'
                ],
            },
            {
                command: "docker top",
                description: "Display the running processes of a container",
                usage: "docker top CONTAINER [ps OPTIONS]",
                options: [
                    {
                        name: "-e, --encrypt",
                        description: "Encrypt the connection to the docker daemon",
                    },
                    {
                        name: "--no-stream",
                        description:
                            "Disable streaming stats and only pull the first result",
                    },
                    {
                        name: "--pid",
                        description: "Show only processes with specified PIDs",
                    },
                    // ... add more options for 'docker top'
                ],
            },
            {
                command: "docker pause",
                description: "Pause all processes within one or more containers",
                usage: "docker pause CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker unpause",
                description: "Unpause all processes within one or more containers",
                usage: "docker unpause CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker wait",
                description:
                    "Block until one or more containers stop, then print their exit codes",
                usage: "docker wait CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker system",
                description: "Manage Docker",
                usage: "docker system COMMAND",
                options: [
                    // This command has subcommands like 'df', 'events', 'info', 'prune', 'reclaim', and 'version'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker service",
                description: "Manage Docker services",
                usage: "docker service COMMAND",
                options: [
                    // This command has subcommands like 'create', 'ls', 'ps', 'rm', and 'scale'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker stack",
                description: "Manage Docker stacks",
                usage: "docker stack COMMAND",
                options: [
                    // This command has subcommands like 'deploy', 'ls', 'ps', 'rm', and 'services'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker secret",
                description: "Manage Docker secrets",
                usage: "docker secret COMMAND",
                options: [
                    // This command has subcommands like 'create', 'inspect', 'ls', and 'rm'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker config",
                description: "Manage Docker configs",
                usage: "docker config COMMAND",
                options: [
                    // This command has subcommands like 'create', 'inspect', 'ls', and 'rm'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker plugin",
                description: "Manage Docker plugins",
                usage: "docker plugin COMMAND",
                options: [
                    // This command has subcommands like 'create', 'disable', 'enable', 'inspect', 'ls', 'push', 'rm', and 'set'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker buildx",
                description: "Build with BuildKit",

                usage: "docker buildx COMMAND",
                options: [
                    // This command has subcommands like 'build', 'create', 'inspect', 'ls', 'rm', and 'stop'.
                    // You can add options for each subcommand if needed.
                ],
            },
            {
                command: "docker runx",
                description: "Run containers with BuildKit",
                usage: "docker runx [options] IMAGE [command] [args...]",
                options: [
                    {
                        name: "--name",
                        description: "Assign a name to the container",
                    },
                    {
                        name: "--env, -e",
                        description: "Set environment variables",
                    },
                    {
                        name: "--label",
                        description: "Set metadata for an image, container, or daemon",
                    },
                    {
                        name: "--platform",
                        description: "Set platform if server is multi-platform capable",
                    },
                    {
                        name: "--user",
                        description: "Username or UID (format: <name|uid>[:<group|gid>])",
                    },
                    // ... add more options for 'docker runx'
                ],
            },
            {
                command: "docker stats",
                description:
                    "Display a live stream of container(s) resource usage statistics",
                usage: "docker stats [OPTIONS] [CONTAINER...]",
                options: [
                    {
                        name: "--all, -a",
                        description: "Show all containers (default shows just running)",
                    },
                    {
                        name: "--format",
                        description: "Pretty-print stats using a Go template",
                    },
                    {
                        name: "--no-stream",
                        description:
                            "Disable streaming stats and only pull the first result",
                    },
                    {
                        name: "--no-trunc",
                        description: "Do not truncate output",
                    },
                    // ... add more options for 'docker stats'
                ],
            },
            {
                command: "docker events",
                description: "Get real time events from the server",
                usage: "docker events [OPTIONS]",
                options: [
                    {
                        name: "--filter, -f",
                        description: "Filter events based on event condition",
                    },
                    {
                        name: "--since",
                        description: "Show all events created since timestamp",
                    },
                    {
                        name: "--until",
                        description: "Stream events until this timestamp",
                    },
                    // ... add more options for 'docker events'
                ],
            },
            {
                command: "docker version",
                description: "Show the Docker version information",
                usage: "docker version [OPTIONS]",
                options: [
                    {
                        name: "--format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "--short, -s",
                        description: "Print only the version number",
                    },
                    // ... add more options for 'docker version'
                ],
            },
            // ... add more Docker commands and options as needed

            {
                command: "docker swarm",
                description: "Manage Docker Swarm",
                usage: "docker swarm [OPTIONS] COMMAND [ARGS]",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker swarm'
                ],
            },
            {
                command: "docker service",
                description: "Manage Docker services",
                usage: "docker service COMMAND",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker service'
                ],
            },
            {
                command: "docker node",
                description: "Manage Docker Swarm nodes",
                usage: "docker node COMMAND",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker node'
                ],
            },
            {
                command: "docker stack",
                description: "Manage Docker stacks",
                usage: "docker stack COMMAND",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker stack'
                ],
            },
            {
                command: "docker plugin",
                description: "Manage Docker plugins",
                usage: "docker plugin COMMAND",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker plugin'
                ],
            },
            {
                command: "docker system",
                description: "Manage Docker",
                usage: "docker system COMMAND",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--version",
                        description: "Print version information and quit",
                    },
                    {
                        name: "--debug",
                        description: "Enable debug mode",
                    },
                    // ... add more options for 'docker system'
                ],
            },
            // ... add more Docker commands and options as needed

            {
                command: "docker stats",
                description:
                    "Display a live stream of container(s) resource usage statistics",
                usage: "docker stats [OPTIONS] [CONTAINER...]",
                options: [
                    {
                        name: "--all, -a",
                        description: "Show all containers (default shows just running)",
                    },
                    {
                        name: "--format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--no-stream",
                        description:
                            "Disable streaming stats and only pull the first result",
                    },
                    {
                        name: "--no-trunc",
                        description: "Do not truncate output",
                    },
                    {
                        name: "--timeout",
                        description:
                            "Timeout to stop streaming after inactivity (default 0s)",
                    },
                    // ... add more options for 'docker stats'
                ],
            },
            {
                command: "docker events",
                description: "Get real time events from the server",
                usage: "docker events [OPTIONS]",
                options: [
                    {
                        name: "--filter, -f",
                        description: "Filter events based on criteria provided",
                    },
                    {
                        name: "--format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--since",
                        description: "Show all events created since timestamp",
                    },
                    {
                        name: "--until",
                        description: "Stream events until this timestamp",
                    },
                    {
                        name: "--stop-signal",
                        description: "Signal to stop streaming (default: SIGTERM)",
                    },
                    // ... add more options for 'docker events'
                ],
            },
            {
                command: "docker pause",
                description: "Pause all processes within one or more containers",
                usage: "docker pause CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker unpause",
                description: "Unpause all processes within one or more containers",
                usage: "docker unpause CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker wait",
                description:
                    "Block until one or more containers stop, then print their exit codes",
                usage: "docker wait CONTAINER [CONTAINER...]",
                options: [],
            },
            {
                command: "docker top",
                description: "Display the running processes of a container",
                usage: "docker top CONTAINER [ps OPTIONS]",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "-e, --escaped",
                        description: "Keep special characters escaped when printing",
                    },
                    {
                        name: "-H, --no-header",
                        description: "Omit the header row",
                    },
                    {
                        name: "-o, --format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "-p, --pid",
                        description: "Show process PID numbers",
                    },
                    {
                        name: "-q, --quiet",
                        description: "Only display process IDs",
                    },
                    {
                        name: "-u, --user",
                        description: "Display the username/UID of the process owner",
                    },
                    // ... add more options for 'docker top'
                ],
            },

            {
                command: "docker system",
                description: "Manage Docker",
                usage: "docker system [OPTIONS] COMMAND [arg...]",
                options: [],
            },
            {
                command: "docker system df",
                description: "Show Docker disk usage",
                usage: "docker system df",
                options: [
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--no-prune",
                        description: "Do not delete unused data",
                    },
                ],
            },
            {
                command: "docker system prune",
                description: "Remove unused data",
                usage: "docker system prune [OPTIONS]",
                options: [
                    {
                        name: "--all, -a",
                        description:
                            "Remove all unused images, volumes, networks, and containers",
                    },
                    {
                        name: "--filter",
                        description: "Provide filter values (e.g. 'label=<key>=<value>')",
                    },
                    {
                        name: "--force, -f",
                        description: "Do not prompt for confirmation",
                    },
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--volumes",
                        description: "Prune volumes",
                    },
                ],
            },
            {
                command: "docker system events",
                description: "Get real time events from the server",
                usage: "docker system events [OPTIONS]",
                options: [
                    {
                        name: "--filter, -f",
                        description: "Filter events based on criteria provided",
                    },
                    {
                        name: "--format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--since",
                        description: "Show all events created since timestamp",
                    },
                    {
                        name: "--until",
                        description: "Stream events until this timestamp",
                    },
                    {
                        name: "--stop-signal",
                        description: "Signal to stop streaming (default: SIGTERM)",
                    },
                    // ... add more options for 'docker system events'
                ],
            },
            {
                command: "docker version",
                description: "Show the Docker version information",
                usage: "docker version",
                options: [
                    {
                        name: "--format",
                        description: "Format the output using the given Go template",
                    },
                    {
                        name: "--help",
                        description: "Print usage",
                    },
                    {
                        name: "--short",
                        description: "Print just the version number, in a short form",
                    },
                ],
            },
        ],
    },
];