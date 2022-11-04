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
      nb: 'Use -f to specify name and path of one or more Compose files \n docker compose -f docker-compose.yml -f docker-compose.admin.yml run backup_db'
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
      label: 'Remove one or more configs',
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
      label: 'Display detailed information on one or more containers',
      usage: 'docker container inspect [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-kill',
      label: 'Kill one or more running containers',
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
      label: 'Pause all processes within one or more containers',
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
      label: 'Restart one or more containers',
      usage: 'docker container restart [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-rm',
      label: 'Remove one or more containers',
      usage: 'docker container rm [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-run',
      label: 'Run a command in a new container',
      usage: 'docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]',
    },
    {
      value: 'container-start',
      label: 'Start one or more stopped containers',
      usage: 'docker container start [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-stats',
      label: 'Display a live stream of container(s) resource usage statistics',
      usage: 'docker container stats [OPTIONS] [CONTAINER...]',
    },
    {
      value: 'container-stop',
      label: 'Stop one or more running containers',
      usage: 'docker container stop [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-top',
      label: 'Display the running processes of a container',
      usage: 'docker container top CONTAINER [ps OPTIONS]',
    },
    {
      value: 'container-unpause',
      label: 'Unpause all processes within one or more containers',
      usage: 'docker container unpause CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-update',
      label: 'Update configuration of one or more containers',
      usage: 'docker container update [OPTIONS] CONTAINER [CONTAINER...]',
    },
    {
      value: 'container-wait',
      label: 'Block until one or more containers stop, then print their exit codes',
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
      label: 'Display information on one or more contexts',
      usage: 'docker context inspect [OPTIONS] [CONTEXT] [CONTEXT...]',
    },
    {
      value: 'context-ls',
      label: 'List contexts',
      usage: 'docker context ls [OPTIONS]',
    },
    {
      value: 'context-rm',
      label: 'Remove one or more contexts',
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

  add: [
    {
      value: 'new-changes',
      label: 'new changes',
      usage: 'git add <file.ext>',
      nb:
        'To add all the files in the current directory, use "git add ."\n\nTo add a directory use "git add <directory>"'
    },
    {
      value: 'add-new-branch',
      label: 'a new branch'
    },
    {
      value: 'add-repo',
      label: 'new remote repo',
      usage: 'git remote add <shortname> <url>'
    },
    {
      value: 'add-alias',
      label: 'alias',
      usage: 'git config --global alias.<alias> <command>',
      nb:
        'e.g. git config --global alias.st status. Typing git st in the terminal now does the same thing as git status'
    },
    {
      value: 'add-annotated-tag',
      label: 'annotated tag',
      usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push --tags'
    },
    {
      value: 'add-annotated-tag-for-old-commit',
      label: 'annotated tag for old commit',
      usage: "git tag -a v1.2 -m 'version 1.2' <commit-hash>\n\ngit push --tags"
    }
  ],

  push: [
    {
      value: 'new-remote-branch',
      label: 'non-existent remote branch',
      usage: 'git push -u origin <branchname>'
    }
  ],

  rename: [
    {
      value: 'branch',
      label: 'branch'
    },
    {
      value: 'file',
      label: 'file',
      usage: 'git mv file_from file_to'
    },
    {
      value: 'remoteUrl',
      label: 'remote',
      usage: 'git remote rename <oldname> <newname>'
    }
  ],

  merge: [
    {
      value: 'branch',
      label: 'another branch to current branch',
      usage: 'git merge <branch-name>'
    },
    {
      value: 'single-file',
      label: 'merge a single file from one branch to another.',
      usage: 'git checkout <branch name> <path to file> --patch'
    }
  ],

  squash: [
    {
      value: 'pr',
      label: 'commits in pull request into single commit',
      usage: 'git rebase -i <branch name>',
      nb:
        'Make sure that latest commits are fetched from upstream.\n\nFor example (assuming you have a remote named upstream):\n\ngit fetch upstream\ngit rebase -i upstream/master\n\nChange "pick" to "squash" for the commits you wish to squash and save.\n\ngit push origin <topic branch> --force-with-lease'
    },
    {
      value: 'commits',
      label: 'last n number of commit into one',
      usage:
        'git reset --soft HEAD~N\ngit add .\ngit commit -m <message>',
      nb:
        "Replace N with the number of commits you want to squash and <message> with your commit message. You can use the command 'git log' to view your commit history"
    }
  ],

  debug: [
    {
      value: 'bisect',
      label: 'binary search',
      usage:
        'git bisect start\ngit bisect bad                 # Current version is bad\ngit bisect good v2.13          # v6.12 is known to be good',
      nb:
        'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar to the following:\nBisecting: 675 revisions left to test after this (roughly 10 steps)\nYou should now compile the checked-out version and test it. If that version works correctly, type\n\ngit bisect good\n\nIf that version is broken, type\n\ngit bisect bad\n\nThen git bisect will respond with something like\n\nBisecting: 337 revisions left to test after this (roughly 9 steps)\n\nKeep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\nEventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\nAfter a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n\ngit bisect reset'
    },
    {
      value: 'blame',
      label: 'who modified each lines',
      usage: 'git blame -L <number-line-start>,<number-line-end> <filename>',
      nb: 'The -L option will restrict the output to the requested line range\n'
    },
    {
      value: 'grep',
      label: 'search in files',
      usage: 'git grep -n <your_text_or_expression>',
      nb:
        'Print lines matching a pattern.\nOption -n to display the numbering of lines in which there are matches'
    }
  ],

  recover: [
    {
      value: 'dropped-commit',
      label: 'show hashes dangling commits after hard reset to previous commit',
      usage: 'git reflog',
      nb:
        'alternative: git log -g. For recovery use\ngit checkout -b <recovery> <hash>'
    },
    {
      value: 'deleted-branch',
      label: 'show hashes removed branch or other git objects',
      usage: 'git fsck --full',
      nb:
        'show hashes all dangling git objects. For recovery use\ngit checkout -b <recovery> <hash>'
    }
  ],

  rebase: [
    {
      value: 'origin-branch',
      label: 'an origin branch into my working branch',
      usage: 'git pull --rebase origin <branch name>',
      nb:
        'Rebase an origin branch into working branch. Replace <branch name> with the branch you are pulling'
    },
    {
      value: 'local-branch',
      label: 'a local branch into my working branch',
      usage: 'git rebase <branch name>',
      nb:
        'Rebase another local branch into working branch. Replace <branch name> with the branch you are pulling'
    },
    {
      value: 'skip',
      label: 'and skip a commit',
      usage: 'git rebase --skip',
      nb:
        'During rebase, git might not be able to automatically apply commits due to conflicts. You can use this command to discard of your own changes in the current commit and apply the changes from an incoming branch'
    },
    {
      value: 'continue',
      label: 'and continue after resolving conflicts',
      usage: 'git rebase --continue',
      nb:
        'During rebase, git might not be able to automatically apply commits due to conflicts. You can resolve this conflicts manually and use this command to continue your rebase operation'
    }
  ],

  synchronize: [
    {
      value: 'branch-from-fork',
      label: 'a branch in a fork',
      usage:
        'git fetch <remote-repo> \n\ngit checkout <branch-name> \n\ngit merge <remote-repo>/<branch-name>',
      nb: 'You need to add a remote repo for your fork first.'
    }
  ],
  stash: [
    {
      value: 'save-stash',
      label: '(un)tracked files',
      usage: 'git stash',
      nb: 'To stash with a customized message use git stash save <message>\n\nTo stash untracked files git stash save -u'
    },
    {
      value: 'list-stash',
      label: 'view list of stashed changes',
      usage: 'git stash list'
    },
    {
      value: 'apply-stash',
      label: 'apply'
    },
    {
      value: 'show',
      label: 'view the contents of a stash',
      usage: 'git stash show -p <stash id>',
      nb: 'You can leave out the stash id if you want the contents of the latest stash'
    },
    {
      value: 'delete-stash',
      label: 'delete'
    },
    {
      value: 'create-branch',
      label: 'create a new branch and apply stash',
      usage: 'git stash branch <branch name> <stash id>'
    }
  ],

  cherrypick: [
    {
      value: 'origin-branch',
      label: 'an commit from origin branch into my working branch',
      usage: 'git cherry-pick <commit-hash> <commit-hash>',
      nb:
        'Applying one or more commit from one branch into your working branch. '
    },
  ],
};
