import React, { memo } from 'react';

import { NodeProps } from '@xyflow/react';

import { BaseNode } from './components/base-node';
import {
  NodeHeader,
  NodeHeaderTitle,
  NodeHeaderActions,
  NodeHeaderDiveInAction,
  NodeHeaderRunAction,
  NodeHeaderDeleteAction
} from './components/node-header';
import CodeEditor from '@uiw/react-textarea-code-editor';

const CellNode = memo(({ selected }: NodeProps) => {
  return (
    <BaseNode selected={selected} className="px-3 py-2">
      <NodeHeader className="-mx-3 -mt-2 border-b">
        <NodeHeaderTitle>Cell [ ]</NodeHeaderTitle>
        <NodeHeaderActions>
          <NodeHeaderDiveInAction />
          <NodeHeaderRunAction />
          <NodeHeaderDeleteAction />
        </NodeHeaderActions>
      </NodeHeader>
      <div className="mt-2">
        <CodeEditor
          value="import sys"
          language="python"
          data-color-mode="light"
          style={{
            backgroundColor: '#f5f5f5',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
          }}
        />
      </div>
    </BaseNode>
  );
});

export default CellNode;
