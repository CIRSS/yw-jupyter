# Changelog

## v0.1.0 - Initial Release

- Initial release of `yw-jupyter` extension.
- Provided installation instructions for both PyPI and source installation.
- Added "YesWorkflow" tab to JupyterLab sidebar.
- Implemented graph visualization of notebook cells using [`yw-core`](https://github.com/CIRSS/yw-core).
- Notebook cells and graph nodes are in sync:
  - Selecting a cell highlights the corresponding node in the graph and vice versa.
  - Editing cells updates the contents in the node in real-time and vice versa.
