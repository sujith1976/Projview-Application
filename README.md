# CodeCraft - Web Development Projects Marketplace

CodeCraft is a modern platform for selling and showcasing web development projects with demonstration videos. This platform allows developers to sell their ready-to-deploy web solutions to clients who need quick and reliable web development projects.

## About CodeCraft

My Web Projects, Built to Impress  
Explore the web development projects I've crafted with care and expertise.  
Each comes with a demo video so you can see it in action before buying.  
If you like what you see, it's just a click away from being yours.

## Features

- **Project Showcase**: Display your web development projects with detailed descriptions, features, and specifications.
- **Video Demonstrations**: Each project includes video demonstrations to showcase functionality.
- **Project Categories**: Organize projects by categories like E-Commerce, Portfolio, Dashboard, Blog, etc.
- **Project Filtering**: Users can filter projects by category, price, and popularity.
- **Project Search**: Search functionality to find specific projects quickly.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Modern UI**: Clean and professional user interface with smooth animations.

## Pages

1. **Home Page**: Main landing page with featured projects, statistics, about section, and testimonials.
2. **Projects Page**: Browse all available projects with filtering and search capabilities.
3. **Project Detail Page**: Detailed view of each project with specifications, features, demo video, and purchase options.

## Technology Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome (for icons)
- Google Fonts (Poppins)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/sujith1976/Projview-Application.git
   ```

2. Open the project in your code editor.

3. Open `index.html` in your browser to view the site.

## Customization

### Adding Your Projects

To add your own projects, modify the project cards in the `index.html` and `projects.html` files:

```html
<div class="project-card" data-category="your-category">
    <div class="project-image">
        <img src="path/to/your/image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="view-demo"><i class="fas fa-play-circle"></i> Watch Demo</a>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Your project description goes here.</p>
        <div class="project-meta">
            <span class="price">$XXX</span>
            <a href="project-detail.html" class="btn primary">View Details</a>
        </div>
    </div>
</div>
```

### Changing Colors

The color scheme can be modified in the `styles.css` file:

```css
:root {
    --primary-color: #3a86ff; /* Change this to your preferred primary color */
    --secondary-color: #ff006e; /* Change this to your preferred secondary color */
    --dark-color: #14213d; /* Change this to your preferred dark color */
    /* ... other color variables ... */
}
```

## Deployment

This is a static website that has been deployed using Vercel:

- **Live Demo**: [projview-application.vercel.app](https://projview-application.vercel.app)
- **Alternative Link**: [projview-application-e54qkv72a.vercel.app](https://projview-application-e54qkv72a.vercel.app)

You can also deploy this website on any web hosting service:

1. Upload all files to your web hosting server.
2. Ensure that `index.html` is set as the default page.
3. Your CodeCraft platform will be live!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Placeholder images from [Placeholder.com](https://placeholder.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## Contact

For any questions or support, please contact:
- Email: your.email@example.com
- Website: [yourwebsite.com](https://yourwebsite.com)
