function showContent(contentId) {
    // Sembunyikan semua konten
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(content => {
        content.style.display = 'none';
    });

    // Tampilkan konten yang sesuai dengan ID yang diberikan
    const selectedContent = document.getElementById(contentId + '-content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
