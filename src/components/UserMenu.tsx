import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export function UserMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center gap-6">
      <a
        href="#"
        className="flex items-center gap-2 text-white hover:underline"
      >
        <ShoppingCart className="w-5 h-5" />
        Cart
      </a>
      <div className="relative">
        <button
          className="flex items-center gap-2 text-white hover:underline"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <User className="w-5 h-5" />
          Sign In
        </button>

        {showMenu && (
          <div
            className="absolute top-full right-0 w-64 bg-white shadow-lg rounded mt-1 z-50"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="p-4 space-y-4">
                <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:bg-purple-300 hover:rounded"
                >
                <User className="w-4 h-4" />
                Your Account
                </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:bg-purple-300 hover:rounded"
              >
                <ShoppingCart className="w-4 h-4" />
                Your Orders
              </a>
              <div className="text-sm text-gray-500">If you are a new user</div>
              <a
                href="#"
                className="block text-center text-purple-500 hover:underline"
              >
                Register
              </a>
              <button className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                LOGIN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
