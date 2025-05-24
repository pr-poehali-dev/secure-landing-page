import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/files/c6540be9-e38b-484f-ae4d-7ffa82a4ec3b.png"
              alt="ZnaetAPPS Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
              ZnaetAPPS
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#apps"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Приложения
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Сервисы
            </a>
            <a
              href="#security"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Безопасность
            </a>
          </nav>

          <Button variant="outline" size="sm">
            <Icon name="Github" className="mr-2" size={16} />
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
