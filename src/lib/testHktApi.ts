// Test script to verify HKT API connection
export async function testHktApi() {
  const baseUrl = import.meta.env.VITE_HKT_API_BASE || 'https://termite-dear-smoothly.ngrok-free.app/v1';
  const apiKey = import.meta.env.VITE_HKT_API_KEY || '';
  const model = import.meta.env.VITE_HKT_MODEL || 'meta-llama-3.1-70b-instruct';

  console.log('🔍 Testing HKT API Connection...');
  console.log('Base URL:', baseUrl);
  console.log('API Key:', apiKey ? '***' + apiKey.slice(-4) : 'Not provided');
  console.log('Model:', model);

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  try {
    console.log('📡 Sending test request...');
    
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'Hello, this is a test message.' }],
        stream: false,
      }),
    });

    console.log('📊 Response Status:', response.status);
    console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', response.status, errorText);
      return {
        success: false,
        error: `HTTP ${response.status}: ${errorText}`,
        status: response.status
      };
    }

    const responseText = await response.text();
    console.log('✅ Raw Response:', responseText);

    try {
      const data = JSON.parse(responseText);
      console.log('✅ Parsed Response:', data);
      return {
        success: true,
        data,
        message: 'API connection successful!'
      };
    } catch (parseError) {
      console.error('❌ JSON Parse Error:', parseError);
      return {
        success: false,
        error: 'Invalid JSON response',
        rawResponse: responseText
      };
    }

  } catch (error) {
    console.error('❌ Network Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      type: 'network'
    };
  }
}
