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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ThammuTV - Premium Access Gateway</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
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
      --dark: #0f172a;
      --light: #f8f9fa;
      --darker: #0a1120;
    }
    
    body {
      background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
      min-height: 100vh;
      color: white;
      position: relative;
      overflow-x: hidden;
    }
    
    body::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at top right, rgba(106, 17, 203, 0.1) 0%, transparent 40%);
      z-index: -1;
    }
    
    .container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .header-section {
      padding: 80px 0 40px;
      position: relative;
      text-align: center;
      background: linear-gradient(to bottom, var(--darker), var(--dark));
    }
    
    .exclusive-badge {
      position: absolute;
      top: 30px;
      right: 5%;
      background: linear-gradient(45deg, var(--premium), #ff8c00);
      color: white;
      padding: 8px 25px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 20px rgba(255, 107, 0, 0.3);
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .logo {
      font-size: 5rem;
      margin-bottom: 20px;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 15px;
      font-weight: 800;
      background: linear-gradient(to right, #fff, #cbd5e1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    }
    
    .subtitle {
      font-size: 1.3rem;
      color: #94a3b8;
      max-width: 700px;
      margin: 0 auto 40px;
      line-height: 1.6;
    }
    
    .content-section {
      padding: 80px 0;
      position: relative;
      background: linear-gradient(to bottom, var(--dark), #0d1425);
    }
    
    .content-wrapper {
      display: flex;
      gap: 50px;
      align-items: center;
    }
    
    .content-preview {
      flex: 1;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      aspect-ratio: 16/9;
      background: linear-gradient(45deg, #1e293b, #0f172a);
    }
    
    .preview-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(45deg, rgba(106, 17, 203, 0.3), rgba(37, 117, 252, 0.3));
    }
    
    .play-icon {
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(10px);
    }
    
    .play-icon i {
      color: white;
      font-size: 3rem;
      margin-left: 8px;
    }
    
    .content-info {
      flex: 1;
    }
    
    .content-title {
      font-size: 2.5rem;
      margin-bottom: 25px;
      color: #fff;
      font-weight: 700;
      background: linear-gradient(to right, #fff, #e2e8f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .content-description {
      color: #cbd5e1;
      line-height: 1.8;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .features {
      margin-bottom: 40px;
    }
    
    .feature {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      font-size: 1.1rem;
      color: #e2e8f0;
    }
    
    .feature i {
      margin-right: 15px;
      width: 30px;
      height: 30px;
      background: rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3b82f6;
    }
    
    .token-display {
      background: rgba(15, 23, 42, 0.7);
      padding: 20px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      display: inline-block;
      margin-top: 10px;
    }
    
    .token-label {
      color: #94a3b8;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    
    .token {
      font-weight: 700;
      color: #60a5fa;
      font-size: 1.3rem;
      word-break: break-all;
    }
    
    .get-file-section {
      padding: 80px 0;
      background: linear-gradient(to bottom, #0d1425, #0a1120);
      position: relative;
      text-align: center;
    }
    
    .get-file-section::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.8));
    }
    
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 40px;
      font-weight: 700;
      background: linear-gradient(to right, var(--free), var(--premium));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .get-file-button {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      padding: 25px 60px;
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      color: white;
      font-size: 1.8rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 70px;
      box-shadow: 0 15px 35px rgba(37, 117, 252, 0.4);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      margin-bottom: 40px;
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
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(37, 117, 252, 0.6);
    }
    
    .button-icon {
      font-size: 2.5rem;
    }
    
    .button-text {
      position: relative;
    }
    
    .button-arrow {
      margin-left: 20px;
      animation: bounce 1.5s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
      40% {transform: translateX(15px);}
      60% {transform: translateX(8px);}
    }
    
    .instruction {
      color: #94a3b8;
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    .highlight {
      color: #60a5fa;
      font-weight: 600;
    }
    
    .plans-section {
      padding: 80px 0;
      background: linear-gradient(to bottom, #0a1120, var(--darker));
      position: relative;
    }
    
    .plans-section::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(10, 17, 32, 0.9));
    }
    
    .plans-container {
      display: flex;
      gap: 40px;
      margin-top: 50px;
    }
    
    .plan-card {
      flex: 1;
      background: linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.7));
      border-radius: 25px;
      overflow: hidden;
      padding: 40px 30px;
      transition: all 0.4s ease;
      position: relative;
      z-index: 1;
      backdrop-filter: blur(10px);
    }
    
    .plan-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), transparent);
      z-index: -1;
      opacity: 0.3;
    }
    
    .plan-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    }
    
    .plan-header {
      padding-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 30px;
    }
    
    .free .plan-header {
      background: linear-gradient(to right, #16a34a, #22c55e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .premium .plan-header {
      background: linear-gradient(to right, #ea580c, #f97316);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .plan-name {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    .plan-price {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 5px;
    }
    
    .premium .plan-price::after {
      content: "/month";
      font-size: 1.2rem;
      font-weight: normal;
      color: #f8fafc;
    }
    
    .plan-features {
      margin-bottom: 30px;
    }
    
    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      color: #e2e8f0;
      font-size: 1.1rem;
    }
    
    .feature-item i {
      margin-right: 15px;
      font-size: 1.3rem;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .free .feature-item i {
      background: rgba(34, 197, 94, 0.15);
      color: #22c55e;
    }
    
    .premium .feature-item i {
      background: rgba(249, 115, 22, 0.15);
      color: #f97316;
    }
    
    .plan-button {
      display: block;
      text-align: center;
      padding: 18px;
      border-radius: 60px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s;
      cursor: pointer;
      font-size: 1.2rem;
    }
    
    .free .plan-button {
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      border: 2px solid rgba(34, 197, 94, 0.3);
    }
    
    .premium .plan-button {
      background: linear-gradient(to right, #ea580c, #f97316);
      color: white;
      box-shadow: 0 10px 25px rgba(234, 88, 12, 0.3);
    }
    
    .plan-button:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .social-section {
      padding: 100px 0;
      background: linear-gradient(to bottom, var(--darker), #080e1b);
      position: relative;
      text-align: center;
    }
    
    .social-section::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(8, 14, 27, 0.9));
    }
    
    .social-title {
      font-size: 2rem;
      margin-bottom: 50px;
      font-weight: 700;
      color: #e2e8f0;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px 40px;
      background: rgba(15, 23, 42, 0.6);
      border-radius: 70px;
      color: #e2e8f0;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
      border: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 1.2rem;
      min-width: 250px;
    }
    
    .social-link:hover {
      transform: translateY(-8px);
      background: rgba(37, 117, 252, 0.2);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    .social-link i {
      font-size: 1.8rem;
    }
    
    .telegram { color: #0088cc; }
    .instagram { color: #e1306c; }
    .website { color: #3b82f6; }
    .whatsapp { color: #25D366; }
    
    .footer {
      text-align: center;
      padding: 40px 0;
      color: #64748b;
      font-size: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background: #080e1b;
    }
    
    /* Mobile-first responsive design */
    @media (max-width: 992px) {
      .content-wrapper {
        flex-direction: column;
      }
      
      .plans-container {
        flex-direction: column;
      }
      
      h1 {
        font-size: 2.5rem;
      }
      
      .content-title {
        font-size: 2rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .get-file-button {
        padding: 20px 40px;
        font-size: 1.5rem;
      }
      
      .social-link {
        min-width: 200px;
        padding: 15px 30px;
      }
    }
    
    @media (max-width: 768px) {
      .header-section {
        padding: 60px 0 30px;
      }
      
      .logo {
        font-size: 4rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .subtitle {
        font-size: 1.1rem;
      }
      
      .content-section, 
      .get-file-section, 
      .plans-section, 
      .social-section {
        padding: 60px 0;
      }
      
      .content-title {
        font-size: 1.8rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .plan-name {
        font-size: 1.7rem;
      }
      
      .plan-price {
        font-size: 2.5rem;
      }
      
      .get-file-button {
        width: 100%;
        max-width: 90%;
        padding: 18px;
        font-size: 1.3rem;
      }
      
      .button-icon {
        font-size: 1.8rem;
      }
      
      .social-link {
        width: 100%;
        max-width: 300px;
      }
      
      .exclusive-badge {
        position: relative;
        top: 0;
        right: 0;
        margin: 0 auto 25px;
        width: max-content;
      }
    }
  </style>
</head>
<body>
  <!-- Header Section -->
  <section class="header-section">
    <div class="container">
      <div class="exclusive-badge">
        <i class="fas fa-crown"></i> EXCLUSIVE CONTENT
      </div>
      <div class="logo">
        <i class="fas fa-film"></i>
      </div>
      <h1>PREMIUM ACCESS GATEWAY</h1>
      <p class="subtitle">Unlock premium content with seamless access through our Telegram integration</p>
    </div>
  </section>
  
  <!-- Content Section -->
  <section class="content-section">
    <div class="container">
      <div class="content-wrapper">
        <div class="content-preview">
          <div class="preview-overlay">
            <div class="play-icon">
              <i class="fas fa-play"></i>
            </div>
          </div>
        </div>
        <div class="content-info">
          <h2 class="content-title">Premium Content Access</h2>
          <p class="content-description">
            Experience our premium content with the highest quality streaming. Our platform offers exclusive access to the latest releases in stunning quality with enhanced audio.
          </p>
          <div class="features">
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>4K Ultra HD Resolution</span>
            </div>
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>HDR10 Enhanced Color</span>
            </div>
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>Dolby Atmos Audio</span>
            </div>
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>Exclusive Early Releases</span>
            </div>
          </div>
          <div class="token-display">
            <div class="token-label">Your access token:</div>
            <div class="token">hdndlkndij</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Get File Section -->
  <section class="get-file-section">
    <div class="container">
      <h2 class="section-title">Ready to Access Your Content?</h2>
      <a href="https://telegram.me/QuickShareXBot?start=hdndlkndij" class="get-file-button">
        <span class="button-icon"><i class="fab fa-telegram"></i></span>
        <span class="button-text">GET YOUR FILE NOW</span>
        <span class="button-arrow"><i class="fas fa-arrow-right"></i></span>
      </a>
      <p class="instruction">Click the button above to access your content via Telegram. <span class="highlight">Scroll down</span> to explore our premium plans for enhanced access.</p>
    </div>
  </section>
  
  <!-- Plans Section -->
  <section class="plans-section">
    <div class="container">
      <h2 class="section-title">Choose Your Plan</h2>
      <div class="plans-container">
        <div class="plan-card free">
          <div class="plan-header">
            <h3 class="plan-name">Free Access</h3>
            <div class="plan-price">₹0</div>
          </div>
          <div class="plan-features">
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>Basic content access</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>Token verification required</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>Limited daily access</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-times"></i>
              <span>No premium content</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-times"></i>
              <span>Ads supported</span>
            </div>
          </div>
          <div class="plan-button">Continue with Free</div>
        </div>
        
        <div class="plan-card premium">
          <div class="plan-header">
            <h3 class="plan-name">Premium Access</h3>
            <div class="plan-price">₹99</div>
          </div>
          <div class="plan-features">
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>Unlimited access to all content</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>No token verification</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>24/7 priority access</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>All premium content unlocked</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check"></i>
              <span>Ad-free experience</span>
            </div>
          </div>
          <a href="https://telegram.me/ITACHI24X7" class="plan-button">Buy Now on Telegram</a>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Social Section -->
  <section class="social-section">
    <div class="container">
      <h2 class="social-title">Connect With Us</h2>
      <div class="social-links">
        <a href="https://telegram.me/ITACHI24X7" class="social-link">
          <i class="fab fa-telegram telegram"></i> Telegram Channel
        </a>
        <a href="https://instagram.com/moviefy.shop" class="social-link">
          <i class="fab fa-instagram instagram"></i> Instagram
        </a>
        <a href="https://www.moviefy.shop/" class="social-link">
          <i class="fas fa-globe website"></i> Official Website
        </a>
        <a href="https://wa.me/yourwhatsapp" class="social-link">
          <i class="fab fa-whatsapp whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>© 2023 ThammuTV - Premium Content Delivery Service. All Rights Reserved.</p>
    </div>
  </footer>

  <script>
    // Add animation to the get file button
    const getFileButton = document.querySelector('.get-file-button');
    if (getFileButton) {
      getFileButton.addEventListener('mouseenter', function() {
        const arrow = this.querySelector('.button-arrow');
        if (arrow) {
          arrow.style.animation = 'none';
          setTimeout(() => {
            arrow.style.animation = 'bounce 1.5s infinite';
          }, 10);
        }
      });
    }
    
    // Play icon animation
    const playIcon = document.querySelector('.play-icon');
    if (playIcon) {
      playIcon.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-play"></i>';
          alert('Preview available for premium users only');
        }, 1500);
      });
    }
    
    // Plan card hover effects
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
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
    
    @media (max-width: 768px) {
      .error-card {
        padding: 2rem;
      }
      h2 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1rem;
      }
      .btn {
        padding: 12px 24px;
        font-size: 1rem;
      }
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
