import json

import requests

url = "http://127.0.0.1:5000/chatbot/chat"
message = "Hello, how are you?"
data = {"text": message}

headers = {"Content-type": "application/json"}

with requests.post(url, data=json.dumps(data), headers=headers, stream=True) as r:
    for chunk in r.iter_content(1024):
        print(chunk)