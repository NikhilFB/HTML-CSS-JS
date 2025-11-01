const restaurants = [
  {
    id:1,
    name: "Viraj Multi Cuisine Restaurant",
    address: "Opp BVB Engg. College, Vidyanagar, Hubli - 580031, Karnataka, India",
    country: "India",
    rating: 4.4,
    menu: [
      { name: "Paneer Butter Masala", price: 220, rating: 4.6, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Chicken Biryani", price: 250, rating: 4.5, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" },
      { name: "Tandoori Roti", price: 40, rating: 4.4, image: "https://images.unsplash.com/photo-1603898071441-1d8e3e04dfd4" },
      { name: "Gobi Manchurian", price: 180, rating: 4.3, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
      { name: "Butter Chicken", price: 260, rating: 4.7, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" }
    ]
  },
  {
    id:2,
    name: "Sindhu Bar",
    address: "Pune Bangalore Road, Kamaripet, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.1,
    menu: [
      { name: "Chicken Tikka", price: 280, rating: 4.3, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Mutton Kebab", price: 320, rating: 4.4, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" },
      { name: "Fish Fry", price: 300, rating: 4.2, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Chicken Lollipop", price: 230, rating: 4.5, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Veg Crispy", price: 190, rating: 4.1, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" }
    ]
  },
  {
    id:3,
    name: "Niyaz",
    address: "Pune Bangalore Road, Vidyanagar, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.5,
    menu: [
      { name: "Mutton Biryani", price: 270, rating: 4.8, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" },
      { name: "Chicken Korma", price: 260, rating: 4.6, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Veg Pulao", price: 180, rating: 4.3, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Tandoori Chicken", price: 300, rating: 4.7, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Paratha", price: 60, rating: 4.2, image: "https://images.unsplash.com/photo-1603898071441-1d8e3e04dfd4" }
    ]
  },
  {
    id:4,
    name: "Chini Mini",
    address: "Pune Bangalore Road, Vidyanagar, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.0,
    menu: [
      { name: "Hakka Noodles", price: 180, rating: 4.3, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Veg Fried Rice", price: 160, rating: 4.2, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Spring Roll", price: 150, rating: 4.1, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Chilli Paneer", price: 190, rating: 4.4, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
      { name: "Hot and Sour Soup", price: 120, rating: 4.0, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" }
    ]
  },
  {
    id:5,
    name: "KIMS Canteen",
    address: "Pune Bangalore Road, Vidyanagar, Hubli - 580022, Karnataka, India",
    country: "India",
    rating: 3.8,
    menu: [
      { name: "Idli Vada", price: 60, rating: 4.2, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Masala Dosa", price: 80, rating: 4.3, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Upma", price: 50, rating: 4.0, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
      { name: "Filter Coffee", price: 30, rating: 4.5, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Puri Bhaji", price: 70, rating: 4.1, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" }
    ]
  },
  {
    id:6,
    name: "Gurudatt Bhavan",
    address: "Pune Bangalore Road, Vidyanagar, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.2,
    menu: [
      { name: "Poori Saagu", price: 70, rating: 4.3, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" },
      { name: "Set Dosa", price: 60, rating: 4.2, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Coffee", price: 30, rating: 4.5, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Mini Meals", price: 150, rating: 4.4, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Lemon Rice", price: 90, rating: 4.1, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" }
    ]
  },
  {
    id:7,
    name: "New Karnataka Bhavan",
    address: "Pune Bangalore Road, Vidyanagar, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.1,
    menu: [
      { name: "Meals", price: 140, rating: 4.4, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Masala Dosa", price: 80, rating: 4.5, image: "https://images.unsplash.com/photo-1601050690597-7f9af08f2d42" },
      { name: "Rava Idli", price: 70, rating: 4.3, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { name: "Bisibele Bath", price: 100, rating: 4.2, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Vada Sambar", price: 60, rating: 4.1, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" }
    ]
  },
  {
    id:8,
    name: "Olive Garden Restaurant",
    address: "Koppikar Road, Kamaripet, Hubli - 580020, Karnataka, India",
    country: "India",
    rating: 4.5,
    menu: [
      { name: "Pasta Alfredo", price: 280, rating: 4.6, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" },
      { name: "Veg Lasagna", price: 300, rating: 4.5, image: "https://images.unsplash.com/photo-1625944572244-412f3f1d4b37" },
      { name: "Garlic Bread", price: 120, rating: 4.4, image: "https://images.unsplash.com/photo-1603898037225-1b3e19a4a24f" },
      { name: "Cheese Pizza", price: 250, rating: 4.6, image: "https://images.unsplash.com/photo-1601924574188-6b66a3fa761e" },
      { name: "Tomato Soup", price: 110, rating: 4.3, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" }
    ]
  }
]
export default restaurants;
