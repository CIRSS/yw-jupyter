import { ReactWidget } from '@jupyterlab/ui-components';

import CellNode from './cell-node';

import React from 'react';

import {
  Node,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

interface CellNodeData extends Record<string, unknown> {
  exec_count: number;
  header: string;
  code_block: string;
  status: 'not-execute' | 'executing' | 'executed';
}

export type CellNodeProp = Node<CellNodeData>;

const nodeTypes = {
  cell: CellNode
};

interface AppProps {
  defaultNodes: CellNodeProp[];
}

function App({ defaultNodes }: AppProps): JSX.Element {
  console.log('defaultNodes: ', defaultNodes);
  return (
    <ReactFlowProvider>
      <ReactFlow defaultNodes={defaultNodes} nodeTypes={nodeTypes} fitView>
        <MiniMap pannable zoomable />
        <Controls />
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
}

/**
 * A YWWidget that visualizes YesWorkflow data in a ReactFlow graph.
 */
export class YWWidget extends ReactWidget {
  readonly notebookID: string;
  defaultNodes: CellNodeProp[];

  constructor(notebookID: string) {
    super();
    this.addClass('jp-react-widget');
    this.notebookID = notebookID;

    // initialize default nodes
    this.defaultNodes = [
      {
        id: '1',
        type: 'cell',
        position: { x: 200, y: 200 },
        data: {
          exec_count: 0,
          header: 'Cell 1',
          code_block: 'print("Hello, World!")',
          status: 'not-execute'
        }
      }
    ];
  }

  render(): JSX.Element {
    return <App defaultNodes={this.defaultNodes} />;
  }
}
