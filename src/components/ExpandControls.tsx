type Props = {
  allExpanded: boolean
  onExpandAll: () => void
  onCollapseAll: () => void
}

export function ExpandControls({
  allExpanded,
  onExpandAll,
  onCollapseAll,
}: Props) {
  return (
    <div className="expand-controls" role="group" aria-label="Experience details">
      {allExpanded ? (
        <button type="button" className="toolbar-btn" onClick={onCollapseAll}>
          Collapse all
        </button>
      ) : (
        <button type="button" className="toolbar-btn" onClick={onExpandAll}>
          Expand all
        </button>
      )}
    </div>
  )
}
