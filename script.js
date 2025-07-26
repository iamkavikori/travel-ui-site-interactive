// 🌙 Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// 🛫 Dummy Flight Price Prediction (for now)
document.getElementById('predictBtn').addEventListener('click', () => {
    let duration = parseInt(document.getElementById('duration').value) || 200;
    let stops = parseInt(document.getElementById('stops').value) || 1;
    // Simple formula (later integrate ML model)
    let price = 2500 + duration * 5 + stops * 1000;
    document.getElementById('result').innerText = `💰 Estimated Price: ₹ ${price}`;
});
