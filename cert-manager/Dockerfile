FROM python:3.11-slim

# Install dependencies: nginx, cron, certbot, Python packages
RUN apt-get update && \
    apt-get install -y cron nginx certbot && \
    pip install PyYAML && \
    apt-get clean

# Copy files
COPY nginx.conf /etc/nginx/nginx.conf
COPY cert_renew.py /app/cert_renew.py
COPY domains.json /app/domains.json
COPY crontab.txt /app/crontab.txt

# Create webroot path for certbot
RUN mkdir -p /letsencrypt && touch /var/log/cron.log


# Setup cron
RUN crontab /app/crontab.txt

WORKDIR /app

# Entrypoint to run nginx, cron, and tail logs
RUN nginx -t
CMD nginx -g "daemon off;" & cron && tail -f /var/log/cron.log

