import { ExternalLink, SidebarIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted mt-8 py-8">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Hi! I'm Bram, and I created this tool to help people find the best storage deals.
                Feel free to reach out if you have any questions!
              </li>
              <li>
                Cheers, Bram
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="https://tweakers.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src="https://tweakers.net/favicon.ico"
                      alt="Tweakers"
                      className="w-4 h-4"
                    />
                  </a>
                  <a
                    href="https://news.ycombinator.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src="https://news.ycombinator.com/favicon.ico"
                      alt="Hacker News"
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Recent Updates</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Added power usage specs (March 25, 2024)</li>
              <li>Added noise level data (March 22, 2024)</li>
              <li>Added price history charts (March 20, 2024)</li>
              <li>Added performance scores (March 18, 2024)</li>
              <li>Added detailed product pages (March 15, 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}