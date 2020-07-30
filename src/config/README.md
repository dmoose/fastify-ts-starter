# Config Folder

Configuration is handled by mozilla's [convict](https://www.npmjs.com/package/convict) package

The index file includes additional files based on the environment. Those json files are in this directory.

Convict uses environment and command line arguments to override the defaults provided by the schema. It also validates the final configuration via the schema.
