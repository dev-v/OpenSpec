// OpenSpec 中文文档 - 共享 JS

// 侧边栏搜索过滤
function initSearch() {
  const input = document.querySelector('.sidebar-search input');
  if (!input) return;

  input.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    const items = document.querySelectorAll('.sidebar-nav .nav-item');
    items.forEach(function(item) {
      const text = item.textContent.toLowerCase();
      if (q === '' || text.includes(q)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// 移动端侧边栏切换
function initMobileToggle() {
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });
}

// 高亮当前页面
function highlightCurrent() {
  const items = document.querySelectorAll('.sidebar-nav .nav-item a');
  const currentFile = window.location.pathname.split('/').pop();
  items.forEach(function(a) {
    const href = a.getAttribute('href');
    if (href === currentFile || href === './' + currentFile) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initSearch();
  initMobileToggle();
  highlightCurrent();
});
