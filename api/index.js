export default async (req, res) => {
  try {
    // Extract query parameters
    const url = new URL(req.url, `https://${req.headers.host}`);
    const linkParam = url.searchParams.get('link');
    
    // Set constants
    const BOT_USERNAME = "QuickShareXBot";
    const CHANNEL_LINK = "https://telegram.me/ITACHI24X7";
    const INSTAGRAM_LINK = "https://instagram.com/moviefy.shop";
    const WEBSITE_LINK = "https://www.moviefy.shop/";
    const WHATSAPP_LINK = "https://wa.me/yourwhatsapp";
    
    if (!linkParam) {
      return res.status(200).send(generateErrorPage(CHANNEL_LINK));
    }
    
    const telegramUrl = `https://telegram.me/${BOT_USERNAME}?start=${encodeURIComponent(linkParam)}`;
    
    return res.status(200).send(generateRedirectPage(
      linkParam, 
      telegramUrl,
      CHANNEL_LINK,
      INSTAGRAM_LINK,
      WEBSITE_LINK,
      WHATSAPP_LINK
    ));
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

function generateRedirectPage(linkParam, telegramUrl, CHANNEL_LINK, INSTAGRAM_LINK, WEBSITE_LINK, WHATSAPP_LINK) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ThammuTV - Premium Access Gateway</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', 'Segoe UI', sans-serif;
    }
    
    :root {
      --primary: #6a11cb;
      --secondary: #2575fc;
      --premium: #ff6b00;
      --free: #25D366;
      --dark: #121826;
      --light: #f8f9fa;
    }
    
    body {
      background: linear-gradient(135deg, var(--dark) 0%, #1e293b 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      color: white;
    }
    
    .container {
      max-width: 1200px;
      width: 100%;
      background: rgba(30, 41, 59, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      animation: fadeIn 0.8s ease-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .header {
      background: linear-gradient(to right, var(--primary), var(--secondary));
      text-align: center;
      padding: 40px 20px;
      position: relative;
    }
    
    .exclusive-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: var(--premium);
      color: white;
      padding: 8px 20px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .logo {
      font-size: 4rem;
      margin-bottom: 15px;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    h1 {
      font-size: 2.8rem;
      margin-bottom: 10px;
      font-weight: 800;
    }
    
    .exclusive-content {
      display: flex;
      padding: 30px;
      gap: 30px;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .content-preview {
      flex: 1;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      height: 300px;
      background: linear-gradient(45deg, #8e2de2, #4a00e0);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .preview-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .play-icon {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .play-icon i {
      color: white;
      font-size: 2.5rem;
      margin-left: 5px;
    }
    
    .content-info {
      flex: 1;
    }
    
    .content-title {
      font-size: 2.2rem;
      margin-bottom: 15px;
      color: #fff;
      font-weight: 700;
    }
    
    .content-description {
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    
    .plans-section {
      padding: 40px 30px;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.2rem;
      margin-bottom: 40px;
      font-weight: 700;
      background: linear-gradient(to right, var(--free), var(--premium));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .plans-container {
      display: flex;
      gap: 30px;
      margin-bottom: 40px;
    }
    
    .plan-card {
      flex: 1;
      background: rgba(30, 41, 59, 0.7);
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .plan-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    .plan-header {
      padding: 25px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .free .plan-header {
      background: linear-gradient(to right, #16a34a, #22c55e);
    }
    
    .premium .plan-header {
      background: linear-gradient(to right, #ea580c, #f97316);
    }
    
    .plan-name {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .plan-price {
      font-size: 2.5rem;
      font-weight: 800;
    }
    
    .premium .plan-price::after {
      content: "/month";
      font-size: 1rem;
      font-weight: normal;
    }
    
    .plan-features {
      padding: 25px;
    }
    
    .feature {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      color: #cbd5e1;
    }
    
    .feature i {
      margin-right: 10px;
      width: 24px;
      text-align: center;
    }
    
    .free .feature i {
      color: var(--free);
    }
    
    .premium .feature i {
      color: var(--premium);
    }
    
    .plan-button {
      display: block;
      text-align: center;
      padding: 16px;
      margin: 20px;
      border-radius: 50px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s;
      cursor: pointer;
    }
    
    .free .plan-button {
      background: rgba(34, 197, 94, 0.15);
      color: #22c55e;
      border: 2px solid #22c55e;
    }
    
    .premium .plan-button {
      background: linear-gradient(to right, #ea580c, #f97316);
      color: white;
      box-shadow: 0 8px 20px rgba(234, 88, 12, 0.3);
    }
    
    .plan-button:hover {
      transform: scale(1.05);
    }
    
    .get-file-section {
      text-align: center;
      padding: 0 30px 40px;
    }
    
    .get-file-button {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      padding: 20px 40px;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 60px;
      box-shadow: 0 10px 25px rgba(37, 117, 252, 0.3);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .get-file-button::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: 0.5s;
    }
    
    .get-file-button:hover::after {
      left: 100%;
    }
    
    .get-file-button:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(37, 117, 252, 0.5);
    }
    
    .button-icon {
      font-size: 2rem;
    }
    
    .button-text {
      position: relative;
    }
    
    .button-arrow {
      margin-left: 15px;
      animation: bounce 1.5s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
      40% {transform: translateX(10px);}
      60% {transform: translateX(5px);}
    }
    
    .social-section {
      background: rgba(15, 23, 42, 0.7);
      padding: 30px;
      text-align: center;
    }
    
    .social-title {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #94a3b8;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 25px;
      background: rgba(30, 41, 59, 0.5);
      border-radius: 50px;
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .social-link:hover {
      transform: translateY(-5px);
      background: rgba(37, 117, 252, 0.2);
    }
    
    .footer {
      text-align: center;
      padding: 25px;
      color: #64748b;
      font-size: 0.9rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    @media (max-width: 768px) {
      .exclusive-content {
        flex-direction: column;
      }
      
      .plans-container {
        flex-direction: column;
      }
      
      .content-preview {
        width: 100%;
      }
      
      h1 {
        font-size: 2.2rem;
      }
      
      .content-title {
        font-size: 1.8rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
    }
    
    .token-display {
      background: rgba(15, 23, 42, 0.6);
      padding: 15px;
      border-radius: 10px;
      margin-top: 20px;
      text-align: center;
      font-size: 0.9rem;
    }
    
    .token {
      font-weight: 700;
      color: #60a5fa;
      word-break: break-all;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="exclusive-badge">
        <i class="fas fa-crown"></i> EXCLUSIVE CONTENT
      </div>
      <div class="logo">
        <i class="fas fa-film"></i>
      </div>
      <h1>PREMIUM ACCESS</h1>
      <p>Unlock premium content with ThammuTV</p>
    </div>
    
    <div class="exclusive-content">
      <div class="content-preview">
        <div class="preview-overlay">
          <div class="play-icon">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
      <div class="content-info">
        <h2 class="content-title">Premium Content</h2>
        <p class="content-description">
          Access high-quality exclusive content available only through ThammuTV.
          Enjoy premium features and early access to new releases.
        </p>
        <div class="features">
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>High-Quality Resolution</span>
          </div>
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>Enhanced Color & Sound</span>
          </div>
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>Exclusive Releases</span>
          </div>
        </div>
        <div class="token-display">
          Your access token: <span class="token">${linkParam}</span>
        </div>
      </div>
    </div>
    
    <div class="plans-section">
      <h2 class="section-title">Choose Your Plan</h2>
      <div class="plans-container">
        <div class="plan-card free">
          <div class="plan-header">
            <h3 class="plan-name">Free Plan</h3>
            <div class="plan-price">₹0</div>
          </div>
          <div class="plan-features">
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Basic content access</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Token verification required</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Limited daily access</span>
            </div>
            <div class="feature">
              <i class="fas fa-times"></i>
              <span>No premium content</span>
            </div>
            <div class="feature">
              <i class="fas fa-times"></i>
              <span>Ads supported</span>
            </div>
            <div class="plan-button">Continue with Free</div>
          </div>
        </div>
        
        <div class="plan-card premium">
          <div class="plan-header">
            <h3 class="plan-name">Premium Plan</h3>
            <div class="plan-price">₹99</div>
          </div>
          <div class="plan-features">
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Unlimited access to all content</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>No token verification</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>24/7 priority access</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>All premium content unlocked</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Ad-free experience</span>
            </div>
            <a href="${CHANNEL_LINK}" class="plan-button">Buy Now on Telegram</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="get-file-section">
      <a href="${telegramUrl}" class="get-file-button">
        <span class="button-icon"><i class="fab fa-telegram"></i></span>
        <span class="button-text">GET YOUR FILE NOW</span>
        <span class="button-arrow"><i class="fas fa-arrow-right"></i></span>
      </a>
      <p style="margin-top: 20px; color: #94a3b8;">Click above to access your content via Telegram</p>
    </div>
    
    <div class="social-section">
      <h3 class="social-title">Follow us for more updates</h3>
      <div class="social-links">
        <a href="${CHANNEL_LINK}" class="social-link">
          <i class="fab fa-telegram"></i> Telegram
        </a>
        <a href="${INSTAGRAM_LINK}" class="social-link">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="${WEBSITE_LINK}" class="social-link">
          <i class="fas fa-globe"></i> Website
        </a>
        <a href="${WHATSAPP_LINK}" class="social-link">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} ThammuTV - Premium Content Delivery Service. All Rights Reserved.</p>
    </div>
  </div>

  <script>
    // Add animation to the get file button
    document.querySelector('.get-file-button').addEventListener('mouseenter', function() {
      this.querySelector('.button-arrow').style.animation = 'none';
      setTimeout(() => {
        this.querySelector('.button-arrow').style.animation = 'bounce 1.5s infinite';
      }, 10);
    });
    
    // Play icon animation
    document.querySelector('.play-icon').addEventListener('click', function() {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-play"></i>';
        alert('Preview available for premium users only');
      }, 1500);
    });
  </script>
</body>
</html>`;
}

function generateErrorPage(CHANNEL_LINK) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ThammuTV - Link Error</title>
  <style>
    body { 
      font-family: 'Poppins', sans-serif;
      background: #1e293b;
      padding: 2rem;
      text-align: center;
      color: white;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .error-card {
      background: rgba(30, 41, 59, 0.8);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
      max-width: 600px;
      margin: 2rem auto;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .emoji {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      animation: pulse 2s infinite;
    }
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: #ff6b00;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: #cbd5e1;
      line-height: 1.6;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 15px 30px;
      background: linear-gradient(to right, #6a11cb, #2575fc);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      margin-top: 1rem;
      font-weight: bold;
      font-size: 1.2rem;
      transition: all 0.3s;
    }
    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(37, 117, 252, 0.3);
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="error-card">
    <div class="emoji">⚠️</div>
    <h2>Invalid Link Detected!</h2>
    <p>Please use proper ThammuTV links only</p>
    <p>Join our official channel for updates and valid links:</p>
    <a href="${CHANNEL_LINK}" class="btn">
      <i class="fab fa-telegram"></i> Join Telegram Channel
    </a>
  </div>
</body>
</html>`;
}
