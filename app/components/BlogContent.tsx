import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const font = { fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }

type BlogContentProps = {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none mb-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2
              className="mt-12 mb-6 text-2xl font-bold text-black md:text-3xl"
              style={font}
            >
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="mb-6 text-lg leading-relaxed text-gray-700" style={font}>
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className="my-8 border-l-4 border-black pl-6 text-xl italic text-gray-700"
              style={font}
            >
              {children}
            </blockquote>
          ),
          ol: ({ children }) => (
            <ol
              className="list-decimal list-inside space-y-3 mb-6 text-lg text-gray-700 ml-4"
              style={font}
            >
              {children}
            </ol>
          ),
          ul: ({ children }) => (
            <ul
              className="list-disc list-inside space-y-3 mb-6 text-lg text-gray-700 ml-4"
              style={font}
            >
              {children}
            </ul>
          ),
          li: ({ children }) => <li className="mb-2">{children}</li>,
          img: ({ src, alt }) =>
            src ? (
              <div className="my-12 overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={alt || ''}
                  className="max-h-[420px] w-full object-cover object-center"
                />
              </div>
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
