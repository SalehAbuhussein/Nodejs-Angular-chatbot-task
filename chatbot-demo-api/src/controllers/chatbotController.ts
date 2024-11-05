import { Request, Response, NextFunction } from 'express';

import { ChatHistory, generateText } from '../services/geminiService';

/**
 * Get chatbot response text
 * 
 * @param { Request } req 
 * @param { Response } res 
 * @param { NextFunction } next 
 * @returns { Promise<void> }
 */
export const postChatbotTextResponse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { body } = req.body as {
    body: {
      chatHistory: ChatHistory[],
      message: string,
    }
  };  

  try {
    const result = await generateText(body.chatHistory, body.message);
    res.json({ Message: result });  
  } catch (error) {
    res.status(500).json({ message: 'Something wrong happened!'})
  }
};