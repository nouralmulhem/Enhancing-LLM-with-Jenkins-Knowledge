from flask import Flask
from chatbot.routes import chatbot_bp
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv('.env')

app = Flask(__name__)

# Load configuration
env = os.environ.get('FLASK_ENV', 'development')

# Configure CORS
CORS(app)

# Register the blueprint with configurable URL prefix
app.register_blueprint(chatbot_bp, url_prefix=os.getenv('CHATBOT_URL_PREFIX'))

if __name__ == '__main__':
    app.run(host=os.getenv('FLASK_RUN_HOST'), port=int(os.getenv('FLASK_RUN_PORT')))
