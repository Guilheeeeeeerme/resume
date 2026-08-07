export function PrintButton() {
  return (
    <button
      type="button"
      className="toolbar-btn toolbar-btn-primary"
      onClick={() => window.print()}
      title="Opens the print dialog. Layout is optimized for one page (A4 or US Letter)."
    >
      Print résumé
    </button>
  )
}
