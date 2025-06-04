import subprocess
import json

CONFIG_FILE = '/app/domains.json'
EMAIL = 'mbellil262@gmail.com'  # Replace with your real email

def is_wildcard(domain):
    return domain.startswith("*.")

def run_certbot(domain):
    cmd = [
        "certbot", "certonly",
        "--webroot", "--webroot-path", "/letsencrypt",
        "--non-interactive", "--agree-tos",
        "--email", EMAIL,
        "-d", domain
    ]
    print(f"[INFO] Running: {' '.join(cmd)}")
    subprocess.run(cmd)

def main():
    with open(CONFIG_FILE, 'r') as f:
        config = json.load(f)

    for domain in config.get("domains", []):
        if is_wildcard(domain):
            print(f"[SKIP] Skipping wildcard domain: {domain}")
            continue
        run_certbot(domain)

if __name__ == "__main__":
    main()
