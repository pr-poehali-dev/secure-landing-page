import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Index = () => {
  const apps = [
    {
      name: "SecureKey",
      description: "Безопасный менеджер паролей без интернета",
      features: ["Офлайн работа", "Шифрование AES-256", "Без серверов"],
      status: "Доступно",
    },
    {
      name: "MagicNotes",
      description: "Приватные заметки с максимальной защитой",
      features: [
        "Локальное хранение",
        "Быстрый поиск",
        "Простота использования",
      ],
      status: "Доступно",
    },
  ];

  const values = [
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Приложения работают офлайн, без подключения к серверам. Ваши данные остаются только у вас.",
    },
    {
      icon: "Award",
      title: "Качество",
      description:
        "Допускается максимум 3 ошибки с последующим обязательным исправлением. Тестируем всё.",
    },
    {
      icon: "Palette",
      title: "Стиль",
      description:
        "Современный дизайн, продуманный UX и внимание к каждой детали интерфейса.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-montserrat">
              ZnaetAPPS
            </h1>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="outline" className="text-lg px-4 py-2">
                Безопасность
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Качество
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Стиль
              </Badge>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Разрабатываю максимально безопасные приложения, которые работают
              без интернета и не подключены к серверам. Ваши данные — только
              ваши данные.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Download" className="mr-2" />
              Скачать приложения
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Github" className="mr-2" />
              Посмотреть код
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
            Принципы разработки
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    <Icon
                      name={value.icon}
                      size={32}
                      className="text-purple-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-montserrat">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-montserrat">
            Мои приложения
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Каждое приложение создано с учётом максимальной безопасности и
            приватности. Никаких серверов, никаких утечек данных.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-montserrat">
                      {app.name}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      {app.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-600"
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Icon name="ExternalLink" className="mr-2" />
                    Скачать в RuStore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            Почему офлайн — это безопасно?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon
                  name="ShieldX"
                  className="text-red-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold mb-1">Серверы = уязвимости</h3>
                  <p className="text-gray-600 text-sm">
                    Большинство утечек происходит через компрометацию серверов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  name="WifiOff"
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold mb-1">
                    Нет интернета = нет атак
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Невозможно украсть данные, которые не передаются по сети
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon
                  name="Lock"
                  className="text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold mb-1">Локальное шифрование</h3>
                  <p className="text-gray-600 text-sm">
                    Данные шифруются на вашем устройстве и никуда не уходят
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  name="User"
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold mb-1">Полный контроль</h3>
                  <p className="text-gray-600 text-sm">
                    Только вы имеете доступ к своим данным
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                ZnaetAPPS
              </h3>
              <p className="text-gray-300">
                Разработка безопасных приложений без компромиссов в области
                приватности.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Приложения</h4>
              <ul className="space-y-2 text-gray-300">
                <li>SecureKey</li>
                <li>MagicNotes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a
                  href="https://www.rustore.ru/catalog/developer/bc81cb89"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Icon name="Store" size={16} />
                  RuStore
                </a>
                <div className="text-gray-300 text-sm">
                  *Баг — программная ошибка, у ZA допускается до 3 ошибок с
                  последующим исправлением
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZnaetAPPS. Безопасность прежде всего.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
