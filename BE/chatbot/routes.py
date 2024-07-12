# chatbot/routes.py
from flask import Blueprint, request, jsonify, Response, stream_with_context
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
You are a helpful, respectful and honest assistant. Your answers are always very brief.
{persona}
<</SYS>>
{text}[/INST]
"""

prompt = PromptTemplate(template=template, input_variables=["text", "persona"])

llm_chain = LLMChain(prompt=prompt, llm=llm)

history = ''

def process_request(query, persona):
    global history
    response = llm_chain.invoke({"text": query, "persona": persona})['text']
    history += f'Human: {query}\nAI: {response}\n'
    print(f'{history}\n\n')
    return response

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('text', '')
    persona = data.get('persona', '')
    try:
        prediction = process_request(query, persona)
        return jsonify({"prediction": prediction})
    except Exception as e:
        logging.error("Error occurred in /chat endpoint", exc_info=True)
        return jsonify({"prediction": "error"})
    

@chatbot_bp.route('/test', methods=['GET'])
def test():
    return jsonify({'test': 'OK'})


# def process_request(query):
#     global history
#     print('55', query)
#     for response in llm_chain.invoke(query, stream=True):
#         print('56',response)
#         yield response
#         history += f'Human: {query}\nAI: {response}\n'

# @chatbot_bp.route('/chat', methods=['POST'])
# def chat():
#     data = request.json
#     query = data.get('text', '')
#     try:
#         def generate():
#             for response_part in process_request(query):
#                 print('67',response_part)
#                 yield f"data: {response_part}\n\n"
        
#         return Response(stream_with_context(generate()), content_type='text/event-stream')
#     except Exception as e:
#         logging.error("Error occurred in /chat endpoint", exc_info=True)
#         return jsonify({"prediction": "error"})

# @chatbot_bp.route('/test', methods=['GET'])
# def test():
#     return jsonify({'test': 'OK'})

