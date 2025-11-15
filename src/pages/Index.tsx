import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const userStats = {
    name: 'Александра Иванова',
    position: 'Middle Frontend Developer',
    grade: 'M2',
    nextGrade: 'M3',
    gradeProgress: 67,
    investmentPoints: 15000,
    achievements: 24,
    mentorSessions: 8,
  };

  const skills = [
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 78, category: 'Frontend' },
    { name: 'System Design', level: 45, category: 'Architecture' },
    { name: 'Team Lead', level: 52, category: 'Soft Skills' },
    { name: 'Node.js', level: 63, category: 'Backend' },
    { name: 'Testing', level: 71, category: 'Quality' },
  ];

  const careerPath = [
    { role: 'Junior Developer', status: 'completed', year: '2020' },
    { role: 'Middle Developer', status: 'current', year: '2022' },
    { role: 'Senior Developer', status: 'available', year: '2025' },
    { role: 'Tech Lead', status: 'locked', year: '2027' },
  ];

  const achievements = [
    { id: 1, title: 'Первый проект', icon: 'Trophy', rarity: 'common' },
    { id: 2, title: 'Наставник года', icon: 'Award', rarity: 'rare' },
    { id: 3, title: 'Инноватор', icon: 'Lightbulb', rarity: 'epic' },
    { id: 4, title: 'Спикер', icon: 'Mic', rarity: 'rare' },
  ];

  const learningCatalog = [
    { id: 1, title: 'Advanced React Patterns', cost: 3000, duration: '12 ч', category: 'Курс' },
    { id: 2, title: 'System Design Interview', cost: 4500, duration: '20 ч', category: 'Курс' },
    { id: 3, title: 'Frontend Conf 2025', cost: 2500, duration: '2 дня', category: 'Конференция' },
  ];

  const mentors = [
    { id: 1, name: 'Михаил Петров', role: 'Senior Architect', expertise: 'System Design', available: true },
    { id: 2, name: 'Елена Смирнова', role: 'Tech Lead', expertise: 'Team Management', available: true },
    { id: 3, name: 'Дмитрий Козлов', role: 'Principal Engineer', expertise: 'Performance', available: false },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-primary">Career Pilot</h1>
            </div>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={18} />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">АИ</AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-0 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <CardHeader>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <CardTitle className="text-3xl mb-2 text-white">{userStats.name}</CardTitle>
                  <CardDescription className="text-white/80 text-lg">{userStats.position}</CardDescription>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                  Грейд {userStats.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-4 gap-6 mt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{userStats.investmentPoints}</div>
                  <div className="text-sm text-white/70 mt-1">ЕИК Баланс</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{userStats.achievements}</div>
                  <div className="text-sm text-white/70 mt-1">Достижений</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{userStats.mentorSessions}</div>
                  <div className="text-sm text-white/70 mt-1">Сессий с ментором</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{userStats.gradeProgress}%</div>
                  <div className="text-sm text-white/70 mt-1">До {userStats.nextGrade}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="navigator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-14">
            <TabsTrigger value="navigator" className="flex items-center gap-2">
              <Icon name="Map" size={18} />
              <span className="hidden sm:inline">Навигатор</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Портфолио</span>
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <Icon name="GraduationCap" size={18} />
              <span className="hidden sm:inline">Обучение</span>
            </TabsTrigger>
            <TabsTrigger value="mentors" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              <span className="hidden sm:inline">Менторы</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Icon name="Trophy" size={18} />
              <span className="hidden sm:inline">Достижения</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="navigator" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" />
                  Карьерный путь
                </CardTitle>
                <CardDescription>Ваш путь от Junior до Tech Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                  <div className="space-y-6">
                    {careerPath.map((step, index) => (
                      <div key={index} className="relative flex items-start gap-4 pl-2">
                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-green-500' :
                          step.status === 'current' ? 'bg-primary' :
                          step.status === 'available' ? 'bg-secondary' :
                          'bg-muted'
                        }`}>
                          <Icon 
                            name={
                              step.status === 'completed' ? 'CheckCircle2' :
                              step.status === 'current' ? 'Target' :
                              step.status === 'available' ? 'Unlock' :
                              'Lock'
                            } 
                            className="text-white" 
                            size={24} 
                          />
                        </div>
                        <div className="flex-1 pt-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">{step.role}</h3>
                            <Badge variant="outline">{step.year}</Badge>
                          </div>
                          {step.status === 'current' && (
                            <div className="mt-3">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Прогресс до Senior</span>
                                <span className="font-semibold">{userStats.gradeProgress}%</span>
                              </div>
                              <Progress value={userStats.gradeProgress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-accent" />
                  Role Readiness Index
                </CardTitle>
                <CardDescription>Ваша готовность к переходу на Senior Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Технические навыки</span>
                    <div className="flex items-center gap-3">
                      <Progress value={75} className="w-32 h-2" />
                      <span className="font-bold text-primary">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Leadership</span>
                    <div className="flex items-center gap-3">
                      <Progress value={52} className="w-32 h-2" />
                      <span className="font-bold text-primary">52%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Проектный опыт</span>
                    <div className="flex items-center gap-3">
                      <Progress value={88} className="w-32 h-2" />
                      <span className="font-bold text-primary">88%</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="lg">
                    <Icon name="Sparkles" className="mr-2" />
                    Запросить оценку у ИИ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="text-primary" />
                  Карта компетенций
                </CardTitle>
                <CardDescription>Визуализация ваших профессиональных навыков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="p-4 border rounded-lg hover:border-primary transition-all cursor-pointer hover:shadow-md"
                      onClick={() => setSelectedSkill(skill.name)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground">{skill.category}</p>
                        </div>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                {selectedSkill && (
                  <div className="mt-6 p-4 bg-accent/10 border border-accent rounded-lg animate-scale-in">
                    <p className="text-sm text-muted-foreground">
                      💡 Рекомендация ИИ: Для улучшения навыка "{selectedSkill}" рекомендуем курс "Advanced {selectedSkill} Patterns"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Wallet" className="text-secondary" />
                  Инвестиционный фонд
                </CardTitle>
                <CardDescription>
                  Доступно {userStats.investmentPoints.toLocaleString()} ЕИК для вашего развития
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningCatalog.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-secondary transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{course.category}</Badge>
                        <h4 className="font-semibold">{course.title}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Coins" size={14} />
                          {course.cost.toLocaleString()} ЕИК
                        </span>
                      </div>
                    </div>
                    <Button variant="secondary">
                      Инвестировать
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UserCircle" className="text-primary" />
                  Система менторства
                </CardTitle>
                <CardDescription>ИИ подобрал наставников специально для вас</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{mentor.name}</h4>
                        <p className="text-sm text-muted-foreground">{mentor.role}</p>
                        <Badge variant="outline" className="mt-1">{mentor.expertise}</Badge>
                      </div>
                    </div>
                    <Button disabled={!mentor.available} variant={mentor.available ? "default" : "ghost"}>
                      {mentor.available ? 'Запросить встречу' : 'Недоступен'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" className="text-accent" />
                  Коллекция достижений
                </CardTitle>
                <CardDescription>Разблокировано {achievements.length} из 50 достижений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="relative p-6 border rounded-xl text-center hover:scale-105 transition-transform cursor-pointer bg-gradient-to-b from-card to-muted/30"
                    >
                      <div className={`w-16 h-16 mx-auto rounded-full ${getRarityColor(achievement.rarity)} flex items-center justify-center mb-3 shadow-lg`}>
                        <Icon name={achievement.icon as any} className="text-white" size={32} />
                      </div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {achievement.rarity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Career Pilot — Ваш карьерный навигатор в T1 Group</p>
          <p className="mt-2">Powered by AI • Made with 🚀</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
