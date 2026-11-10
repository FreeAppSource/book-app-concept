# Book App Concept (React Native · Expo)

> 👨‍💻 Developed by **[Suresh Kumar Meesala](https://github.com/SureshKumarMeesala)** · 🎨 UI design by **Bhavna Kashyap** (credits below)

A React Native mobile audiobook application based on the Figma design in the original Figma file.

---

## 📱 Design Artboards

This Figma design consists of **2 core artboards (375 × 812)**, both of which are implemented:

### 1. `Home` Screen (`0:2`)
- **Top App Bar** (`0:5952`): Greeting, profile icon, search bar (`0:5944`).
- **Category Switcher** (`0:572`): `Trending`, `Popular`, `New` tab filters.
- **Audiobook Cards** (`0:587`, `0:1510`, `0:4194`):
  - 📖 **"Under The Rain"** by **Sarah Wins** (Genre: *Fiction*, Rating: *4.2*, Duration: *2h 19m*)
  - 📖 **"Midnight Dreams"** by **Shreya** (Genre: *Drama*, Rating: *4.2*, Duration: *3h 05m*)
  - 📖 **"Day Remember"** by **Nicholas** (Genre: *Love*, Rating: *4.2*, Duration: *1h 48m*)
- **Bottom Navigation** (`0:5915`): Home, Library, Favorites, Profile.
- **Floating Mini Player**: Instant resume with timestamps.

### 2. `Player` Screen (`0:5966`)
- **Header** (`0:7898`): Back button and bookmark toggle.
- **Vinyl Artwork** (`0:7124`): Stylized rotating vinyl cover with gradient center and spindle.
- **Book Metadata** (`0:7872`): Book title, author, and genre tag.
- **Scrubber & Timestamps** (`0:7880`):
  - Exact current position: `0:58:34` (`0:7885`)
  - Exact remaining duration: `1:20:34` (`0:7884`)
  - Interactive scrub slider.
- **Playback Controls** (`0:7886`):
  - 15s Rewind (`0:7891`)
  - Large Play/Pause button (`0:7895`)
  - 15s Fast Forward (`0:7887`)
- **Bottom Actions Bar** (`0:7102`):
  - Variable speed toggle (`1.0x`, `1.25x`, `1.5x`, `2.0x`)
  - Expandable Chapters sheet
  - Sleep timer
  - Share sheet

---

## 🎨 Design Tokens & Palette (`src/theme.js`)

Extracted directly from the Figma document AST:
- **Primary Indigo**: `#555FB2`
- **Coral / Warm Pink**: `#FD6E8D`
- **Warm Gold Accent**: `#FFD562`
- **Peach Tone**: `#FF9B82`
- **Canvas Background**: `#F8E8E9`
- **Dark Text**: `#242424`
- **Light & Dark Theme Support** with React Context Provider

---

## 🚀 How to Run

```bash
cd "/Users/sureshkumar/Documents/MIT Mobile Apps/Apps/Book App Concept"
npx expo start
```

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

<!-- developer:start -->

## 👨‍💻 Developer

This React Native app was developed by **Suresh Kumar Meesala**.

| | |
|---|---|
| Developer | [Suresh Kumar Meesala](https://github.com/SureshKumarMeesala) |
| GitHub | [@SureshKumarMeesala](https://github.com/SureshKumarMeesala) |
| Organization | [FreeAppSource](https://github.com/FreeAppSource) |
| Repository | <https://github.com/FreeAppSource/book-app-concept> |

<!-- developer:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Audio Book App Concept** design by **Bhavna Kashyap**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Bhavna Kashyap](https://www.sketchappsources.com/contributor/bhavnakashyap) |
| Original design | [Audio Book App Concept](https://dribbble.com/shots/8710375-Book-App-Concept) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4683-audio-book-app-concept-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/bhavnakashyap> |
| Twitter | <https://twitter.com/bhavnakash22> |
| Website | <https://www.instagram.com/bhavna_67/> |
| Original file | `book-app-concept-bhavnakashyap` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Audio Book App Concept" by Bhavna Kashyap (https://dribbble.com/shots/8710375-Book-App-Concept), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4683-audio-book-app-concept-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
