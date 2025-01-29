

export default function Footer() {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <div className="w-10 h-10 relative">
            <img
              src="/logo2.png"
              alt="Devs India Logo"
              className="object-contain"
            />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} devsindia.in. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

