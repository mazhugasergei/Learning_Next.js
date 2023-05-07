import Link from "next/link"

export default () => {
  return (
    <main>
      <p>This is a Home page!</p>
      <Link href="/nested">Nested Page</Link>
    </main>
  )
}