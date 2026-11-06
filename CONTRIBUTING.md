# Contributing to Eco-Watch

How we work: one Jira ticket → one branch → one pull request (PR) → review → merge into `main`.

`main` is always the working version of the app. Nobody pushes to it directly; everything goes in through a PR.

---

## 1. First-time setup

```bash
git clone https://github.com/<org-or-user>/eco-watch.git
cd eco-watch
npm install
npx expo start
```

Open the app in **Expo Go** on your phone (scan the QR code), or press `a` (Android emulator), `i` (iOS simulator) or `w` (web).

Check that it works: open `/dev/components` (the "Component preview (dev)" link on the Launch screen).

---

## 2. Pick a ticket

1. Open the [EW board](https://kbmaputi.atlassian.net/jira/software/projects/EW/boards/3) and take a ticket from the current sprint.
2. Assign it to yourself and move it to **In Progress**.
3. Read the ticket's **Done when** list and open its Figma link. Build from the **EcoWatch - COMBINED** page.

---

## 3. Make a new branch

Always start from the latest `main`, so you build on everyone else's merged work:

```bash
git switch main
git pull
git switch -c feature/EW-12-onboarding
```

What each line does:

- `git switch main` goes to the main branch.
- `git pull` downloads what others merged since you last pulled.
- `git switch -c <name>` creates a new branch from here and moves you onto it.

### Branch names

`<type>/EW-<number>-<short-description>`, all lowercase, words joined with `-`.

| Type       | Use it for                   | Example                     |
| ---------- | ---------------------------- | --------------------------- |
| `feature/` | New screens or components    | `feature/EW-20-home-screen` |
| `fix/`     | Bug fixes                    | `fix/EW-23-filter-count`    |
| `chore/`   | Setup, tooling, dependencies | `chore/EW-8-eslint-config`  |

The ticket key (`EW-20`) lets Jira link the branch, commits and PR to the ticket automatically.

Check which branch you're on any time with `git branch --show-current`.

---

## 4. Write the code

Rules that keep the app consistent:

- **Colours, sizes and radii come from `src/theme/tokens.js`.** Never type a hex value in a screen. Need a new colour? Add it to the tokens (and to Figma) first.
- **Use our `Text`** from `@/components/ui`, never React Native's `Text`. It sets the font and colour for you.
- **Use `Screen`** for full screens so content stays clear of the notch.
- **Reuse components** from `src/components/ui` before making new ones. If you build something two screens need, put it in `src/components/ui`.
- **Sample data only** (`src/mocks`). No API calls until the API sprint.
- **Accessibility:** every tappable thing gets an `accessibilityRole` and a label, and is at least 44 px tall. Labels sit above fields.
- **Add packages with `npx expo install <name>`**, not `npm install`, so versions match the Expo SDK.

---

## 5. Commit

Commit small, working steps (for example once per component or per screen section):

```bash
git add -A
git commit -m "EW-20: Add the latest report card to Home"
```

### Commit messages

`EW-<number>: <what this commit does>`

- Start with the ticket key.
- Use the imperative, like finishing the sentence "This commit will…": **Add**, **Fix**, **Move**, **Remove**.
- Keep it under about 70 characters.

| Good                                            | Not so good     |
| ----------------------------------------------- | --------------- |
| `EW-20: Add the latest report card to Home`     | `home stuff`    |
| `EW-23: Fix the Open filter count`              | `fixed bug`     |
| `EW-13: Show the wrong-details error on Log in` | `EW-13 changes` |

---

## 6. Check before you push

```bash
npm run format
npm run typecheck
npm run lint
```

All three must pass. Then look at your screen on a real phone in Expo Go and compare it with Figma.

---

## 7. Push and open a pull request

The first push of a new branch:

```bash
git push -u origin feature/EW-20-home-screen
```

After that, just `git push`.

Then open a PR on GitHub: click **Compare & pull request** (or run `gh pr create --fill`).

- **Title:** same style as a commit, e.g. `EW-20: Home for a resident with reports`
- **Description:** fill in the template (what changed, screenshots, how to test).
- **Reviewer:** add at least one teammate.
- Move the Jira ticket to **In Review**.

---

## 8. Review

**If you're the author:** answer every comment. Push fixes to the same branch; the PR updates by itself.

**If you're the reviewer:**

- Pull the branch and run it: `git fetch` then `git switch feature/EW-20-home-screen`.
- Compare with Figma (spacing, colours, text).
- Check the ticket's **Done when** list.
- Approve, or leave clear comments ("This should use `text-small`, see Figma").

---

## 9. Merge

When the PR is approved and the checks pass:

1. Click **Squash and merge** on GitHub (or `gh pr merge --squash --delete-branch`). Squash turns all your branch's commits into one tidy commit on `main`.
2. Delete the branch (GitHub offers a button).
3. Move the Jira ticket to **Done**.
4. Update your computer:

```bash
git switch main
git pull
git branch -d feature/EW-20-home-screen
```

---

## Keeping your branch up to date

If `main` moved on while you were working (for example a teammate merged the tokens you need):

```bash
git switch main
git pull
git switch feature/EW-20-home-screen
git merge main
```

If Git says **CONFLICT**, it means you and someone else changed the same lines:

1. Open the files it lists. You'll see both versions between `<<<<<<<`, `=======` and `>>>>>>>` markers.
2. Keep the right code, delete the markers.
3. `git add -A` then `git commit` to finish the merge.
4. Ask a teammate if you're not sure which version to keep.

---

## Quick reference

```bash
# Start a ticket
git switch main && git pull
git switch -c feature/EW-XX-short-name

# Save work
git add -A
git commit -m "EW-XX: What this does"

# Before pushing
npm run format && npm run typecheck && npm run lint

# Push
git push -u origin feature/EW-XX-short-name   # first time
git push                                     # after that

# After the PR is merged
git switch main && git pull
git branch -d feature/EW-XX-short-name
```

Questions? Ask in the team chat before guessing. It's faster than undoing.
