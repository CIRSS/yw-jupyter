export interface YWEdge {
  id: string;
  source: string;
  target: string;
};

// TODO: compute the edges using yw-core
/**
 * Compute the edges for the YesWorkflow visualization.
 */
export function computeEdges(input_cells: string[]): YWEdge[]{
  return [{id: 'e0-1', source: '0', target: '1'}];
}
