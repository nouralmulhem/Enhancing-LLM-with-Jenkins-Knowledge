# chatbot/routes.py
from flask import Blueprint, request, jsonify
import logging

from langchain.llms import CTransformers
from langchain import PromptTemplate, LLMChain
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

# Configure logging
logging.basicConfig(filename='app.log', level=logging.ERROR, 
                    format='%(asctime)s %(levelname)s %(name)s %(message)s')

chatbot_bp = Blueprint('chatbot', __name__)

llm = CTransformers(model="TheBloke/Llama-2-7B-Chat-GGML", model_file = 'llama-2-7b-chat.ggmlv3.q2_K.bin', callbacks=[StreamingStdOutCallbackHandler()])

template = """
[INST] <<SYS>>
You are a helpful, respectful and honest assistant. Your answers are always brief.
<</SYS>>
{text}[/INST]
"""

prompt = PromptTemplate(template=template, input_variables=["text"])

llm_chain = LLMChain(prompt=prompt, llm=llm)

history = ''

def process_request(query):
    global history
    response = llm_chain.run(query)
    history += f'Human: {query}\nAI: {response}\n'
    return response

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('text', '')
    try:
        prediction = process_request(query)
        return jsonify({"prediction": prediction})
    except Exception as e:
        logging.error("Error occurred in /chat endpoint", exc_info=True)
        return jsonify({"prediction": "error"})
    

@chatbot_bp.route('/test', methods=['GET'])
def test():
    return jsonify({'test': 'OK'})

