import Link from "next/link";
import { Github, Linkedin, Slack, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t py-12 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80">
      <div className="container grid gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Mintlify</span>
            </Link>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Documentation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Getting Started</Link></li>
              <li><Link href="#">Components</Link></li>
              <li><Link href="#">API playground</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Customers</Link></li>
              <li><Link href="#">Enterprise</Link></li>
              <li><Link href="#">Request Preview</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Templates</Link></li>
              <li><Link href="#">Wall of Love</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Public Roadmap</Link></li>
              <li><Link href="#">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-blue-50 py-2 px-4 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">All systems normal</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Mintlify, Inc.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Slack className="h-5 w-5" />
              <span className="sr-only">Slack</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}