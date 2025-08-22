import React, { useState } from 'react';
import { Settings, Save, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

export interface WebhookSettings {
  webhookUrl: string;
  botName: string;
  welcomeMessage: string;
  placeholder: string;
}

interface WebhookConfigProps {
  onSave: (settings: WebhookSettings) => void;
  initialSettings?: Partial<WebhookSettings>;
}

export const WebhookConfig: React.FC<WebhookConfigProps> = ({
  onSave,
  initialSettings = {}
}) => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<WebhookSettings>({
    webhookUrl: initialSettings.webhookUrl || '',
    botName: initialSettings.botName || 'AI Assistant',
    welcomeMessage: initialSettings.welcomeMessage || "Hi! I'm here to help. What can I do for you today?",
    placeholder: initialSettings.placeholder || 'Type your message...'
  });

  const handleSave = () => {
    onSave(settings);
    toast({
      title: "Settings saved",
      description: "Your chatbot configuration has been updated.",
    });
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>Chatbot Configuration</span>
        </CardTitle>
        <CardDescription>
          Configure your AI chatbot widget settings and webhook connection.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Webhook URL */}
        <div className="space-y-2">
          <Label htmlFor="webhook-url">Webhook URL</Label>
          <Input
            id="webhook-url"
            value={settings.webhookUrl}
            onChange={(e) => setSettings(prev => ({ ...prev, webhookUrl: e.target.value }))}
            placeholder="https://your-api.com/webhook"
            className={settings.webhookUrl && !isValidUrl(settings.webhookUrl) ? "border-destructive" : ""}
          />
          {settings.webhookUrl && !isValidUrl(settings.webhookUrl) && (
            <p className="text-sm text-destructive">Please enter a valid URL</p>
          )}
          <p className="text-xs text-muted-foreground">
            Your AI agent endpoint that will receive and respond to messages
          </p>
        </div>

        {/* Bot Name */}
        <div className="space-y-2">
          <Label htmlFor="bot-name">Bot Name</Label>
          <Input
            id="bot-name"
            value={settings.botName}
            onChange={(e) => setSettings(prev => ({ ...prev, botName: e.target.value }))}
            placeholder="AI Assistant"
          />
          <p className="text-xs text-muted-foreground">
            The display name for your chatbot
          </p>
        </div>

        {/* Welcome Message */}
        <div className="space-y-2">
          <Label htmlFor="welcome-message">Welcome Message</Label>
          <Input
            id="welcome-message"
            value={settings.welcomeMessage}
            onChange={(e) => setSettings(prev => ({ ...prev, welcomeMessage: e.target.value }))}
            placeholder="Hi! I'm here to help. What can I do for you today?"
          />
          <p className="text-xs text-muted-foreground">
            The first message users see when opening the chat
          </p>
        </div>

        {/* Input Placeholder */}
        <div className="space-y-2">
          <Label htmlFor="placeholder">Input Placeholder</Label>
          <Input
            id="placeholder"
            value={settings.placeholder}
            onChange={(e) => setSettings(prev => ({ ...prev, placeholder: e.target.value }))}
            placeholder="Type your message..."
          />
          <p className="text-xs text-muted-foreground">
            Placeholder text shown in the message input field
          </p>
        </div>

        {/* Webhook Format Info */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Webhook Format:</strong> The chatbot will send POST requests to your webhook URL with the following JSON structure:
            <pre className="mt-2 text-xs bg-muted p-2 rounded">
{`{
  "message": "User's message",
  "timestamp": "2024-01-01T12:00:00Z",
  "sessionId": "widget-session"
}`}
            </pre>
            Your webhook should respond with: <code className="text-xs">{"{ \"response\": \"AI reply\" }"}</code>
          </AlertDescription>
        </Alert>

        <Button onClick={handleSave} className="w-full">
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </Button>
      </CardContent>
    </Card>
  );
};