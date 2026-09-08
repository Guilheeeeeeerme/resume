type Props = {
  summary: string
  mostAmazing: string
}

export function Summary({ summary, mostAmazing }: Props) {
  return (
    <section className="resume-section" aria-labelledby="summary-heading">
      <h2 id="summary-heading" className="section-title">
        Summary
      </h2>
      <p className="summary">{summary}</p>
      <blockquote className="most-amazing">
        <p className="most-amazing-label">Most amazing platform</p>
        <p className="most-amazing-body">{mostAmazing}</p>
      </blockquote>
    </section>
  )
}
