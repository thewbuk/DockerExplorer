export const tertiaryOptions = {
  'buildx-imagetools': [
    {
      value: 'imagetools-create',
      label: 'Create a new image based on source images',
      usage: 'docker buildx imagetools create [OPTIONS] [SOURCE] [SOURCE...]',
    },
    {
      value: 'imagetools-inspect',
      label: 'Show details of an image in the registry',
      usage: 'docker buildx imagetools inspect [OPTIONS] NAME',
    },

  ],
  branch: [
    {
      value: 'in',
      label: 'while working in the branch',
      usage: 'git branch -m <new name>'
    },
    {
      value: 'outside',
      label: 'from outside the branch',
      usage: 'git branch -m <old name> <new name>'
    }
  ],
  'add-new-branch': [
    {
      value: 'no-checkout',
      label: 'but remain in the current branch I am working from',
      usage: 'git branch <new name>'
    },
    {
      value: 'checkout',
      label: 'and switch to the new branch',
      usage: 'git checkout -b <new name>'
    },
    {
      value: 'checkout-remote',
      label: 'from another branch',
      usage: 'git checkout -b <new name> <another branch>'
    }
  ],
  'apply-stash': [
    {
      value: 'latest',
      label: 'latest stash',
      usage: 'git stash apply'
    },
    {
      value: 'specific',
      label: 'a specific stash',
      usage: 'git stash apply <stash id>',
      nb: 'The stash id can be gotten when you run git stash list. It\'s usually in this format: stash@{index} e.g. stash@{0}'
    },
    {
      value: 'pop',
      label: 'and delete stash',
      usage: 'git stash pop <stash id>',
      nb: 'Stash id optional. Add it if you want to apply and delete a specific stash otherwise leave to pop the latest stash'
    }
  ],
  'delete-stash': [
    {
      value: 'all',
      label: 'all stashed changes',
      usage: 'git stash clear'
    },
    {
      value: 'specific',
      label: 'specific stash',
      usage: 'git stash drop <stash id>'
    },
  ],
  'delete-multiple-branches': [
    {
      value: 'name',
      label: 'by name',
      usage: 'git branch -D <branch name> <branch name> <branch name>'
    },
    {
      value: 'pattern',
      label: 'by pattern',
      usage: 'git branch | grep <regex pattern> | xargs git branch -D',
      nb: 'e.g. git branch | grep "-" | xargs git branch -D will delete all branches that have \'-\' in their names or git branch | grep -v "master\\|staging" | xargs git branch -D will delete all branches except staging and master.\n\nNB: Always put your regex pattern in quotes'
    }
  ]
};
