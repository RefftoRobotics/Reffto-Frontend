export function TopBar() {
  return (
    <div className="w-full bg-purple-500 text-white text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-8">
        <div>Ready for future technology</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            Our Blog
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Sell On Reffto
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <span>Download App</span>
          </a>
        </div>
      </div>
    </div>
  );
}
