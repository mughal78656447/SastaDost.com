function openDetails(name, role, condition, price, desc, phone) {
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-role').innerText = role;
    document.getElementById('modal-condition').innerText = condition;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-desc').innerText = desc;

    // WhatsApp Direct Link Setup
    const text = encodeURIComponent(`سلام! مجھے ${name} خریدنا ہے۔ اس کی قیمت ${price} ہے نا؟`);
    document.getElementById('modal-wa-link').href = `https://wa.me/${phone}?text=${text}`;

    document.getElementById('detailsModal').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = 'none';
}

// Close Modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}