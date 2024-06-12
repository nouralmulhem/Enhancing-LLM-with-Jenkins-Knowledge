import pandas as pd
from bs4 import BeautifulSoup

def remove_html_tags(text):
    if pd.isna(text):  
        return text

    soup = BeautifulSoup(text, 'html.parser')

    # Find all tags except <code>
    for tag in soup.find_all(True):
        if tag.name != 'code':
            tag.unwrap()  # Remove the tag, keep its contents

    return str(soup)

