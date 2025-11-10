import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Future = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI Future
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link to="/future" className="text-primary font-semibold">
              Будущее
            </Link>
            <Link to="/technologies" className="text-foreground/80 hover:text-foreground transition-colors">
              Технологии
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c044ab00-1b5a-41b2-a8d6-e415002a654b/files/64a9926c-e2e3-4f30-b82a-d592b0df75a1.jpg" 
                alt="AI Future Visualization" 
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Будущее ИИ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Взгляд в завтрашний день: как искусственный интеллект изменит нашу жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name="Stethoscope" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Медицина будущего</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ИИ-диагностика болезней на ранних стадиях, персонализированное лечение и роботизированная хирургия станут доступны каждому. Продолжительность жизни может увеличиться до 120+ лет.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Icon name="GraduationCap" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Образование 2.0</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные AI-преподаватели адаптируют программу под каждого ученика. Обучение станет доступнее, эффективнее и интереснее благодаря виртуальной реальности и геймификации.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <Icon name="Car" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Умные города</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Беспилотные автомобили, оптимизированный трафик, экологичная энергетика. Города станут безопаснее, чище и комфортнее благодаря AI-управлению инфраструктурой.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-6">
                  <Icon name="Sparkles" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Творчество и искусство</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ИИ станет партнёром в создании музыки, живописи, кино. Появятся новые жанры и форматы, где человек и машина творят вместе, создавая уникальные произведения.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-8">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-4">Прогноз на 2030 год</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">95%</div>
                    <p className="text-sm text-muted-foreground">рабочих процессов будут использовать ИИ</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">$15.7T</div>
                    <p className="text-sm text-muted-foreground">вклад ИИ в мировую экономику</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">100M</div>
                    <p className="text-sm text-muted-foreground">новых рабочих мест в AI-индустрии</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <Icon name="Home" size={20} />
                  На главную
                </Button>
              </Link>
              <Link to="/technologies">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Изучить технологии
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Future;