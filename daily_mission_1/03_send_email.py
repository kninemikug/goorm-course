import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from dotenv import load_dotenv
import os

send_email = "skk3010g@gmail.com"
recv_email = "skk3010g@gmail.com"

load_dotenv()
password = os.getenv("PASSWORD")

smtpName = "smtp.gmail.com"
smtpPort = 587

# text = "mail test"
# msg = MIMEText(text)

msg = MIMEMultipart()

msg['Subject'] = "Test Email"
msg['From'] = send_email
msg['To'] = recv_email

text = "mail test"
content = MIMEText(text)
msg.attach(content)

file_name = "test.txt"
current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, file_name)

with open(file_path, 'rb') as f:    # rb : read binary
    attach_file = MIMEApplication(f.read())
    attach_file.add_header('Content-Disposition', 'attachment', filename=file_name)
    msg.attach(attach_file)

server = smtplib.SMTP(smtpName, smtpPort)
server.starttls() # TLS 보안 처리 시작
server.login(send_email, password)
server.send_message(msg)
server.quit()