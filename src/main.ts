import './index.css'

const app = document.getElementById('app')!

const content = `
<header class="hero">
  <div class="hero-content">
    <h1>SHENZHEN</h1>
    <p class="subtitle">China's Most Dynamic Economic Powerhouse！！！</p>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-number">17M+</div>
        <div class="stat-label">Population</div>
      </div>
      <div class="stat">
        <div class="stat-number">1980</div>
        <div class="stat-label">Founded as SEZ</div>
      </div>
      <div class="stat">
        <div class="stat-number">#1</div>
        <div class="stat-label">Tech Hub</div>
      </div>
    </div>
  </div>
  <div class="scroll-indicator">
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
      <path d="M12 16l-6-6h12l-6 6z"/>
    </svg>
  </div>
</header>

<section class="section" id="about">
  <h2 class="section-title">About Shenzhen</h2>
  <p class="section-subtitle">From a fishing village to a global technology powerhouse</p>
  
  <div class="about-grid">
    <div class="about-text">
      <h3>A Miracle of Modern Development</h3>
      <p>
        Shenzhen is a major city in southern Guangdong Province, China. It sits at the southern tip of the Chinese mainland on the east bank of the Pearl River Delta, bordering Hong Kong to the south.
      </p>
      <p>
        Established as China's first Special Economic Zone in 1980, Shenzhen has transformed from a small fishing village into one of the world's most influential economic centers. This transformation, completed in just four decades, is considered one of the greatest urban development miracles in human history.
      </p>
      <p>
        Today, Shenzhen is home to some of the world's largest tech companies including Huawei, Tencent, DJI, and BYD, making it the Silicon Valley of China.
      </p>
    </div>
    <div class="about-image">
      🏙️
    </div>
  </div>
</section>

<section class="section" id="features" style="background: white;">
  <h2 class="section-title">Key Features</h2>
  <p class="section-subtitle">What makes Shenzhen unique</p>
  
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">💻</div>
      <h4>Technology Hub</h4>
      <p>Home to Tencent, Huawei, DJI, and thousands of tech startups. The world's leading innovation center for electronics and software.</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon">🌊</div>
      <h4>Coastal Beauty</h4>
      <p>Beautiful beaches along Dapeng Bay, stunning coastal scenery, and pleasant subtropical climate year-round.</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon">🏙️</div>
      <h4>Modern Architecture</h4>
      <p>Futuristic skyscrapers, innovative urban design, and one of the world's most recognizable skylines.</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon">🌿</div>
      <h4>Green City</h4>
      <p>Over 1,000 parks, extensive greenbelts, and a commitment to sustainable urban development and eco-friendly policies.</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon">🎭</div>
      <h4>Cultural Fusion</h4>
      <p>A unique blend of traditional Chinese culture and modern cosmopolitan lifestyle, with diverse international influences.</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon">🚀</div>
      <h4>Entrepreneurial Spirit</h4>
      <p>One of the easiest places to start a business in China, with favorable policies and a thriving startup ecosystem.</p>
    </div>
  </div>
</section>

<section class="section" id="attractions">
  <h2 class="section-title">Must-Visit Attractions</h2>
  <p class="section-subtitle">Experience the best of Shenzhen</p>
  
  <div class="attractions-list">
    <div class="attraction-item">
      <h4>Window of the World</h4>
      <p>Theme park featuring miniature replicas of world-famous landmarks</p>
    </div>
    
    <div class="attraction-item">
      <h4>Shenzhen Bay Park</h4>
      <p>Scenic waterfront park with stunning views of Hong Kong</p>
    </div>
    
    <div class="attraction-item">
      <h4>Dafen Oil Painting Village</h4>
      <p>Famous art village producing 60% of the world's oil paintings</p>
    </div>
    
    <div class="attraction-item">
      <h4>Shenzhen Happy Valley</h4>
      <p>Large amusement park with thrilling rides and entertainment</p>
    </div>
    
    <div class="attraction-item">
      <h4>Dapeng Fortress</h4>
      <p>500-year-old Ming Dynasty coastal defense fortress</p>
    </div>
    
    <div class="attraction-item">
      <h4>Shekou Sea World</h4>
      <p>Waterfront entertainment complex with restaurants and bars</p>
    </div>
    
    <div class="attraction-item">
      <h4>Shenzhen Safari Park</h4>
      <p>One of China's largest zoological parks with pandas and more</p>
    </div>
    
    <div class="attraction-item">
      <h4>Mission Hills</h4>
      <p>World's largest golf club with 12 championship courses</p>
    </div>
  </div>
</section>

<section class="section" id="food" style="background: white;">
  <h2 class="section-title">Local Cuisine</h2>
  <p class="section-subtitle">Taste authentic Cantonese flavors</p>
  
  <div class="food-grid">
    <div class="food-item">
      <div class="emoji">🥟</div>
      <h4>Dim Sum</h4>
      <p>Traditional Cantonese brunch with various small dishes</p>
    </div>
    
    <div class="food-item">
      <div class="emoji">🦐</div>
      <h4>Seafood</h4>
      <p>Fresh seafood from the South China Sea</p>
    </div>
    
    <div class="food-item">
      <div class="emoji">🥜</div>
      <h4>Cha Siu</h4>
      <p>Classic Cantonese roasted pork with sweet glaze</p>
    </div>
    
    <div class="food-item">
      <div class="emoji">🍜</div>
      <h4>Beef Chow Fun</h4>
      <p>Stir-fried rice noodles with tender beef slices</p>
    </div>
    
    <div class="food-item">
      <div class="emoji">🥛</div>
      <h4>Egg Tarts</h4>
      <p>Buttery pastry with creamy egg custard filling</p>
    </div>
    
    <div class="food-item">
      <div class="emoji">🍵</div>
      <h4>Yixing Tea</h4>
      <p>Premium Chinese tea served in traditional teapots</p>
    </div>
  </div>
</section>

<section class="section" id="transport">
  <h2 class="section-title">Getting Around</h2>
  <p class="section-subtitle">Modern and efficient transportation</p>
  
  <div class="transport-grid">
    <div class="transport-item">
      <div class="icon">🚇</div>
      <h4>Metro</h4>
      <p>Extensive subway system with 12+ lines</p>
    </div>
    
    <div class="transport-item">
      <div class="icon">🚌</div>
      <h4>Bus Network</h4>
      <p>Comprehensive bus coverage across the city</p>
    </div>
    
    <div class="transport-item">
      <div class="icon">🚕</div>
      <h4>Ride-hailing</h4>
      <p>Easy access via Didi and taxis</p>
    </div>
    
    <div class="transport-item">
      <div class="icon">🚄</div>
      <h4>High-Speed Rail</h4>
      <p>Connected to Hong Kong and major cities</p>
    </div>
    
    <div class="transport-item">
      <div class="icon">✈️</div>
      <h4>Airport</h4>
      <p>Shenzhen Bao'an International Airport</p>
    </div>
  </div>
</section>

<footer>
  <p>Discover Shenzhen - Where Innovation Meets Opportunity</p>
  <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.6;">
    Special Economic Zone since August 26, 1980
  </p>
</footer>
`

app.innerHTML = content
