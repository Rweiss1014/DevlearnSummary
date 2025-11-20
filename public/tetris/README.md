# Tetris Training Game - Ready for Storyline! 🎮

Welcome! This folder contains everything you need to add the Tetris training game to your Articulate Storyline course.

---

## What Is This?

This is an **interactive Tetris game with built-in quiz questions** designed specifically for e-learning courses. Learners play Tetris, and every time they clear 5 lines, they answer training questions to earn bonus points.

**Perfect for:** Breaking up long training modules, testing knowledge in a fun way, and adding gamification to your courses.

---

## What's Inside?

When you open this folder, you'll find:

- **`index.html`** - The main game file (DO NOT EDIT)
- **`questions.csv`** *(if present)* - Your quiz questions (SAFE TO EDIT)
- **Supporting files** - Scripts and styles embedded in the HTML

> **Important:** Everything you need is already set up. You only need to update questions if you want to customize the content!

---

## How to Edit Questions

### ✅ What You CAN Do:
- Open `questions.csv` (if present) in Excel or Google Sheets
- Edit the question text
- Change answer options
- Update explanations
- Add or remove questions

### ❌ What You Should NOT Do:
- **Do NOT rename** the CSV file
- **Do NOT edit** the `index.html` file
- **Do NOT delete** any columns in the CSV
- **Do NOT move** files out of this folder

### Step-by-Step CSV Editing:
1. Open `questions.csv` in Excel or Google Sheets
2. Edit the text in the cells (questions, answers, explanations)
3. **Save as CSV** with the **exact same filename**: `questions.csv`
4. Make sure it stays in the same folder as `index.html`
5. Done! The game will use your updated questions

> **Pro Tip:** Keep a backup copy of the original CSV before making changes!

---

## Adding to Storyline

Follow these simple steps to add the game to your course:

### Step 1: Insert Web Object
1. Open your Storyline project
2. Go to the slide where you want the game
3. Click **Insert** → **Web Object** → **Web object from folder**
4. Select this entire folder (`dist-storyline`)

### Step 2: Set the Size
- **Width:** 1280
- **Height:** 720
- ✅ Check the box for **"Scale to fit"**

### Step 3: Add Instructions
Add a text box on your slide that says:
> *"Click the game to start. Use Arrow Keys (←→↑↓) and SPACE bar to play."*

### Step 4: Preview & Publish
1. **Preview in Storyline** first to test
2. If it works, **publish your course**
3. Test again in your LMS

**That's it!** Your learners can now play the game.

---

## Quick FAQs

### ❓ What if I accidentally rename the CSV file?
**Answer:** The game won't load your questions. Rename it back to exactly `questions.csv` and it will work again.

---

### ❓ Can I add or remove questions?
**Answer:** Yes! You can add as many rows as you want in the CSV, or delete rows you don't need. Just make sure to keep the column headers (first row) intact.

---

### ❓ How do I know it's working in Storyline?
**Answer:**
- In **Storyline Preview**: Click the game area, then try pressing arrow keys. If the pieces move, it's working!
- After **publishing**: Upload to your LMS and test the course. Play through 5 lines to make sure the quiz appears.

---

### ❓ The game controls don't work. What's wrong?
**Answer:** Learners need to **click inside the game area first** to give it focus. Make sure your instructions tell them to click the game before using the keyboard.

---

### ❓ Can I use this game on mobile devices?
**Answer:** This game is designed for **desktop/laptop computers with keyboards**. It won't work well on tablets or phones (no arrow keys!).

---

### ❓ Do high scores save between sessions?
**Answer:** Yes! High scores are saved in the learner's browser. If they close and reopen the course, their scores will still be there (unless they clear their browser data).

---

### ❓ What if something breaks?
**Answer:**
1. **First:** Don't panic! Make sure you didn't rename or delete any files.
2. **Check:** Is the CSV file still named exactly `questions.csv`?
3. **Test:** Try re-importing the folder into Storyline.
4. **Still stuck?** Contact your tech team or the person who gave you this folder.

---

## Tips for Success

✅ **Always test in Storyline Preview** before publishing
✅ **Keep a backup** of the original folder
✅ **Don't move files** around—keep everything together
✅ **Save your CSV with the exact same name** after editing
✅ **Tell learners to click the game** before playing

---

## Need Help?

If you run into issues:
1. Check this README again (especially the FAQs)
2. Make sure you're following the steps exactly
3. Ask your instructional design or tech support team

---

**Ready to add some fun to your course? Drop this folder into Storyline and you're all set!** 🎉

---

*File Version: 1.0 | Last Updated: 2025-11-08*
