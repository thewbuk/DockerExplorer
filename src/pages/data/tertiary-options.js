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

  'trust-key': [
    {
      value: 'trust-key-generate',
      label: ' docker trust key generate NAME',
      usage: 'Generate and load a signing key-pair',
    },
    {
      value: 'trust-key-load',
      label: 'Load a private key file for signing',
      usage: 'docker trust key load [OPTIONS] KEYFILE',
    },
  ],

  'trust-signer': [
    {
      value: 'trust-signer-add',
      label: 'Add a signer',
      usage: 'docker trust signer add OPTIONS NAME REPOSITORY [REPOSITORY...]',
    },
    {
      value: 'trust-signer-remove',
      label: 'Remove a signer',
      usage: 'docker trust signer remove [OPTIONS] NAME REPOSITORY [REPOSITORY...]',
    },
  ]
};
