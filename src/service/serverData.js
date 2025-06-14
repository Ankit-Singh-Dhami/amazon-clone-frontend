// Sign Up
export const signinData = async (data) => {
  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.success) {
    alert("Signup successful!");
    redirect("/");
  } else {
    alert(result.message || "Signup failed");
  }
};

// Login
export const loginData = async (data) => {
  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.ok) {
    localStorage.setItem("amazonUserToken", result.token);
    localStorage.setItem("amazonUser", JSON.stringify(result.user));

    alert("Login successful!");
    return result;
  } else {
    alert(result.message || "Login failed");
    throw new Error(result.message || "Login failed");
  }
};

// Get Cart
export const getCart = async () => {
  const token = localStorage.getItem("amazonUserToken");

  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const result = await response.json();
  return result.cart; // Correct!
};

// Add to Cart
export const addCartToServer = async (item) => {
  const token = localStorage.getItem("amazonUserToken");
  const userData = JSON.parse(localStorage.getItem("amazonUser"));
  const userId = userData?._id;
  console.log(item, userId);

  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...item, userId }),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to cart");
  }

  const result = await response.json();

  return result; // Correct!
};

// Delete from Cart
export const deleteCart = async (itemId) => {
  const token = localStorage.getItem("amazonUserToken");
  console.log(itemId);
  const response = await fetch(
    `https://amazon-clone-backend-ankit.onrender.com/api/amazon/cart/${itemId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete item from cart");
  }

  const result = await response.json();
  return result.cart; // Correct!
};

// Add Product
export const addProduct = async (item) => {
  const token = localStorage.getItem("amazonUserToken");

  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  const result = await response.json();
  return result.product; // Correct!
};

// Get All Products
export const getProducts = async () => {
  const token = localStorage.getItem("amazonUserToken");

  const response = await fetch("https://amazon-clone-backend-ankit.onrender.com/api/amazon/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();
  return result.products; // Correct!
};

// Delete Product by ID
export const deleteProduct = async (productId) => {
  const token = localStorage.getItem("amazonUserToken");

  const response = await fetch(
    `https://amazon-clone-backend-ankit.onrender.com/api/amazon/products/${productId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  const result = await response.json();
  return result; // returns full response, e.g. { success: true, message, ... }
};
