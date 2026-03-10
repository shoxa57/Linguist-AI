/**
 * Linguist AI - Frontend Logic
 * Connects the UI with the neural translation simulation.
 */

async function runTranslation() {
    const input = document.getElementById('transInput');
    const output = document.getElementById('transOutput');
    const targetLang = document.getElementById('langSelect').value;

    if (!input.value.trim()) {
        output.innerHTML = '<span style="color: #ff4d4d;">System Error: No input detected.</span>';
        return;
    }

    // Processing animation
    output.innerHTML = '<div class="pulse" style="color: #bb86fc;">Syncing Neural Pathways...</div>';

    try {
        // Simulating the Python backend logic via a high-speed API
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(input.value)}&langpair=autodetect|${targetLang}`
        );
        const data = await response.json();

        if (data.responseData) {
            const translatedText = data.responseData.translatedText;
            output.innerHTML = `
                <div style="text-align: left;">
                    <b style="color: #bb86fc; font-size: 0.8rem; letter-spacing: 2px;">OUTPUT_RECEIVED:</b>
                    <p style="margin-top: 10px; color: white; line-height: 1.6;">${translatedText}</p>
                </div>
            `;
        } else {
            throw new Error("Core Timeout");
        }
    } catch (err) {
        output.innerHTML = '<span style="color: #ff4d4d;">FATAL_ERROR: Neural Core Offline.</span>';
    }
}
