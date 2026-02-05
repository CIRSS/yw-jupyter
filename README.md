# yw-jupyter

A JupyterLab extension build upon ReactFlow for visualizing notebook cells using YesWorkflow.

* The extension adds a "YesWorkflow" tab to the JupyterLab sidebar and cell toolbar.
* Clicking the "YesWorkflow" tab opens the YesWorkflow panel.
* The panel displays a graph representation of the current notebook's cells and their relationships based on [`yw-core`](https://github.com/CIRSS/yw-core).
* Notebook cells and graph nodes are in sync:
  * Selecting a cell highlights the corresponding node in the graph and vice versa.
  * Editing cells updates the contents in the node in real-time and vice versa.

![demo-v0.1](./doc/static/yw-jupyter-demo-v0.1.gif)



## Install

### PyPI

```bash
pip install yw-jupyter
```

### Install from source

- Requirements:
  - `JupyterLab` >= 4.0.0
  - `yw-core` >= 0.1.0, < 1.0.0

```bash
git clone https://github.com/CIRSS/yw-jupyter.git yw-jupyter
cd yw-jupyter
jlpm install
jlpm build:lib
jlpm build:prod
jupyter labextension develop . --overwrite 
```

> [!WARNING]
> Avoid installing from source unless you need the latest features or development mode.

## Known Issues and Future Work
