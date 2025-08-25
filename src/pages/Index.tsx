import React from 'react';
import { ChatWidget } from '@/components/ChatWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Book, 
  Search, 
  Calendar, 
  Users, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Library,
  ArrowRight,
  Star
} from 'lucide-react';

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-chat-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Library className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">UC Library</h1>
                <p className="text-muted-foreground">Universitas Ciputra Library</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Open 24/7</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to UC Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover knowledge, research resources, and academic support at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Search className="h-5 w-5 mr-2" />
              Search Catalog
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="h-5 w-5 mr-2" />
              Digital Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Book className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">2.5M+</div>
              <p className="text-sm text-muted-foreground">Books & Publications</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">50K+</div>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">24/7</div>
              <p className="text-sm text-muted-foreground">Study Spaces</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">Top 10</div>
              <p className="text-sm text-muted-foreground">Academic Library</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Library Services</h3>
          <p className="text-muted-foreground">Everything you need for academic success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Research Assistance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get help from our expert librarians for your research projects and academic papers.
              </p>
              <Button variant="outline" size="sm">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Digital Collections</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access millions of digital books, journals, and multimedia resources online.
              </p>
              <Button variant="outline" size="sm">
                Explore <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Study Rooms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reserve private study rooms and collaborative spaces for group projects.
              </p>
              <Button variant="outline" size="sm">
                Book Now <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-chat-surface/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Universitas Ciputra Library. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget
        webhookUrl="https://educhatco.app.n8n.cloud/webhook-test/1d12e1c4-39dd-48ee-8b42-a9eaf6b91267"
        botName="UC Library Assistant"
        welcomeMessage="Hi! I'm your UC Library assistant. How can I help you find resources today?"
        placeholder="Ask about books, research, or library services..."
      />
    </div>
  );
};

export default Index;
