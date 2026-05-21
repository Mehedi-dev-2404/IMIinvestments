"use client";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A1A1A",
        borderTop: "2px solid #6B1A1A",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">

          {/* Left: logo + tagline */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span
              className="font-bold tracking-tight leading-none"
              style={{ color: "#ffffff", fontSize: "1.25rem", height: "32px", lineHeight: "32px" }}
            >
              IMIinvestments
            </span>
            <span
              className="text-xs tracking-wide"
              style={{ color: "#9ca3af" }}
            >
              Social Housing Partner Programme
            </span>
          </div>

          {/* Centre: nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#d1d5db" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: copyright */}
          <p
            className="text-xs text-center md:text-right"
            style={{ color: "#6b7280" }}
          >
            &copy; 2026 IMIinvestments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
