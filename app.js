let products = [];
let categories = [];

// Load products data
async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        products = data.products;
        categories = data.categories;
    } catch (e) {
        console.warn("Lỗi khi tải data.json (có thể do chạy trực tiếp file://).", e);
        // Fallback data
        categories = [
            { id: "man-hinh", name: "Màn hình di động" },
            { id: "samsung-dex", name: "Box Samsung Dex" },
            { id: "man-hinh-oto", name: "Màn hình tích hợp Oto" },
            { id: "gia-do-oto", name: "Khung Giá Đỡ Oto" }
        ];
        products = [
            {
                id: 1, categoryId: "man-hinh", name: "Màn hình Arzopa 15.6\"", price: "3.500.000đ",
                image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Màn hình di động, 1080P FHD, mỏng nhẹ.", description: "Màn hình di động mỏng nhẹ, độ phân giải cao."
            },
            {
                id: 2, categoryId: "samsung-dex", name: "Box Samsung Dex", price: "1.200.000đ",
                image: "https://images.unsplash.com/photo-1585184394274-8c9069221146?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Biến điện thoại Samsung thành máy tính.", description: "Box Samsung Dex giúp xuất đồ họa và ứng dụng."
            },
            {
                id: 3, categoryId: "man-hinh-oto", name: "Màn hình tích hợp Oto", price: "5.500.000đ",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Màn hình thông minh Carplay.", description: "Màn hình cảm ứng tích hợp đa tính năng cho xe hơi."
            },
            {
                id: 4, categoryId: "gia-do-oto", name: "Khung Giá Đỡ Oto", price: "250.000đ",
                image: "https://images.unsplash.com/photo-1620054366668-cb0ed5136ff9?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Giá đỡ điện thoại chắc chắn.", description: "Khung giá đỡ điện thoại thiết kế thông minh."
            }
        ];
    }
}

// Initialize application
async function init() {
    await loadData();
    window.addEventListener('hashchange', router);
    router();
}

// Render Home Page
function renderHome() {
    return `
        <!-- Hero Banner -->
        <div class="hero-section d-flex align-items-center mb-5" style="background-image: url('https://images.unsplash.com/photo-1627389803157-54b6113b2ce4?auto=format&fit=crop&q=80&w=1920');">
            <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0,0,0,0.6);"></div>
            <div class="container position-relative z-index-1 text-white py-5">
                <div class="row">
                    <div class="col-lg-7 col-md-9 pt-5 mt-5">
                        <span class="badge bg-danger rounded-0 px-3 py-2 mb-3 tracking-wider fw-bold">NEW ARRIVAL</span>
                        <h1 class="display-3 fw-black mb-3 tracking-tighter" style="line-height: 1.1;">ARZOPA Z3FC<br>NEW & IMPROVED</h1>
                        <p class="lead mb-5 opacity-75 fs-4" style="max-width: 600px;">Nâng tầm trải nghiệm làm việc và giải trí với màn hình di động độ phân giải cực nét, mỏng nhẹ chưa từng thấy.</p>
                        <a href="#product/1" class="btn btn-light btn-lg px-5 py-3 fw-bold rounded-0 text-uppercase tracking-wider">Khám phá ngay</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container my-5 py-4">
            <div class="text-center mb-5">
                <h2 class="fw-black display-6 tracking-tighter mb-2">SẢN PHẨM NỔI BẬT</h2>
                <div class="mx-auto bg-dark" style="height: 3px; width: 60px;"></div>
            </div>
            <div class="row g-4 mb-5">
                ${products.slice(0, 3).map(p => productCard(p)).join('')}
            </div>
            
            <!-- Category Banner Grid -->
            <div class="row g-4 mt-5">
                <div class="col-md-6">
                    <div class="position-relative overflow-hidden group cursor-pointer" onclick="window.location.hash='#products'" style="height: 400px; background-color: #f1f1f1;">
                        <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800" class="position-absolute w-100 h-100 object-fit-cover opacity-75 product-img" alt="Phụ kiện">
                        <div class="position-absolute bottom-0 start-0 p-4 w-100" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                            <h3 class="text-white fw-bold mb-1">Thiết Bị Oto</h3>
                            <p class="text-white mb-0 opacity-75">Khám phá phụ kiện</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="position-relative overflow-hidden group cursor-pointer" onclick="window.location.hash='#products'" style="height: 400px; background-color: #f1f1f1;">
                        <img src="https://images.unsplash.com/photo-1621501103258-3e120d588a23?auto=format&fit=crop&q=80&w=800" class="position-absolute w-100 h-100 object-fit-cover opacity-75 product-img" alt="Màn hình">
                        <div class="position-absolute bottom-0 start-0 p-4 w-100" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                            <h3 class="text-white fw-bold mb-1">Không Gian Làm Việc</h3>
                            <p class="text-white mb-0 opacity-75">Nâng cao hiệu suất</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5 pt-4">
                <a href="#products" class="btn btn-outline-dark btn-lg px-5 py-3 fw-bold rounded-0 tracking-wider">XEM TẤT CẢ SẢN PHẨM</a>
            </div>
        </div>
    `;
}

// Render Single Product Card (Arzopa style)
function productCard(product) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100 border-0 rounded-0 product-card text-start">
                <a href="#product/${product.id}" class="text-decoration-none text-dark d-flex flex-column h-100 position-relative group-hover">
                    <div class="img-zoom-container position-relative bg-light" style="padding-top: 100%;">
                        <img src="${product.image}" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover product-img p-4 mix-blend-multiply" alt="${product.name}">
                    </div>
                    <div class="card-body px-0 py-3 d-flex flex-column">
                        <h5 class="card-title fw-bold fs-6 mb-1">${product.name}</h5>
                        <div class="d-flex align-items-center mb-2">
                            <div class="text-warning me-2" style="font-size: 0.8rem;">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <span class="text-gray-400" style="font-size: 0.8rem;">12</span>
                        </div>
                        <p class="text-dark fw-bold fs-6 mb-3 mt-auto">${product.price}</p>
                        <button class="btn btn-outline-dark w-100 rounded-0 py-2 fw-bold text-uppercase tracking-wider fs-7 btn-buy-now">Buy Now</button>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Render Products Page (Arzopa Accessories Collection Style with Sidebar)
function renderProducts(categoryId = null) {
    let currentCategory = categories.find(c => c.id === categoryId);
    let title = currentCategory ? currentCategory.name : "Tất Cả Sản Phẩm";
    let filteredProducts = categoryId ? products.filter(p => p.categoryId === categoryId) : products;

    return `
        <div class="collection-header bg-light py-5 mb-5 text-center px-3">
            <h1 class="display-5 fw-black tracking-tighter mb-3">${title}</h1>
            <p class="fs-5 text-secondary max-w-2xl mx-auto">Hoàn thiện không gian làm việc và giải trí của bạn với các phụ kiện thiết yếu. Được thiết kế cho tính di động, bảo vệ và hiệu suất tối đa.</p>
        </div>
        
        <div class="container mb-5 pb-5">
            <!-- Breadcrumbs -->
            <nav aria-label="breadcrumb" class="mb-5 border-bottom pb-3">
                <ol class="breadcrumb fs-7 tracking-wider text-uppercase mb-0">
                    <li class="breadcrumb-item"><a href="#home" class="text-dark text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item"><a href="#products" class="text-dark text-decoration-none">Collections</a></li>
                    <li class="breadcrumb-item active" aria-current="page">${title}</li>
                </ol>
            </nav>
            
            <div class="row">
                <!-- Sidebar -->
                <div class="col-lg-3 mb-5">
                    <h5 class="fw-bold tracking-wider mb-4 border-bottom pb-2">DANH MỤC</h5>
                    <ul class="list-unstyled d-flex flex-column gap-3 fs-6">
                        <li>
                            <a href="#products" class="text-decoration-none ${!categoryId ? 'text-dark fw-bold' : 'text-secondary hover-dark'}">Tất Cả Sản Phẩm</a>
                        </li>
                        ${categories.map(c => `
                            <li>
                                <a href="#products/${c.id}" class="text-decoration-none ${categoryId === c.id ? 'text-dark fw-bold' : 'text-secondary hover-dark'}">${c.name}</a>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Product Grid -->
                <div class="col-lg-9">
                    <div class="row g-4">
                        ${filteredProducts.length > 0 ? filteredProducts.map(p => productCard(p)).join('') : '<div class="col-12 py-5 text-center text-muted">Không có sản phẩm nào trong danh mục này.</div>'}
                    </div>
                </div>
            </div>
            
            <!-- Bottom SEO/Content Section common in Arzopa collections -->
            <div class="row mt-5 pt-5 border-top">
                <div class="col-md-8 mx-auto text-center">
                    <h3 class="fw-bold mb-4">Nâng Cấp Thiết Bị Của Bạn</h3>
                    <p class="text-secondary">Sử dụng các phụ kiện chính hãng để kéo dài tuổi thọ và nâng cao trải nghiệm sử dụng các sản phẩm Arzopa của bạn. Từ màn hình di động, giá đỡ ô tô cho đến Samsung Dex.</p>
                </div>
            </div>
        </div>
    `;
}

// Render Product Details Page
function renderProductDetail(id) {
    const product = products.find(p => p.id === parseInt(id));
    
    if (!product) {
        return `
            <div class="container text-center py-5 my-5">
                <i class="bi bi-exclamation-circle display-1 text-muted mb-4 d-block"></i>
                <h2 class="fw-bold text-dark mb-4">Không tìm thấy sản phẩm!</h2>
                <a href="#products" class="btn btn-dark btn-lg rounded-0 px-5">QUAY LẠI CỬA HÀNG</a>
            </div>
        `;
    }

    return `
        <div class="container my-5 py-3">
            <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb fs-7 tracking-wider text-uppercase">
                    <li class="breadcrumb-item"><a href="#home" class="text-dark text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item"><a href="#products" class="text-dark text-decoration-none">Products</a></li>
                    <li class="breadcrumb-item active text-truncate" style="max-width: 200px;" aria-current="page">${product.name}</li>
                </ol>
            </nav>
            
            <div class="row gx-lg-5 mb-5 align-items-center">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="bg-light p-4 h-100 d-flex align-items-center justify-content-center" style="min-height: 500px;">
                        <img src="${product.image}" class="img-fluid object-fit-cover shadow-sm product-detail-img mix-blend-multiply" alt="${product.name}" style="max-height: 400px;">
                    </div>
                </div>
                <div class="col-md-6 py-4">
                    <h1 class="display-5 fw-black tracking-tighter mb-3">${product.name}</h1>
                    
                    <div class="d-flex align-items-center mb-4 pb-3 border-bottom border-light">
                        <div class="text-warning me-2 fs-5">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <span class="text-gray-400 fs-7">(128 Đánh giá)</span>
                    </div>

                    <h2 class="text-danger fw-bold display-6 mb-4">${product.price}</h2>
                    
                    <p class="lead mb-4 text-secondary fs-6" style="line-height: 1.8;">${product.description}</p>
                    
                    <ul class="list-unstyled mb-5 d-flex flex-column gap-2 text-dark fs-7">
                        <li><i class="bi bi-check2 text-success me-2 fs-5"></i><span>Bảo hành chính hãng 12 tháng</span></li>
                        <li><i class="bi bi-check2 text-success me-2 fs-5"></i><span>Miễn phí vận chuyển toàn quốc</span></li>
                        <li><i class="bi bi-check2 text-success me-2 fs-5"></i><span>Đổi trả miễn phí trong 30 ngày</span></li>
                    </ul>
                    
                    <div class="d-flex align-items-end mb-4 gap-3 border-top border-light pt-4">
                        <div>
                            <label class="form-label fw-bold fs-7 tracking-wider text-uppercase text-gray-400">Số lượng</label>
                            <div class="input-group border rounded-0" style="width: 140px; height: 50px;">
                                <button class="btn btn-light border-0 rounded-0 px-3 fw-bold fs-5 text-gray-400 hover-dark" type="button" onclick="const input = document.getElementById('qty'); input.value = Math.max(1, parseInt(input.value) - 1)">-</button>
                                <input type="number" id="qty" class="form-control text-center border-0 fw-bold fs-5 bg-transparent" value="1" min="1">
                                <button class="btn btn-light border-0 rounded-0 px-3 fw-bold fs-5 text-gray-400 hover-dark" type="button" onclick="const input = document.getElementById('qty'); input.value = parseInt(input.value) + 1">+</button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark flex-grow-1 border-0 rounded-0 fw-bold tracking-wider fs-6 hover-bg-danger" style="height: 50px;" onclick="alert('Đã thêm ${product.name} vào giỏ!')">
                            THÊM VÀO GIỎ <i class="bi bi-bag ms-2"></i>
                        </button>
                    </div>
                    
                    <!-- Checkout methods -->
                    <button type="button" class="btn btn-primary w-100 rounded-0 fw-bold py-3 fs-5 mb-4 border-0" style="background-color: #5a31f4;">
                        MUA NGAY BẰNG <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" height="20" class="ms-1" style="filter: brightness(0) invert(1);">
                    </button>
                </div>
            </div>
            
            <!-- Features Section -->
            <div class="row border-top border-bottom py-5 mt-5 text-center">
                <div class="col-md-3 col-6 mb-4 mb-md-0">
                    <i class="bi bi-truck display-4 mb-3 text-dark"></i>
                    <h6 class="fw-bold text-uppercase tracking-wider">Giao Hàng Miễn Phí</h6>
                    <p class="text-gray-400 fs-7 mb-0">Cho mọi đơn hàng nội địa</p>
                </div>
                <div class="col-md-3 col-6 mb-4 mb-md-0">
                    <i class="bi bi-shield-check display-4 mb-3 text-dark"></i>
                    <h6 class="fw-bold text-uppercase tracking-wider">Bảo Hành 1 Năm</h6>
                    <p class="text-gray-400 fs-7 mb-0">Cam kết chất lượng</p>
                </div>
                <div class="col-md-3 col-6 mb-4 mb-md-0">
                    <i class="bi bi-credit-card display-4 mb-3 text-dark"></i>
                    <h6 class="fw-bold text-uppercase tracking-wider">Thanh Toán An Toàn</h6>
                    <p class="text-gray-400 fs-7 mb-0">Bảo mật thông tin tuyệt đối</p>
                </div>
                <div class="col-md-3 col-6 mb-4 mb-md-0">
                    <i class="bi bi-arrow-repeat display-4 mb-3 text-dark"></i>
                    <h6 class="fw-bold text-uppercase tracking-wider">Đổi Trả Dễ Dàng</h6>
                    <p class="text-gray-400 fs-7 mb-0">Hỗ trợ 30 ngày đổi trả</p>
                </div>
            </div>
        </div>
    `;
}

// Simple Router
function router() {
    const appContainer = document.getElementById('app-container');
    const hash = window.location.hash || '#home';
    
    // Reset active states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'fw-black');
    });
    
    // UI Transition effect
    appContainer.style.opacity = 0;
    
    setTimeout(() => {
        // Route logic
        if (hash === '#home') {
            appContainer.innerHTML = renderHome();
            const el = document.querySelector('a[data-path="home"]');
            if(el) el.classList.add('active', 'fw-black');
        } else if (hash === '#products') {
            appContainer.innerHTML = renderProducts(null);
            const el = document.querySelector('a[data-path="products"]');
            if(el) el.classList.add('active', 'fw-black');
        } else if (hash.startsWith('#products/')) {
            const categoryId = hash.split('/')[1];
            appContainer.innerHTML = renderProducts(categoryId);
            const el = document.querySelector('a[data-path="products"]');
            if(el) el.classList.add('active', 'fw-black');
        } else if (hash.startsWith('#product/')) {
            const id = hash.split('/')[1];
            appContainer.innerHTML = renderProductDetail(id);
        } else {
            appContainer.innerHTML = `
                <div class="container text-center py-5 my-5">
                    <h1 class="fw-black display-1 tracking-tighter mb-3">404</h1>
                    <p class="fs-5 text-gray-400 mb-4">Oops! The page you are looking for does not exist.</p>
                    <a href="#home" class="btn btn-dark btn-lg rounded-0 px-5 fw-bold tracking-wider">BACK TO HOME</a>
                </div>
            `;
        }
        
        // Restore opacity and scroll to top
        appContainer.style.opacity = 1;
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 200);
}

// Start application
window.addEventListener('DOMContentLoaded', init);
