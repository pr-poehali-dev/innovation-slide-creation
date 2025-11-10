import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Technologies = () => {
  const techCategories = [
    {
      title: "Машинное обучение",
      icon: "Brain",
      color: "from-primary to-secondary",
      level: "Основа ИИ",
      description: "Алгоритмы, которые учатся на данных и улучшают свою работу с опытом. ML позволяет компьютерам распознавать паттерны, делать прогнозы и принимать решения.",
      examples: ["Рекомендации Netflix", "Распознавание спама", "Прогноз погоды"]
    },
    {
      title: "Нейронные сети",
      icon: "Network",
      color: "from-secondary to-accent",
      level: "Продвинутый",
      description: "Системы, вдохновлённые работой человеческого мозга. Миллионы искусственных нейронов обрабатывают информацию слой за слоем, выявляя сложные взаимосвязи.",
      examples: ["GPT-4 и ChatGPT", "Распознавание лиц", "Генерация изображений"]
    },
    {
      title: "Компьютерное зрение",
      icon: "Eye",
      color: "from-accent to-primary",
      level: "Специализация",
      description: "Технология, позволяющая компьютерам 'видеть' и понимать визуальную информацию. ИИ анализирует изображения и видео, находя объекты, лица, текст.",
      examples: ["Автопилот Tesla", "FaceID в iPhone", "Медицинская диагностика"]
    },
    {
      title: "Обработка языка (NLP)",
      icon: "MessageSquare",
      color: "from-primary via-secondary to-accent",
      level: "Специализация",
      description: "ИИ понимает и генерирует человеческий язык. Системы могут переводить, отвечать на вопросы, анализировать тональность и создавать тексты.",
      examples: ["Google Переводчик", "Голосовые ассистенты", "Автокоррекция текста"]
    },
    {
      title: "Генеративный ИИ",
      icon: "Sparkles",
      color: "from-secondary to-primary",
      level: "Инновация",
      description: "Новейшие системы, создающие контент: тексты, изображения, музыку, код. Они не просто анализируют, а творят что-то новое на основе обучения.",
      examples: ["DALL-E, Midjourney", "GitHub Copilot", "Музыка от AIVA"]
    },
    {
      title: "Reinforcement Learning",
      icon: "Trophy",
      color: "from-accent to-secondary",
      level: "Исследования",
      description: "ИИ учится методом проб и ошибок, получая награды за правильные действия. Эта технология позволила обыграть чемпионов в шахматы и Go.",
      examples: ["AlphaGo от DeepMind", "Роботы Boston Dynamics", "Игровые боты"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI Tech
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link to="/future" className="text-foreground/80 hover:text-foreground transition-colors">
              Будущее
            </Link>
            <Link to="/technologies" className="text-primary font-semibold">
              Технологии
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c044ab00-1b5a-41b2-a8d6-e415002a654b/files/3ff48e51-37e3-423b-b72b-321631b3f239.jpg" 
                alt="AI Technologies" 
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Технологии ИИ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Основные направления и методы искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {techCategories.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                      <Icon name={tech.icon as any} size={28} className="text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tech.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/80">Примеры применения:</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.examples.map((example, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0 mb-12">
            <CardContent className="p-10 text-center">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-4">Интересный факт</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Современные нейронные сети содержат до 175 миллиардов параметров (GPT-3), что сопоставимо с количеством синапсов в мозге пчелы. Но человеческий мозг содержит около 100 триллионов синапсов — мы только в начале пути!
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-center">
            <Link to="/future">
              <Button variant="outline" size="lg" className="gap-2">
                <Icon name="ArrowLeft" size={20} />
                Назад к будущему
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Home" size={20} />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technologies;