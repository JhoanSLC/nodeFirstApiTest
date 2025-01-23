INSERT INTO "category" ("name") VALUES
  ('Electronics'),
  ('Clothing'),
  ('Home Appliances'),
  ('Sports & Outdoors'),
  ('Books'),
  ('Beauty & Personal Care'),
  ('Toys & Games'),
  ('Automotive'),
  ('Furniture'),
  ('Groceries');

INSERT INTO "product" ("name", "description", "price", "categoryId") VALUES
  ('Smartphone', 'Latest model with high resolution camera and fast processor', 699.99, 1),  -- Electronics
  ('Laptop', '15-inch laptop with Intel i7 processor and 16GB RAM', 1200.00, 1),  -- Electronics
  ('T-Shirt', 'Cotton T-shirt in various sizes', 19.99, 2),  -- Clothing
  ('Jeans', 'Denim jeans in slim fit', 49.99, 2),  -- Clothing
  ('Washing Machine', 'Front-load washing machine with energy efficiency', 399.99, 3),  -- Home Appliances
  ('Refrigerator', 'Energy-efficient refrigerator with smart features', 799.99, 3),  -- Home Appliances
  ('Football', 'Outdoor football for sports activities', 29.99, 4),  -- Sports & Outdoors
  ('Camping Tent', 'Four-person tent for camping trips', 119.99, 4),  -- Sports & Outdoors
  ('The Great Gatsby', 'Classic novel by F. Scott Fitzgerald', 14.99, 5); -- Books
 