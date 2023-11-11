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
        print(completion.choices[0].message.content)

if __name__ == "__main__":
    gpt_wrapper = GPTClientWrapper()
    prompt = "In the early twentieth century, the US was deeply influenced by the eugenics movement, which espoused the idea of improving the genetic quality of the population through selective breeding and sterilization. Pseudo-scientific notions of racial superiority and inferiority played a significant role in shaping the US ethnic landscape during this period. In Montrie's book, it is stated that “ ‘The master race of the world is Caucasian,’ Buck declared in his polemic’s opening lines, and that dominance was sustained, he claimed, by a singular devotion to both ‘Civilization and Christianity’ ”(Montrie, 2). Statements like these and the use of phrases like “The master race” show what the perception of ethnic communities may have been in the early twentieth century. These theories not only contributed to a sense of superiority among white Americans but also fueled discrimination and segregation against non-white communities, particularly African Americans."
    gpt_wrapper.get_flashcards_json(prompt)