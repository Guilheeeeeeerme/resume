import type { ContactItem } from '../types/resume'

type Props = {
  name: string
  headline: string
  contact: ContactItem[]
}

export function Header({ name, headline, contact }: Props) {
  return (
    <header className="resume-header">
      <div className="identity">
        <h1>{name}</h1>
        <p className="headline">{headline}</p>
      </div>
      <ul className="contact">
        {contact.map((item) => {
          const text = item.printLabel ?? item.label
          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          )
        })}
      </ul>
    </header>
  )
}
