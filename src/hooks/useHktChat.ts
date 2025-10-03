import { useState, useCallback, useRef } from 'react';
import { hktClient, ChatMessage, HktChatOptions } from '@/lib/hktClient';

export interface UseHktChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  send: (content: string, options?: HktChatOptions) => Promise<void>;
  abort: () => void;
  clearMessages: () => void;
}

export function useHktChat(): UseHktChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const send = useCallback(async (content: string, options: HktChatOptions = {}) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: content.trim() };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Create new abort controller for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await hktClient.hktChat(
        [...messages, userMessage],
        { ...options, signal: abortController.signal }
      );

      const assistantMessage: ChatMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          // Request was aborted, don't show error
          return;
        }
        setError(err.message);
        
        // Add error message to chat
        const errorMessage: ChatMessage = { 
          role: 'system', 
          content: `Error: ${err.message}` 
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        const errorMsg = 'An unknown error occurred';
        setError(errorMsg);
        const errorMessage: ChatMessage = { role: 'system', content: `Error: ${errorMsg}` };
        setMessages(prev => [...prev, errorMessage]);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages, isLoading]);

  const abort = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    send,
    abort,
    clearMessages,
  };
}
