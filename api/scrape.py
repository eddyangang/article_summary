# This program will scrape a news article to get general information (i.e. author, date) and summarize the article using natural learning processing

# Import the libraries
import nltk
from newspaper import Article


def scrapeAndSummarize(url):
    
    # Get the Article
    article = Article(url)

    # Do some NLP
    article.download()
    article.parse()
    nltk.download('punkt')
    article.nlp()

    # Get a summary of the article
    return article