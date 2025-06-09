import { ThemeSwitcher } from '@repo/ui/components/theme-switcher'
import { Button } from '@repo/ui/components/ui/button'

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-3 py-4 xl:px-6 xl:py-12">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <ThemeSwitcher />
      </header>

      <Button>Click me</Button>
    </section>
  )
}
