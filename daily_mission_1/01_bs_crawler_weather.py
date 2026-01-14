import requests
from bs4 import BeautifulSoup as bs
from pprint import pprint

html = requests.get("https://search.naver.com/search.naver?query=%EB%82%A0%EC%94%A8")
# pprint(html.text)

soup = bs(html.text, "html.parser")

data1 = soup.find("div", {"class": "temperature_info"})
# pprint(data1)

data2 = data1.find_all("dd")
# pprint(data2)

perceived_temp = data2[0].text
print(perceived_temp)
