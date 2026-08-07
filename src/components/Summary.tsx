type Props = {
  summary: string
}

export function Summary({ summary }: Props) {
  return (
    <section className="resume-section" aria-labelledby="summary-heading">
      <h2 id="summary-heading" className="section-title">
        Summary
      </h2>
      <p className="summary">{summary}</p>
    </section>
  )
}
