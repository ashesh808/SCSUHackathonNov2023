import openai
import os
import pandas as pd
import time

openai.api_key = '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'

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]

prompt = "What is the current temperature in St. Cloud, MN?"

response = get_completion(prompt)

print(response)