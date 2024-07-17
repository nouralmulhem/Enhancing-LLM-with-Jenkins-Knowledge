from flask import Flask
from chatbot.routes import chatbot_bp
from flask_cors import CORS

# import logging

app = Flask(__name__)
CORS(app)



# logging.basicConfig(level=logging.DEBUG)

# Register the blueprint
app.register_blueprint(chatbot_bp, url_prefix='/chatbot')

if __name__ == '__main__':
    app.run(port=5000)
