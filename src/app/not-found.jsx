import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>Not found – 404!</h1>
      <p>La página que buscas no se encuentra.</p>
      <Link href="/">Volver a la página principal</Link>
    </div>
  )
}