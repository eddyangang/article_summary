from flask import Flask, jsonify, request
from scrape import scrapeAndSummarize
import json
app = Flask(__name__)
# article = scrapeAndSummarize('https://www.nytimes.com/2020/09/24/us/politics/trump-republicans-election-transition.html')
# print(article.summary)

@app.route('/api', methods=['GET'])
def api():
    return {
        "get": "hello"
    }

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
        "image": article.top_image,
        "videos": article.movies,
        "keywords": article.keywords
    })