from flask import Flask, jsonify, request
from api.scrape import scrapeAndSummarize
import json
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    print("HERE", request.json.get('url'), flush = True)
    if not request.json:
        return 404

    url = request.json.get('url')

    article = scrapeAndSummarize(url)
    return jsonify({
        "author": article.authors[0],
        "date": article.publish_date,
        "image": article.top_image,
        "text": article.text,
        "summary": article.summary,
        "title": article.title,
        "videos": article.movies,
        "keywords": article.keywords
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))