from playwright.sync_api import sync_playwright
import json
import time

def scrape_noon_product(url):
    with sync_playwright() as p:
        # 1. Launch the browser (headless=False means you can SEE it working)
        print("🚀 Launching Open Claw browser...")
        browser = p.chromium.launch(headless=False) 
        page = browser.new_page()

        # 2. Go to the URL
        print(f"🌍 Navigating to: {url}")
        page.goto(url, timeout=60000)
        
        # 3. Wait for content to load (simulating a human)
        time.sleep(3) 

        # 4. Extract Data (Title and Price)
        # Note: Selectors on big sites change often, this is a general example
        try:
            title = page.title()
            print(f"✅ Extracted Title: {title}")
            
            # Take a screenshot to prove we were there
            page.screenshot(path="noon_screenshot.png")
            print("📸 Screenshot saved as 'noon_screenshot.png'")

        except Exception as e:
            print(f"❌ Error extracting data: {e}")

        browser.close()
        
        return {
            "status": "success",
            "source": "Open Claw Local",
            "data": {
                "title": title,
                "url": url
            }
        }

if __name__ == "__main__":
    # Test with a Noon.com search URL
    target_url = "https://www.noon.com/uae-en/"
    
    result = scrape_noon_product(target_url)
    print("\n--- JSON OUTPUT (What your customer gets) ---")
    print(json.dumps(result, indent=2))