# Eco-Watch

Mobile app for Mandaue City residents to report environmental problems to MCENRO: take a photo, pin the place, add a few details, and follow the report until it's resolved.

This is the Expo (React Native) rebuild of the old Flutter app. For now it's **UI only**: every screen runs on typed sample data in `src/mocks/`, and nothing calls the API yet. The backend is MCENROWebApi.

## Links

- **Design:** [Figma · EcoWatch – COMBINED](https://www.figma.com/design/vpCKLmFTG65gT1sWaRYUKi/Eco-Watch?node-id=212-1808), the page we build from. FINAL and DEPRECATED are reference only.
- **Tickets:** [Jira · EW board](https://kbmaputi.atlassian.net/jira/software/projects/EW/boards/3)

## Tech stack

- Expo SDK 58 with Expo Router (file-based screens)
- TypeScript
- NativeWind 4 (Tailwind CSS for React Native)
- Plus Jakarta Sans via `@expo-google-fonts`
- `expo-blur` for glass panels, `lucide-react-native` for icons

## Getting started

You need Node.js 20 or newer, and the **Expo Go** app on your phone.

```bash
git clone https://github.com/well-bluu/eco-watch.git
cd eco-watch
npm install
npx expo start
```

Then scan the QR code with Expo Go (Android) or the Camera app (iOS). In the terminal, press `a` for an Android emulator, `i` for the iOS simulator, or `w` for web.

If styles or fonts look wrong after pulling changes, clear the cache: `npx expo start -c`

### Dev screens

- `/dev/components`: every shared component, to compare with Figma. It's linked from the Launch screen while developing.
- `/dev/crash`: throws on purpose, to check the error screen.

## Scripts

| Command                | What it does                            |
| ---------------------- | --------------------------------------- |
| `npx expo start`       | Start the dev server                    |
| `npm run lint`         | ESLint                                  |
| `npm run typecheck`    | TypeScript check                        |
| `npm run format`       | Prettier (also sorts Tailwind classes)  |
| `npm run format:check` | Check formatting without changing files |

Add packages with `npx expo install <name>`, not `npm install`, so versions match the Expo SDK.

## Folders

```
src/
  app/              Screens. Every file is a route (Expo Router).
    _layout.tsx     Fonts, splash and the app-wide error screen
    index.tsx       Launch screen
    +not-found.tsx  Shown for routes that don't exist
    dev/            Dev-only screens
  components/
    ui/             Shared components: Text, Screen, Glass, Button, Field, cards, TabBar…
  mocks/            Sample data and TypeScript types (shaped after the API)
  theme/tokens.js   Colours, fonts, sizes and radii
  lib/              Small helpers
assets/images/      Seal, app icon, splash, sample photos
```

## Design rules

- **Tokens only.** Colours, type sizes and radii come from `src/theme/tokens.js`. Never type a hex value in a screen. Icons take `colors.navy`, `colors.ink` and so on.
- **Use our `Text`** from `@/components/ui`, never React Native's `Text`. It sets the font and colour.
- **Use `Screen`** for full screens, so content stays clear of the notch and home bar.
- **Glass only over photos, maps or scrolling content.** The floating tab bar is the only thing with a shadow.
- **Colour roles:** navy for buttons, links and progress. Gold for accents only, never a button. Ink for text. Forest means Resolved. Danger is for errors only.
- **Fields:** label above the box, never a placeholder only. Borders use `border` (`#8F8A80`), not `line`.
- **Accessibility:** every tappable thing has an accessibility role and label, and is at least 44 px tall.

## Report statuses

The app follows the API's four statuses, in order:

**Submitted → Verified → Dispatched → Resolved**

The API stores the current status and the submitted time only.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to pick a ticket, name a branch, write commits and open a pull request.

Short version:

```bash
git switch main && git pull
git switch -c feature/EW-XX-short-name
# …work…
git commit -m "EW-XX: What this does"
git push -u origin feature/EW-XX-short-name
```
