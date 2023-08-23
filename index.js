const axios = require('axios'); // ต้องติดตั้ง axios ก่อนใช้งาน

const CHANNEL_ACCESS_TOKEN = 'bRhqtkXep8LPbtyVQQW9X85bs4fL0+FpJpUh2cfdPIDjN7sMwRduiZUaMGV65XOkZ8uCkTBbwBCsdtfcmYyqyEE65pOqpTJAnkyHsU73RjGPxGmI13GjqLAXkfZzh9pfl37rsk51+Nd84tVLwdGKPgdB04t89/1O/w1cDnyilFU=';

const sendMessage = async (userId, message) => {
  try {
    const response = await axios.post(
        'https://api.line.me/v2/bot/message/push',
        {
          to: userId,
          messages: [
            {
              type: 'text',
              text: message,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
          },
        }
      );
      console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response.data);
  }
};

let message_kup = `สวัดดีครับ
คุณ พัสพล สุทาธรรม`

const userId = 'U35bc49057b0587886ed066968bcb3231'; // Line User ID ของผู้ใช้งาน
const message = message_kup ; // ข้อความที่ต้องการส่ง

sendMessage(userId, message);
