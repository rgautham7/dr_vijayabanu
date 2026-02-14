import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="mb-4">This is the about page of our Next.js application.</p>
      <Link 
        href="/" 
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Back to Home
      </Link>
    </main>
  )
}