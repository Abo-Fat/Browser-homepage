// Time and Date Update
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('zh-CN', options);
    dateElement.textContent = dateStr;
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    if (type === 'error') {
        toast.classList.add('error');
    } else if (type === 'success') {
        toast.classList.add('success');
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Safe URL validation and navigation
function isValidUrl(urlString) {
    try {
        const url = new URL(urlString);
        // Only allow http and https protocols for security
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function safeNavigate(url) {
    if (isValidUrl(url)) {
        window.location.href = url;
    } else {
        showToast('无效的URL地址', 'error');
    }
}

// Search Functionality
const searchEngines = {
    google: 'https://www.google.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd=',
    bing: 'https://www.bing.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?q='
};

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchEngine = document.getElementById('search-engine').value;
    const query = searchInput.value.trim();
    
    if (query) {
        const searchUrl = searchEngines[searchEngine] + encodeURIComponent(query);
        window.location.href = searchUrl;
    }
}

// Search button click
document.getElementById('search-btn').addEventListener('click', performSearch);

// Search on Enter key
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Quick Links Management
function loadLinks() {
    const savedLinks = localStorage.getItem('quickLinks');
    if (savedLinks) {
        const links = JSON.parse(savedLinks);
        const defaultLinks = document.querySelectorAll('.link-item[data-url]');
        
        links.forEach(link => {
            addLinkToGrid(link.title, link.url, false);
        });
    }
}

function saveLinks() {
    const customLinks = [];
    const linkItems = document.querySelectorAll('.link-item:not([data-url])');
    
    linkItems.forEach(item => {
        const title = item.querySelector('.link-title').textContent;
        const url = item.getAttribute('data-custom-url');
        if (url) {
            customLinks.push({ title, url });
        }
    });
    
    localStorage.setItem('quickLinks', JSON.stringify(customLinks));
}

function addLinkToGrid(title, url, save = true) {
    const linksGrid = document.getElementById('links-grid');
    const linkItem = document.createElement('div');
    linkItem.className = 'link-item';
    linkItem.setAttribute('data-custom-url', url);
    
    // Get first letter for icon
    const firstLetter = title.charAt(0).toUpperCase();
    
    linkItem.innerHTML = `
        <div class="link-icon">
            <div style="font-size: 32px; font-weight: bold;">${firstLetter}</div>
        </div>
        <div class="link-title">${title}</div>
    `;
    
    linkItem.addEventListener('click', () => {
        safeNavigate(url);
    });
    
    linksGrid.appendChild(linkItem);
    
    if (save) {
        saveLinks();
    }
}

// Click handlers for default links
document.querySelectorAll('.link-item[data-url]').forEach(link => {
    link.addEventListener('click', () => {
        const url = link.getAttribute('data-url');
        safeNavigate(url);
    });
});

// Modal functionality
const modal = document.getElementById('add-link-modal');
const addLinkBtn = document.getElementById('add-link-btn');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');
const linkTitleInput = document.getElementById('link-title-input');
const linkUrlInput = document.getElementById('link-url-input');

addLinkBtn.addEventListener('click', () => {
    modal.classList.add('active');
    linkTitleInput.value = '';
    linkUrlInput.value = '';
    linkTitleInput.focus();
});

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

saveBtn.addEventListener('click', () => {
    const title = linkTitleInput.value.trim();
    const url = linkUrlInput.value.trim();
    
    if (title && url) {
        // Validate URL
        if (isValidUrl(url)) {
            addLinkToGrid(title, url);
            modal.classList.remove('active');
            showToast('链接添加成功！', 'success');
        } else {
            showToast('请输入有效的URL地址', 'error');
        }
    } else {
        showToast('请填写标题和URL', 'error');
    }
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Settings button (placeholder for future features)
document.getElementById('settings-btn').addEventListener('click', () => {
    showToast('设置功能即将推出！', 'info');
});

// Background customization (could be expanded)
function changeBackground(gradient) {
    document.body.style.background = gradient;
    localStorage.setItem('background', gradient);
}

function loadBackground() {
    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.body.style.background = savedBackground;
    }
}

// Initialize
updateTime();
setInterval(updateTime, 1000); // Update every second
loadBackground();
loadLinks();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search on "/" key
    if (e.key === '/' && document.activeElement !== document.getElementById('search-input')) {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
    
    // Close modal on Escape
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
