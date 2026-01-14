from selenium.webdriver import ChromeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
import time

# op = ChromeOptions()
# op.add_argument('--headless')
# op.add_argument('--no-sandbox')
# op.add_argument('window-size=1920x1080')
# op.add_argument('disable-gpu')
# op.add_argument('--disable-dev-shm-usage')

# driver = webdriver.Chrome(options=op)

driver = webdriver.Chrome()

driver.get('https://www.youtube.com')
time.sleep(2)  # 페이지 로딩 대기

search = driver.find_element(By.XPATH, '//*[@id="center"]/yt-searchbox/div[1]/form/input')

search.send_keys('반원 코딩')
time.sleep(1)
search.send_keys(Keys.ENTER)

# driver.quit()