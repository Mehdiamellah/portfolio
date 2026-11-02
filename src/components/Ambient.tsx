/**
 * Paper atmosphere: warm grain over a faint column grid.
 * Nothing moves, nothing glows — it should feel printed, not generated.
 */
export function Background() {
  return <div className="grain columns-guides" aria-hidden="true" style={{ pointerEvents: 'none' }} />
}
