export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface HktChatOptions {
  model?: string;
  signal?: AbortSignal;
}

export interface HktChatResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface HktError {
  error: {
    message: string;
  };
}

class HktClient {
  private baseUrl: string;
  private apiKey: string;
  private defaultModel: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_HKT_API_BASE || 'https://termite-dear-smoothly.ngrok-free.app/v1';
    this.apiKey = import.meta.env.VITE_HKT_API_KEY || '';
    this.defaultModel = import.meta.env.VITE_HKT_MODEL || 'meta-llama-3.1-70b-instruct';
  }

  async hktChat(messages: ChatMessage[], options: HktChatOptions = {}): Promise<string> {
    const { model = this.defaultModel, signal } = options;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages,
        stream: false,
      }),
      signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `HKT API Error: ${response.status}`;
      
      try {
        const errorData: HktError = JSON.parse(errorText);
        errorMessage = errorData.error?.message || errorMessage;
      } catch {
        errorMessage += ` - ${errorText.substring(0, 100)}`;
      }
      
      throw new Error(errorMessage);
    }

    const responseText = await response.text();
    
    try {
      const data: HktChatResponse = JSON.parse(responseText);
      return data.choices?.[0]?.message?.content || '(no content)';
    } catch {
      throw new Error('HKT API returned invalid JSON response. The service might be unavailable or blocked.');
    }
  }
}

export const hktClient = new HktClient();
