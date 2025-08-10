"use client";

import { Button } from "@acme/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { Header } from "~/components/Header";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, alt, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} alt={alt} className="block dark:hidden" />
      <Image {...rest} src={srcDark} alt={alt} className="hidden dark:block" />
    </>
  );
};

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_20px] place-items-center gap-16">
      <Header />
      <main className="row-start-2 flex flex-col items-center gap-8 p-8 sm:items-start sm:p-20">
        <ThemeImage
          className="dark:invert"
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Explore the available components and features in the @acme/ui library
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/validation-demo" className="group">
                <Card className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-lg">Form Validation</CardTitle>
                    <CardDescription>
                      React Hook Form + Zod validation with accessible form components
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <div className="group opacity-50">
                <Card className="cursor-not-allowed">
                  <CardHeader>
                    <CardTitle className="text-lg">Typography System</CardTitle>
                    <CardDescription>
                      Semantic typography components with multiple variants (Coming soon)
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="group opacity-50">
                <Card className="cursor-not-allowed">
                  <CardHeader>
                    <CardTitle className="text-lg">USWDS Components</CardTitle>
                    <CardDescription>
                      Full suite of U.S. Web Design System components (Coming soon)
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="group opacity-50">
                <Card className="cursor-not-allowed">
                  <CardHeader>
                    <CardTitle className="text-lg">Accessibility Testing</CardTitle>
                    <CardDescription>
                      Interactive a11y testing playground (Coming soon)
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm transition-colors hover:bg-gray-800 sm:h-12 sm:px-5 sm:text-base dark:hover:bg-gray-300"
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turborepo.com/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/10 px-4 text-sm transition-colors hover:border-transparent hover:bg-gray-100 sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/20 dark:hover:bg-gray-900"
          >
            Read our docs
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/10 px-4 text-sm transition-colors hover:border-transparent hover:bg-gray-100 sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/20 dark:hover:bg-gray-900"
            onClick={() => alert("Hello from your web app!")}
          >
            Open alert
          </Button>

          <Link href="/validation-demo">
            <Button
              variant="default"
              className="flex h-10 items-center justify-center rounded-full px-4 text-sm transition-colors sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            >
              Form Validation Demo
            </Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://turborepo.com?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  );
}
