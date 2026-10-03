/**
 * Shared Feedback Form Component
 * 
 * Usage: Add <div id="feedback-container"></div> and <script src="feedback.js"></script>
 * where you want the feedback section to appear.
 */
(function () {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .feedback-section {
            width: 100%;
            margin-top: 4rem;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(129, 140, 248, 0.1));
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 2rem;
            text-align: center;
            box-sizing: border-box;
        }

        .feedback-title {
            font-family: 'Outfit', sans-serif;
            font-size: 2rem;
            color: #f8fafc;
            margin: 0 0 1rem 0;
            font-weight: 800;
        }

        .feedback-desc {
            color: #94a3b8;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

        .feedback-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        .feedback-email {
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 1rem;
            width: 100%;
            max-width: 500px;
            outline: none;
            transition: border-color 0.3s;
            font-family: 'Inter', sans-serif;
            box-sizing: border-box;
        }

        .feedback-email:focus {
            border-color: #38bdf8;
        }

        .feedback-input {
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 1rem;
            width: 100%;
            max-width: 500px;
            min-height: 120px;
            resize: vertical;
            outline: none;
            transition: border-color 0.3s;
            font-family: 'Inter', sans-serif;
            box-sizing: border-box;
        }

        .feedback-input:focus {
            border-color: #38bdf8;
        }

        .feedback-btn {
            padding: 1rem 2rem;
            border-radius: 12px;
            border: none;
            background: linear-gradient(135deg, #38bdf8, #818cf8);
            color: white;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            width: 100%;
            max-width: 500px;
        }

        .feedback-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
        }

        @media (max-width: 600px) {
            .feedback-form {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);

    // Inject HTML
    const container = document.getElementById('feedback-container');
    if (!container) return;

    container.innerHTML = `
    <section class="feedback-section">
        <h2 class="feedback-title">We Value Your Feedback</h2>
        <p class="feedback-desc">Let us know how we can improve your SuperRobots experience.</p>
        <form class="feedback-form" id="feedback-form">
            <input type="email" class="feedback-email" placeholder="Your email address" required>
            <textarea class="feedback-input" placeholder="Enter your feedback here..." required></textarea>
            <button type="submit" class="feedback-btn">Submit Feedback</button>
        </form>
    </section>
    `;

    // Attach submit handler
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('.feedback-btn');
        const email = form.querySelector('.feedback-email').value;
        const feedback = form.querySelector('.feedback-input').value;
        const originalText = btn.textContent;
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        try {
            await fetch('https://script.google.com/macros/s/AKfycbwA3dDW7vIC6MIGxneJtxcUkSPMj0XtXOLiR5dDqmBLxdaZg23_BdaCAM369ERcpoToZg/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ 'email': email, 'feedback': feedback })
            });
            form.innerHTML = '<p style="color: #4ade80; font-weight: bold; margin: 0; padding: 1rem; font-size: 1.2rem;">Thank you for your feedback!</p>';
        } catch (error) {
            btn.textContent = originalText;
            btn.disabled = false;
            alert('Oops! Something went wrong. Please check your connection and try again.');
        }
    });
})();
