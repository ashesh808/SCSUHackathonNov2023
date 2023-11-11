from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()


class GPTClientWrapper:
    def __init__(self):
        self.client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    
    def get_flashcards_json(self, prompt):
        completion = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You an intelligent teacher's assistant, who when given a block of text generates flash cards for it in Json format with the feilds questions and answers.You respond in one line with only 3 flashcards without using new lines."},
                {"role": "user", "content": prompt}
            ]
        )
        return completion.choices[0].message.content