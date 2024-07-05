# chatbot/routes.py
from flask import Blueprint, request, jsonify
from .model import chat_instance
import logging

# Configure logging
logging.basicConfig(filename='app.log', level=logging.ERROR, 
                    format='%(asctime)s %(levelname)s %(name)s %(message)s')

chatbot_bp = Blueprint('chatbot', __name__)

def process_request(query, conversation):
    print("input:", query, "Hist:", conversation)
    # add human and AI to the list hist
    history = ''
    for i, message in enumerate(conversation):
      role = 'Human' if i % 2 == 0 else 'AI'
      history += f'{role}: {message}\n'

    print("Hist:", history)
    
    response = chat_instance.predict(query, history)
    print("res", response)
    return response

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('text', '')
    history = data.get('history', '')
    print(query, history)
    try:
        prediction = process_request(query, history)
        return jsonify({"prediction": prediction})
    except Exception as e:
        logging.error("Error occurred in /chat endpoint", exc_info=True)
        return jsonify({"prediction": "error"})
    

@chatbot_bp.route('/test', methods=['GET'])
def test():
    return jsonify({'test': 'OK'})

