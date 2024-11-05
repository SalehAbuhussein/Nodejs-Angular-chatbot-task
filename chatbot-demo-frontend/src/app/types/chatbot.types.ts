export type ChatHistory = {
	role: 'user' | 'model',
	parts: { text: string }[]
};


export type PostChatbotBody = {
    chatHistory: ChatHistory[],
    message: string
};