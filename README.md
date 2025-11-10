# Tic-Tac-Toe

A clean, browser-based Tic‑Tac‑Toe game built with HTML, CSS, and JavaScript. Play locally in your browser or visit the live demo.

**Live Demo:** [https://rajeevks844.github.io/Tic-Tac-Toe/](https://rajeevks844.github.io/Tic-Tac-Toe/)

---

## ✨ Features

* **Two-player local mode** (Player X vs Player O)
* **Win / Draw detection** with instant UI updates
* **Reset / New Game** button to start over quickly
* **Responsive UI** works on desktop and mobile
* **Lightweight & fast** – no frameworks required

---

## 🧩 How to Play

1. Player **X** starts the game.
2. Players take turns tapping/clicking on empty cells.
3. First to get **three in a row** (horizontal, vertical, or diagonal) wins.
4. If the board fills with no winner, the game ends in a **draw**.

---

## 🛠 Tech Stack

* **HTML5** for structure
* **CSS3** for styling and responsiveness
* **Vanilla JavaScript** for game logic and interactivity

---

## 🚀 Getting Started (Local)

### 1) Clone the repository

```bash
git clone https://github.com/rajeevks844/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

### 2) Open in your browser

Just open **`index.html`** directly:

* Double-click `index.html`, **or**
* Use a local server (recommended):

  ```bash
  # Python 3
  python -m http.server 8000
  # then visit http://localhost:8000 in your browser
  ```

> No build step is required.

---

## 📁 Project Structure

```
Tic-Tac-Toe/
├─ index.html        # App markup
├─ style.css         # Styles
├─ script.js         # Game logic (board state, turns, win/draw check)
└─ assets/           # (Optional) images/icons
```

> File names may differ based on your implementation. Adjust if needed.

---

## 🧠 Game Logic Overview

* The board is represented as a 3×3 grid.
* Track the **current player** (`'X'` or `'O'`).
* After each move:

  * Validate the cell is empty
  * Update the board
  * Check all **winning combinations**
  * If none, check for **draw** (board full)
  * Toggle the current player

Typical winning lines (indices):

```
[0,1,2], [3,4,5], [6,7,8],     # rows
[0,3,6], [1,4,7], [2,5,8],     # cols
[0,4,8], [2,4,6]               # diagonals
```

---

## 🧪 Suggested Enhancements (optional)

* **Single‑player mode** with basic/optimal AI (Minimax)
* **Scoreboard** across rounds
* **Undo / Redo** moves
* **Animations & sound effects**
* **Theme toggle** (light/dark)

---

## 🔗 Deployment

This project is deployed with **GitHub Pages**:

1. Push your code to the `main` branch.
2. In the GitHub repo settings, enable **Pages** for the `main` branch (root).
3. Your game will be live at a URL like: `https://<username>.github.io/Tic-Tac-Toe/`.

Already live here:

* [https://rajeevks844.github.io/Tic-Tac-Toe/](https://rajeevks844.github.io/Tic-Tac-Toe/)

---

## 🐛 Troubleshooting

* **Blank page locally**: Run a local server instead of opening the file directly if your browser blocks local scripts.
* **Clicks not working**: Open DevTools (F12) → Console to check for JavaScript errors.
* **Layout issues on mobile**: Verify viewport meta tag and responsive CSS rules.

---

## 🤝 Contributing

Pull requests are welcome! If you plan a major change, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is open source. If you don’t have a specific license yet, consider adding an MIT License.

---

## 🙌 Credits

Built by **Rajeev Kumar**. Thanks for playing!
