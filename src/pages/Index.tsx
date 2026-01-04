import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'schedule', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Методика преподавания', level: 95 },
    { name: 'Литературоведение', level: 90 },
    { name: 'Подготовка к ЕГЭ/ОГЭ', level: 98 },
    { name: 'Работа с детьми', level: 93 },
    { name: 'Современные технологии', level: 85 },
    { name: 'Индивидуальный подход', level: 97 },
  ];

  const portfolio = [
    {
      title: 'Победители олимпиад',
      description: '15 учеников стали призёрами всероссийских олимпиад по литературе',
      icon: 'Trophy',
      color: 'bg-yellow-500',
    },
    {
      title: 'Высокие баллы ЕГЭ',
      description: 'Средний балл моих учеников - 92, 8 учеников получили 100 баллов',
      icon: 'Award',
      color: 'bg-purple-500',
    },
    {
      title: 'Публикации учителя',
      description: 'Мои авторские стихи публикуются на литературных порталах',
      icon: 'BookOpen',
      color: 'bg-blue-500',
      links: [
        { url: 'https://www.chitalnya.ru/users/chernovai1/', label: 'Читальня' },
        { url: 'https://stihi.ru/avtor/chernovai1', label: 'Стихи.ру' },
      ],
    },
    {
      title: 'Авторские методики',
      description: 'Разработаны уникальные программы для углубленного изучения',
      icon: 'Lightbulb',
      color: 'bg-orange-500',
    },
  ];

  const schedule = [
    { day: 'Понедельник', time: '15:00 - 18:00', available: true },
    { day: 'Вторник', time: '14:00 - 17:00', available: true },
    { day: 'Среда', time: '15:00 - 18:00', available: false },
    { day: 'Четверг', time: '14:00 - 19:00', available: true },
    { day: 'Пятница', time: '15:00 - 17:00', available: true },
    { day: 'Суббота', time: '10:00 - 14:00', available: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо за обращение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Учитель русского языка</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'skills', label: 'Навыки' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'schedule', label: 'Расписание' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 animate-fade-in"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="gradient-bg text-white text-lg px-6 py-2">
                15+ лет опыта
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Чернова Ирина <span className="gradient-text">Игоревна</span>
              </h1>
              <p className="text-xl text-gray-600">
                Учитель русского языка и литературы высшей категории. Помогаю ученикам открыть красоту
                слова и достичь высоких результатов.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 transition-opacity"
                  onClick={() => scrollToSection('contact')}
                >
                  Связаться со мной
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('schedule')}
                >
                  Расписание
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-30"></div>
              <img
                src="https://cdn.poehali.dev/projects/519ab65c-9338-4b1e-9d43-71a6c5b472b0/files/3b3cd897-4d84-47c6-a78f-8a18a856585a.jpg"
                alt="Чернова Ирина Игоревна"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-0 shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-4xl gradient-text">Обо мне</CardTitle>
              <CardDescription className="text-lg">
                Путь длиной в мою жизнь
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p>
                Я с отличием окончила МБОУ СОШ №2 и еще в 5 классе знала, что стану учителем русского языка и литературы и вернусь в родные стены. Так, моя мечта привела меня сначала в столицу нашей республики Башкортостан, где началось моё среднее профессиональное образование в колледже БГПУ им. М. Акмуллы по специальности "Учитель начальных классов".
              </p>
              <p>
                Изучая дисциплины своего профиля, мною попутно было получено образование "Няни-гувернантки" и "Вожатого", а также "Преподавателя по ментальной арифметике". Но на достигнутых целях я не привыкла останавливаться и поэтому продолжаю свое обучение по сей день, но уже в Башкирском государственном педагогическом университете им. М. Акмуллы на кафедре филологического образования и межкультурных коммуникаций по специальности "Учитель русского языка и литературы".
              </p>
              <p>
                Я считаю, что каждый ребёнок уникален, и моя задача – найти подход, который раскроет его потенциал. Использую современные методики обучения, интерактивные технологии и всегда стремлюсь сделать уроки увлекательными и запоминающимися.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <Icon name="GraduationCap" size={16} className="mr-2" />
                  Учитель начальных классов
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <Icon name="BookHeart" size={16} className="mr-2" />
                  Студентка филфака БГПУ
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <Icon name="Users" size={16} className="mr-2" />
                  Вожатая
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">
                  <Icon name="Brain" size={16} className="mr-2" />
                  Ментальная арифметика
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Мои навыки</h2>
            <p className="text-xl text-gray-600">Компетенции, которые помогают достигать результатов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Progress value={skill.level} className="h-3" />
                    <p className="text-right text-sm text-gray-600 font-semibold">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Достижения моих учеников – моя гордость</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card
                key={item.title}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                  {item.links && (
                    <div className="mt-4 space-y-2">
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <Icon name="ExternalLink" size={16} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Расписание консультаций</h2>
            <p className="text-xl text-gray-600">Выберите удобное время для занятий</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {schedule.map((slot, index) => (
              <Card
                key={slot.day}
                className={`border-2 transition-all duration-300 hover:scale-105 animate-fade-in ${
                  slot.available
                    ? 'border-green-200 bg-green-50 hover:border-green-400'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{slot.day}</CardTitle>
                    {slot.available ? (
                      <Badge className="bg-green-500">Доступно</Badge>
                    ) : (
                      <Badge variant="secondary">Занято</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-lg">
                    <Icon name="Clock" size={20} />
                    <span>{slot.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь со мной удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь со мной</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Телефон</p>
                    <a href="tel:+79177557224" className="text-lg font-semibold hover:text-primary">
                      +7 (917) 755-72-24
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:chernovai424@gmail.com"
                      className="text-lg font-semibold hover:text-primary"
                    >
                      chernovai424@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Адрес</p>
                    <p className="text-lg font-semibold">Москва, Центральный район</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите мне</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 gradient-bg hover:opacity-90 text-lg">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Чернова Ирина Игоревна</h3>
          <p className="text-gray-400 mb-6">
            Учитель русского языка и литературы высшей категории
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="tel:+79177557224"
              className="hover:text-primary transition-colors"
              aria-label="Позвонить"
            >
              <Icon name="Phone" size={24} />
            </a>
            <a
              href="mailto:chernovai424@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Написать email"
            >
              <Icon name="Mail" size={24} />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;