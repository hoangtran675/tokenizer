from flask import Flask
from flask_cors import CORS

from API import ApiTokenizer

app = Flask(__name__)
app.register_blueprint(ApiTokenizer.tokenizer_api)

CORS(app, resources=r'/api/*', allow_headers='Content-Type')

if __name__ == '__main__':
    print("Tran van Hoang")
    app.run(host='localhost', port=5001, debug=True)


