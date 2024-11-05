import { GoogleGenerativeAI } from "@google/generative-ai";

export type ChatHistory = {
	role: 'user' | 'model',
	parts: { text: string }[]
};

/**
 * Generate text based on messages between user and ai model
 * 
 * @param { ChatHistory[] } chathistory Chat history exchanged between user and chatbot ai 
 * @param { string } message User question to chatbot ai
 * @returns { Promise<string> }
 */
export const generateText = async (chathistory: ChatHistory[], message: string): Promise<string> => {
	const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY as string);
	const model = genAI.getGenerativeModel({ model: process.env.AI_MODEL as string });

	const chat = model.startChat({
		history: [ ...chathistory ],
	});

	let result = await chat.sendMessage(message);

	return result.response.text();
};