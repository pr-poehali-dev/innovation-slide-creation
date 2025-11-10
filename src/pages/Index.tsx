import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI World
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-primary font-semibold">
              Главная
            </Link>
            <Link to="/future" className="text-foreground/80 hover:text-foreground transition-colors">
              Будущее
            </Link>
            <Link to="/technologies" className="text-foreground/80 hover:text-foreground transition-colors">
              Технологии
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Искусственный
                </span>
                <br />
                <span className="text-foreground">Интеллект</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Технология, которая меняет мир прямо сейчас. Узнай, как ИИ работает, куда движется и какие возможности открывает для человечества.
              </p>

              <div className="flex gap-4">
                <Link to="/future">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Взгляд в будущее
                    <Icon name="Rocket" size={20} />
                  </Button>
                </Link>
                <Link to="/technologies">
                  <Button size="lg" variant="outline" className="gap-2">
                    Изучить технологии
                    <Icon name="Code" size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border border-primary/20 p-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent animate-float"></div>
                <Icon name="Brain" size={200} className="text-primary relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Что такое <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">искусственный интеллект?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <Icon name="Cpu" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Обучение</h3>
                <p className="text-muted-foreground">
                  ИИ анализирует огромные объёмы данных и находит закономерности, которые человек может не заметить
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Адаптация</h3>
                <p className="text-muted-foreground">
                  Системы улучшают свою работу с опытом, постоянно совершенствуя алгоритмы и методы
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
                  <Icon name="Target" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">Решение задач</h3>
                <p className="text-muted-foreground">
                  ИИ принимает решения и выполняет задачи, которые раньше требовали человеческого интеллекта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-0 backdrop-blur">
            <CardContent className="p-12 text-center">
              <Icon name="Sparkles" size={64} className="mx-auto mb-6 text-primary animate-float" />
              <h2 className="text-3xl font-bold mb-4">Готов погрузиться в мир ИИ?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Исследуй технологии, которые уже меняют нашу жизнь, и узнай, что ждёт человечество в будущем
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/technologies">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Изучить технологии
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                </Link>
                <Link to="/future">
                  <Button size="lg" variant="outline" className="gap-2">
                    Заглянуть в будущее
                    <Icon name="Eye" size={20} />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>Проект создан для изучения искусственного интеллекта • 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
