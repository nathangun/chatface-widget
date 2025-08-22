import React, { useState } from 'react';
import { ChatWidget, type Message } from '@/components/ChatWidget';
import { WebhookConfig, type WebhookSettings } from '@/components/WebhookConfig';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageSquare, Settings, Zap } from 'lucide-react';

const Index = () => {
  const [webhookSettings, setWebhookSettings] = useState<WebhookSettings>({
    webhookUrl: '',
    botName: 'AI Assistant',
    welcomeMessage: "Hi! I'm here to help. What can I do for you today?",
    placeholder: 'Type your message...'
  });

  const handleSaveSettings = (settings: WebhookSettings) => {
    setWebhookSettings(settings);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-chat-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Chat Widget</h1>
              <p className="text-muted-foreground">Embeddable chatbot for any website</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Configuration</h2>
            </div>
            <WebhookConfig 
              onSave={handleSaveSettings}
              initialSettings={webhookSettings}
            />
          </div>

          {/* Features Overview */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Features</h2>
            </div>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Widget Style</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Floating bottom-right position</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Smooth animations and transitions</li>
                    <li>• Customizable avatar and branding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Bot className="h-5 w-5" />
                    <span>AI Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Webhook-based AI agent connection</li>
                    <li>• Real-time message handling</li>
                    <li>• Typing indicators and status</li>
                    <li>• Error handling and retries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Embed Code</CardTitle>
                  <CardDescription>
                    Use this iframe to embed the widget on any website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-3 rounded-md">
                    <code className="text-xs break-all">
                      {`<iframe src="${window.location.origin}" width="400" height="600" frameborder="0"></iframe>`}
                    </code>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="secondary">iframe Ready</Badge>
                    <Badge variant="secondary">CORS Enabled</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Demo Instructions */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
            <MessageSquare className="h-4 w-4" />
            <span>Try the chat widget in the bottom-right corner!</span>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <ChatWidget
        webhookUrl={webhookSettings.webhookUrl}
        botName={webhookSettings.botName}
        welcomeMessage={webhookSettings.welcomeMessage}
        placeholder={webhookSettings.placeholder}
      />
    </div>
  );
};

export default Index;
