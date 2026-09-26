<p align="center">
  <img src="assets/hero.webp" alt="HAL, Milo and Catbot in the Team 4E4 control room" width="100%">
</p>

# HAL 4E4 · Showcase

**A local-first AI partner with voice, expressive avatars, contextual memory and real tools.**

HAL 4E4 is Guido's evolving personal AI workspace. It combines natural conversation with creative rendering, desktop workflows, structured knowledge and a broker-verified **DEMO-only** trading cockpit.

[**Open the interactive showcase →**](https://maxvector-berlin.github.io/HAL-Showcase/)

## One assistant, three characters

| HAL | Milo | Catbot |
|:---:|:---:|:---:|
| <img src="assets/hal.webp" width="260" alt="HAL avatar"> | <img src="assets/milo.webp" width="260" alt="Milo avatar"> | <img src="assets/catbot.webp" width="260" alt="Catbot avatar"> |
| Calm and natural | Bright and playful | Precise and robotic |

Each avatar pack brings its own facial states, German visemes, idle behavior and matching multilingual voice direction. The visible character changes while the connected assistant remains consistent.

## What HAL connects

- **Voice and character performance** — speech recognition, multilingual TTS, avatar-specific voices, timed visemes, blinking and contextual facial expressions.
- **Creative AI cockpit** — ComfyUI workflows, model and LoRA selection, seeds, formats, pic-to-pic, three-prompt selection and render history.
- **Video workflows** — Krea model selection, image-to-video, cost preview, progress, playback and download.
- **Context and dossiers** — recent conversation plus structured knowledge about people, projects, places and ongoing topics.
- **Desktop and Photoshop bridge** — launch configured applications, prepare Photoshop documents and open selected render results.
- **Vision and files** — analyze screenshots, images, text, code and multiple uploaded files together.
- **Transparent API costs** — daily usage ledger by task, endpoint and model.
- **Capital.com DEMO cockpit** — broker reconciliation, spread guards, reservations, risk limits, stops, targets, timed exits and trade statistics.

## Voice becomes character performance

<img src="assets/voice-engine.webp" alt="HAL voice, viseme and expression engine concept" width="100%">

HAL's spoken answer is paired with a visual performance:

1. Input arrives through push-to-talk or text.
2. Pronunciation cleanup keeps names such as **HAL** and **Milo** consistent.
3. The active avatar chooses its own German or English voice direction.
4. A timing sidecar maps speech into visible mouth groups and real pauses.
5. Facial logic adds blinking, thought, amusement and subtle idle behavior.

The avatar window can be resized, moved, snapped to screen edges and kept on top. HAL, Milo and Catbot use the same engine with different image and voice packs.

## Creative pipeline with a real decision point

<img src="assets/creative-studio.webp" alt="HAL prompt choice and creative render pipeline concept" width="100%">

HAL supports direct rendering and a controlled three-prompt workflow:

```text
natural idea
  → three distinct prompt cards
  → choose 1, 2, 3, a subset or all
  → choose workflow, model, LoRA, strength, size, ratio and seed
  → render status and result cards
  → repeat, revise or open selected images in Photoshop
```

The workflow UI adapts to the selected model. Pic-to-pic adds an upload preview; Krea video adds duration, model, format, start image and optional end frame. Expected Krea cost is shown before submission.

## Context, dossiers and desktop actions

<img src="assets/memory-desktop.webp" alt="HAL contextual memory and desktop action concept" width="100%">

HAL combines two kinds of memory:

- **Recent conversation context** keeps the current exchange coherent.
- **Structured dossiers** store durable knowledge about people, projects, places, vehicles, devices and open topics.

Matching terms retrieve a compact summary first. Deeper sections are loaded only when needed, avoiding unnecessary context. That allows reactions such as:

> “Klaus is here.”<br>
> “Has he already sold one of the cars?”

Approved desktop actions use a managed program list. HAL can launch configured applications, ask which Photoshop format is required, create A4/Full HD/4K documents and hand selected render results to Photoshop.

## Commodities DEMO cockpit

<img src="assets/trading-cockpit.webp" alt="HAL gold and crude oil DEMO trading cockpit concept" width="100%">

The commodities runner focuses on Gold and Crude Oil in Capital.com **DEMO** mode:

1. Scan configured markets for confirmed pullbacks and local zones.
2. Check spread, direction, reward potential, stop risk and free trade slots.
3. Reserve an entry before order submission to prevent duplicate placements.
4. Attach stop, target and maximum holding time.
5. Reconcile local state against broker positions before further entries.
6. Import the broker's final booking value when the trade closes.

Configurable guardrails include position value, concurrent trades, per-trade loss, session target, daily loss, order-attempt limit and emergency close. Results and exit reasons remain visible in the trade ledger.

## Supporting systems

| System | What it adds |
|---|---|
| **Krea video** | Model selection, image-to-video, optional end frame, cost estimate, job tracking, preview and download |
| **Vision and files** | Screenshot, photo, code and text analysis; combined reasoning across multiple uploads |
| **Photoshop bridge** | Document creation plus opening selected completed renders |
| **Desktop launcher** | Voice-driven starts from an explicit managed application list |
| **API cost ledger** | Daily spend grouped by model, endpoint and purpose |
| **Render history** | Reopen, edit and rerender old prompts or pass their result to Photoshop |

## Real interface captures

The showcase includes a guided tour of the running interface rather than relying only on concept art. All 15 captures are presented in a consistent frame and can be opened full-size on the website.

| Command center | Creative results |
|:---:|:---:|
| <img src="assets/screens/01-command-center.webp" alt="HAL command center" width="100%"> | <img src="assets/screens/13-render-results.webp" alt="HAL three-result render view" width="100%"> |

| Knowledge admin | Broker reconciliation |
|:---:|:---:|
| <img src="assets/screens/15-knowledge-admin.webp" alt="HAL knowledge admin" width="100%"> | <img src="assets/screens/06-broker-reconciliation.webp" alt="HAL broker reconciliation" width="100%"> |

The complete tour covers:

- the central conversation, avatar, preview and status cockpit;
- model-aware Flux setup, three-prompt choice, result comparison and post-render routing;
- Krea video controls and the day-by-day API cost ledger;
- allowlisted voice program launching and Photoshop document presets;
- searchable memory, dossiers, chats, renders and observations;
- general and commodity-specific DEMO trade presets, pre-entry checks, emergency controls, broker reconciliation and the traceable trade ledger.

## Request flow

```text
voice / text
    ↓
intent + tone
    ↓
recent context + relevant dossiers
    ↓
specialized tool or workflow
    ↓
one coherent response
    ↓
voice + visemes + facial performance
```

Example:

> “HAL, make me three prompts for a futuristic flying car and let me choose.”

HAL returns three prompt cards. Guido chooses `1`, `2`, `3`, a subset or all. Only then does the selected workflow open with image size, aspect ratio and seed controls.

## Project principles

1. **Local** — private configuration and operational state stay on the user's system.
2. **Visible** — actions, costs, render progress and broker results remain inspectable.
3. **Modular** — characters and focused tools can evolve independently.
4. **Human** — the interface stays understandable, collaborative and occasionally funny.

## Safety and privacy

This repository is a visual showcase. It contains **no API keys, broker credentials, databases, account state, private memory or runtime logs**. The trading integration described here is restricted to Capital.com **DEMO** mode.

---

**Team 4E4** · People · Ideas · AI · Real Impact
