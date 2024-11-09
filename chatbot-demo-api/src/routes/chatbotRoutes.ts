import { Router } from 'express';

import * as chatbotController from '../controllers/chatbotController';

const router = Router();

router.post('/text', chatbotController.postChatbotTextResponse);

export default router;