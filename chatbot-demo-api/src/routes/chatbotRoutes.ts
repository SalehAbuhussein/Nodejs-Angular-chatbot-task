import { Router } from 'express';

import * as chatbotController from '../controllers/chatbotController';

const router = Router();

router.get('/image', chatbotController.getChatbotImageResponse);
router.post('/text', chatbotController.postChatbotTextResponse);
// router.get('/image');

export default router;