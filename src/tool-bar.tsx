import React from 'react';
import { AlignVerticalJustifyStart } from 'lucide-react';
import { Button } from './components/ui/button';

export function ToolBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button
        variant="outline"
        size="sm"
        onClick={() => console.log('ToolBar button clicked')}
      >
        <AlignVerticalJustifyStart />
        Layout
      </Button>
    </div>
  );
}
