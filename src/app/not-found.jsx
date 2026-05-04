import Link from "next/link"


const NotFoundPage = () => {
  return (
    <div>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      
      <h2 className="mt-4 text-2xl font-semibold text-gray-600">
        Page Not Found
      </h2>
      
      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default NotFoundPage
