import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface OrgFooterProps {
  /** Document title and publication status shown in the bottom metadata strip */
  label: string
  /** Target URL for back navigation; defaults to the FOSS Club homepage ("/") */
  backHref?: string
  /** Label for the return action; defaults to "Back to home" */
  backLabel?: string
}

/**
 * Registry of all official organisation pages.
 * When publishing new governance documents or formal pages,
 * add their route here so all subpage footers stay synchronized.
 */
const orgSublinks = [
  { name: "Code of Conduct", href: "/coc" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Resources", href: "/resources" },
  { name: "Branding", href: "/branding" },
]

/**
 * Global footer for organisation subpages.
 * Provides cross-document navigation, links to the official GitHub
 * organisation, and document provenance info across light and dark themes.
 */
export default function OrgFooter({
  label,
  backHref = "/",
  backLabel = "Back to home",
}: OrgFooterProps) {
  return (
    <footer className="mt-12 sm:mt-16 py-8 sm:py-10 relative z-10 px-4 sm:px-6 lg:px-8 footer-gradient border-t border-border/80">
      <div className="container mx-auto max-w-5xl">
        {/* cross-navigation: facilitates discovery across all club documents */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-border/50 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
            <span className="font-semibold text-foreground/80">Organisation:</span>
            {orgSublinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="https://github.com/thefossclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>GitHub Org</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Document provenance and return link */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <span>{label}</span>
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 hover:text-green-500 dark:hover:text-green-400 transition-colors footer-link"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{backLabel}</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
